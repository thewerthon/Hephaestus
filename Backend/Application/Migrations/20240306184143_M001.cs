using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Hephaestus.Backend.Application.Migrations
{
    /// <inheritdoc />
    public partial class M001 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "UpdatedOn",
                table: "Users",
                type: "datetimeoffset(0)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "CreatedOn",
                table: "Users",
                type: "datetimeoffset(0)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "DateTime",
                table: "UsageLogs",
                type: "datetimeoffset(0)",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "UpdatedOn",
                table: "Tests",
                type: "datetimeoffset(0)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTimeOffset>(
                name: "CreatedOn",
                table: "Tests",
                type: "datetimeoffset(0)",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 896, DateTimeKind.Unspecified).AddTicks(7038), new TimeSpan(0, 0, 0, 0, 0)), new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 896, DateTimeKind.Unspecified).AddTicks(7040), new TimeSpan(0, 0, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 896, DateTimeKind.Unspecified).AddTicks(7042), new TimeSpan(0, 0, 0, 0, 0)), new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 896, DateTimeKind.Unspecified).AddTicks(7043), new TimeSpan(0, 0, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 896, DateTimeKind.Unspecified).AddTicks(7044), new TimeSpan(0, 0, 0, 0, 0)), new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 896, DateTimeKind.Unspecified).AddTicks(7044), new TimeSpan(0, 0, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 899, DateTimeKind.Unspecified).AddTicks(5087), new TimeSpan(0, 0, 0, 0, 0)), new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 899, DateTimeKind.Unspecified).AddTicks(5088), new TimeSpan(0, 0, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 899, DateTimeKind.Unspecified).AddTicks(5091), new TimeSpan(0, 0, 0, 0, 0)), new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 899, DateTimeKind.Unspecified).AddTicks(5092), new TimeSpan(0, 0, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 899, DateTimeKind.Unspecified).AddTicks(5094), new TimeSpan(0, 0, 0, 0, 0)), new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 899, DateTimeKind.Unspecified).AddTicks(5094), new TimeSpan(0, 0, 0, 0, 0)) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 899, DateTimeKind.Unspecified).AddTicks(5096), new TimeSpan(0, 0, 0, 0, 0)), new DateTimeOffset(new DateTime(2024, 3, 6, 18, 41, 42, 899, DateTimeKind.Unspecified).AddTicks(5097), new TimeSpan(0, 0, 0, 0, 0)) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedOn",
                table: "Users",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset(0)",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Users",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset(0)",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "DateTime",
                table: "UsageLogs",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset(0)");

            migrationBuilder.AlterColumn<DateTime>(
                name: "UpdatedOn",
                table: "Tests",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset(0)",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "CreatedOn",
                table: "Tests",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(DateTimeOffset),
                oldType: "datetimeoffset(0)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "CreatedOn", "UpdatedOn" },
                values: new object[] { new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });
        }
    }
}
