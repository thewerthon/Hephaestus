﻿using System.Text;
using System.Data;
using System.Globalization;
using System.Linq.Dynamic.Core;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using System.Reflection;

namespace Hephaestus.Backend.Abstractions.Controllers;

public abstract class BaseExportController : Controller {

	public IQueryable ApplyQuery<T>(IQueryable<T> items, IQueryCollection? query = null, bool keyless = false) where T : class {

		if (query is not null) {

			if (query.ContainsKey("$expand")) {

				var propertiesToExpand = query["$expand"].ToString().Split(',');

				foreach (var p in propertiesToExpand) {
					items = items.Include(p);
				}

			}

			var filter = query.ContainsKey("$filter") ? query["$filter"].ToString() : null;

			if (!string.IsNullOrEmpty(filter)) {

				if (keyless) items = items.ToList().AsQueryable();
				items = items.Where(filter);

			}

			if (query.ContainsKey("$orderBy")) {

				items = items.OrderBy(query["$orderBy"].ToString());

			}

			if (query.ContainsKey("$skip")) {

				items = items.Skip(int.Parse(query["$skip"].ToString()));

			}

			if (query.ContainsKey("$top")) {

				items = items.Take(int.Parse(query["$top"].ToString()));

			}

			if (query.ContainsKey("$select")) {

				return items.Select($"new ({query["$select"]})");

			}

		}

		return items;

	}

	public FileStreamResult ToCSV(IQueryable query, string? fileName = null) {

		var builder = new StringBuilder();
		var columns = GetProperties(query.ElementType);

		foreach (var item in query) {

			var row = new List<string>();

			foreach (var column in columns) {

				row.Add($"{GetValue(item, column.Key)}".Trim());

			}

			builder.AppendLine(string.Join(",", [.. row]));

		}

		var result = new FileStreamResult(new MemoryStream(UTF8Encoding.Default.GetBytes($"{string.Join(",", columns.Select(c => c.Key))}{Environment.NewLine}{builder}")), "text/csv") {
			FileDownloadName = (!string.IsNullOrEmpty(fileName) ? fileName : "Export") + ".csv"
		};

		return result;

	}

	public FileStreamResult ToExcel(IQueryable query, string? fileName = null) {

		var stream = new MemoryStream();
		var columns = GetProperties(query.ElementType);

		using (var document = SpreadsheetDocument.Create(stream, SpreadsheetDocumentType.Workbook)) {

			var workbookPart = document.AddWorkbookPart();
			workbookPart.Workbook = new Workbook();

			var worksheetPart = workbookPart.AddNewPart<WorksheetPart>();
			worksheetPart.Worksheet = new Worksheet();

			var workbookStylesPart = workbookPart.AddNewPart<WorkbookStylesPart>();
			GenerateWorkbookStylesPartContent(workbookStylesPart);

			var sheets = workbookPart.Workbook.AppendChild(new Sheets());
			var sheet = new Sheet() { Id = workbookPart.GetIdOfPart(worksheetPart), SheetId = 1, Name = "Data" };

			sheets.Append(sheet);
			workbookPart.Workbook.Save();

			var sheetData = worksheetPart.Worksheet.AppendChild(new SheetData());
			var headerRow = new Row();

			foreach (var column in columns) {

				headerRow.Append(new Cell() {

					CellValue = new CellValue(column.Key),
					DataType = new EnumValue<CellValues>(CellValues.String)

				});

			}

			sheetData.AppendChild(headerRow);

			foreach (var item in query) {

				var row = new Row();

				foreach (var column in columns) {

					var value = GetValue(item, column.Key);
					var stringValue = $"{value}".Trim();

					var cell = new Cell();

					var underlyingType = column.Value.IsGenericType &&
							column.Value.GetGenericTypeDefinition() == typeof(Nullable<>) ?
							Nullable.GetUnderlyingType(column.Value) : column.Value;

					var typeCode = Type.GetTypeCode(underlyingType);

					if (typeCode == TypeCode.DateTime) {

						if (!string.IsNullOrWhiteSpace(stringValue)) {

							cell.CellValue = new CellValue() { Text = ((DateTime)value!).ToOADate().ToString(System.Globalization.CultureInfo.InvariantCulture) };
							cell.DataType = new EnumValue<CellValues>(CellValues.Number);
							cell.StyleIndex = (UInt32Value)1U;

						}

					} else if (typeCode == TypeCode.Boolean) {

						cell.CellValue = new CellValue(stringValue.ToLowerInvariant());
						cell.DataType = new EnumValue<CellValues>(CellValues.Boolean);

					} else if (IsNumeric(typeCode)) {

						if (value != null) stringValue = Convert.ToString(value, CultureInfo.InvariantCulture);

						cell.CellValue = new CellValue(stringValue!);
						cell.DataType = new EnumValue<CellValues>(CellValues.Number);

					} else {

						cell.CellValue = new CellValue(stringValue!);
						cell.DataType = new EnumValue<CellValues>(CellValues.String);

					}

					row.Append(cell);
				}

				sheetData.AppendChild(row);

			}

			workbookPart.Workbook.Save();

		}

		if (stream?.Length > 0) stream.Seek(0, SeekOrigin.Begin);
		var result = new FileStreamResult(stream!, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
			FileDownloadName = (!string.IsNullOrEmpty(fileName) ? fileName : "Export") + ".xlsx"
		};

		return result;

	}

	public static object? GetValue(object target, string name) {

		return target.GetType().GetProperty(name)?.GetValue(target);

	}

	public static IEnumerable<KeyValuePair<string, Type>> GetProperties(Type type) {

		return type.GetProperties(BindingFlags.Public | BindingFlags.Instance)
						.Where(p => p.CanRead && IsSimpleType(p.PropertyType)).Select(p => new KeyValuePair<string, Type>(p.Name, p.PropertyType));

	}

	public static bool IsSimpleType(Type type) {

		var underlyingType = type.IsGenericType &&
				type.GetGenericTypeDefinition() == typeof(Nullable<>) ?
				Nullable.GetUnderlyingType(type) : type;

		if (underlyingType == typeof(System.Guid) || underlyingType == typeof(System.DateTimeOffset))
			return true;

		var typeCode = Type.GetTypeCode(underlyingType);

		return typeCode switch {
			TypeCode.Boolean or TypeCode.Byte or TypeCode.Char or TypeCode.DateTime or TypeCode.Decimal or TypeCode.Double or TypeCode.Int16 or TypeCode.Int32 or TypeCode.Int64 or TypeCode.SByte or TypeCode.Single or TypeCode.String or TypeCode.UInt16 or TypeCode.UInt32 or TypeCode.UInt64 => true,
			_ => false,
		};

	}

	private static bool IsNumeric(TypeCode typeCode) {

		return typeCode switch {
			TypeCode.Decimal or TypeCode.Double or TypeCode.Int16 or TypeCode.Int32 or TypeCode.Int64 or TypeCode.UInt16 or TypeCode.UInt32 or TypeCode.UInt64 => true,
			_ => false,
		};

	}

	private static void GenerateWorkbookStylesPartContent(WorkbookStylesPart workbookStylesPart1) {

		var stylesheet1 = new Stylesheet() { MCAttributes = new MarkupCompatibilityAttributes() { Ignorable = "x14ac x16r2 xr" } };
		stylesheet1.AddNamespaceDeclaration("mc", "http://schemas.openxmlformats.org/markup-compatibility/2006");
		stylesheet1.AddNamespaceDeclaration("x14ac", "http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac");
		stylesheet1.AddNamespaceDeclaration("x16r2", "http://schemas.microsoft.com/office/spreadsheetml/2015/02/main");
		stylesheet1.AddNamespaceDeclaration("xr", "http://schemas.microsoft.com/office/spreadsheetml/2014/revision");

		var fonts1 = new Fonts() { Count = (UInt32Value)1U, KnownFonts = true };

		var font1 = new Font();
		var fontSize1 = new FontSize() { Val = 11D };
		var color1 = new Color() { Theme = (UInt32Value)1U };
		var fontName1 = new FontName() { Val = "Calibri" };
		var fontFamilyNumbering1 = new FontFamilyNumbering() { Val = 2 };
		var fontScheme1 = new FontScheme() { Val = FontSchemeValues.Minor };

		font1.Append(fontSize1);
		font1.Append(color1);
		font1.Append(fontName1);
		font1.Append(fontFamilyNumbering1);
		font1.Append(fontScheme1);

		fonts1.Append(font1);

		var fills1 = new Fills() { Count = (UInt32Value)2U };

		var fill1 = new Fill();
		var patternFill1 = new PatternFill() { PatternType = PatternValues.None };

		fill1.Append(patternFill1);

		var fill2 = new Fill();
		var patternFill2 = new PatternFill() { PatternType = PatternValues.Gray125 };

		fill2.Append(patternFill2);

		fills1.Append(fill1);
		fills1.Append(fill2);

		var borders1 = new Borders() { Count = (UInt32Value)1U };

		var border1 = new Border();
		var leftBorder1 = new LeftBorder();
		var rightBorder1 = new RightBorder();
		var topBorder1 = new TopBorder();
		var bottomBorder1 = new BottomBorder();
		var diagonalBorder1 = new DiagonalBorder();

		border1.Append(leftBorder1);
		border1.Append(rightBorder1);
		border1.Append(topBorder1);
		border1.Append(bottomBorder1);
		border1.Append(diagonalBorder1);

		borders1.Append(border1);

		var cellStyleFormats1 = new CellStyleFormats() { Count = (UInt32Value)1U };
		var cellFormat1 = new CellFormat() { NumberFormatId = (UInt32Value)0U, FontId = (UInt32Value)0U, FillId = (UInt32Value)0U, BorderId = (UInt32Value)0U };

		cellStyleFormats1.Append(cellFormat1);

		var cellFormats1 = new CellFormats() { Count = (UInt32Value)2U };
		var cellFormat2 = new CellFormat() { NumberFormatId = (UInt32Value)0U, FontId = (UInt32Value)0U, FillId = (UInt32Value)0U, BorderId = (UInt32Value)0U, FormatId = (UInt32Value)0U };
		var cellFormat3 = new CellFormat() { NumberFormatId = (UInt32Value)14U, FontId = (UInt32Value)0U, FillId = (UInt32Value)0U, BorderId = (UInt32Value)0U, FormatId = (UInt32Value)0U, ApplyNumberFormat = true };

		cellFormats1.Append(cellFormat2);
		cellFormats1.Append(cellFormat3);

		var cellStyles1 = new CellStyles() { Count = (UInt32Value)1U };
		var cellStyle1 = new CellStyle() { Name = "Normal", FormatId = (UInt32Value)0U, BuiltinId = (UInt32Value)0U };

		cellStyles1.Append(cellStyle1);
		var differentialFormats1 = new DifferentialFormats() { Count = (UInt32Value)0U };
		var tableStyles1 = new TableStyles() { Count = (UInt32Value)0U, DefaultTableStyle = "TableStyleMedium2", DefaultPivotStyle = "PivotStyleLight16" };

		var stylesheetExtensionList1 = new StylesheetExtensionList();

		var stylesheetExtension1 = new StylesheetExtension() { Uri = "{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}" };
		stylesheetExtension1.AddNamespaceDeclaration("x14", "http://schemas.microsoft.com/office/spreadsheetml/2009/9/main");

		var stylesheetExtension2 = new StylesheetExtension() { Uri = "{9260A510-F301-46a8-8635-F512D64BE5F5}" };
		stylesheetExtension2.AddNamespaceDeclaration("x15", "http://schemas.microsoft.com/office/spreadsheetml/2010/11/main");

		var openXmlUnknownElement4 = workbookStylesPart1.CreateUnknownElement("<x15:timelineStyles defaultTimelineStyle=\"TimeSlicerStyleLight1\" xmlns:x15=\"http://schemas.microsoft.com/office/spreadsheetml/2010/11/main\" />");

		stylesheetExtension2.Append(openXmlUnknownElement4);

		stylesheetExtensionList1.Append(stylesheetExtension1);
		stylesheetExtensionList1.Append(stylesheetExtension2);

		stylesheet1.Append(fonts1);
		stylesheet1.Append(fills1);
		stylesheet1.Append(borders1);
		stylesheet1.Append(cellStyleFormats1);
		stylesheet1.Append(cellFormats1);
		stylesheet1.Append(cellStyles1);
		stylesheet1.Append(differentialFormats1);
		stylesheet1.Append(tableStyles1);
		stylesheet1.Append(stylesheetExtensionList1);

		workbookStylesPart1.Stylesheet = stylesheet1;

	}

}