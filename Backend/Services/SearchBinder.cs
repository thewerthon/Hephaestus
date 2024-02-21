using System.Reflection;
using System.Linq.Expressions;
using System.Text.RegularExpressions;
using Microsoft.AspNetCore.OData.Query.Expressions;
using Microsoft.OData.UriParser;
using Microsoft.OData.Edm;

namespace Hephaestus.Backend.Application.Services;

public partial class SearchBinder : ISearchBinder {

	[GeneratedRegex(@"^\d+$")]
	private static partial Regex MyRegex();

	//internal static readonly MethodInfo StringContainsMethodInfo = typeof(string).GetMethod("Contains", new[] { typeof(string), typeof(StringComparison) });
	internal static readonly MethodInfo? StringContainsMethodInfo = typeof(string).GetMethod("Contains", [typeof(string)]);
	internal static readonly Regex NumExpr = MyRegex();

	public Expression BindSearch(SearchClause searchClause, QueryBinderContext context) {

		var exp = BindSearchTerm((SearchTermNode)searchClause.Expression, context);
		var lambdaExp = Expression.Lambda(exp, context.CurrentParameter);
		return lambdaExp;

	}

	public Expression BindSearchTerm(SearchTermNode node, QueryBinderContext context) {

		List<Expression> exps = []; var text = node.Text; Expression? combined = null;
		var t = (EdmEntityType)context.Model.FindDeclaredType(context.ElementType.FullTypeName());

		// search text is just a number - lookup by PK if PK is an int or code if that property exists and is an int
		if (NumExpr.Match(text).Success && t.DeclaredKey.First().Type.FullName() == "Edm.Int32") {

			var val = int.Parse(text);
			exps.Add(Expression.Equal(Expression.Property(context.CurrentParameter, t.DeclaredKey.First().Name), Expression.Constant(val, typeof(int))));

			var code = t.DeclaredProperties.FirstOrDefault(p => p.Name == "Code" && p.Name != t.DeclaredKey.First().Name && p.Type.FullName() == "Edm.Int32");

			if (code != null) {

				if (code.Type.IsNullable) {

					exps.Add(Expression.Equal(Expression.Property(context.CurrentParameter, "Code"), Expression.Constant(val, typeof(int?))));

				} else {

					exps.Add(Expression.Equal(Expression.Property(context.CurrentParameter, "Code"), Expression.Constant(val, typeof(int))));

				}

			}

		}

		foreach (var prop in t.DeclaredProperties) {

			if (prop.Type.FullName() == "Edm.String") {
				var notnull = Expression.NotEqual(Expression.Property(context.CurrentParameter, prop.Name), Expression.Constant(null, typeof(string)));
				var contains = Expression.Call(Expression.Property(context.CurrentParameter, prop.Name), StringContainsMethodInfo!, Expression.Constant(text, typeof(string)));
				exps.Add(Expression.AndAlso(notnull, contains));
			}

		}

		combined = exps.Count > 0
			? exps.Skip(1).Aggregate(exps.FirstOrDefault(), Expression.Or!)
			: Expression.Constant(false, typeof(bool));

		return combined!;

	}

}