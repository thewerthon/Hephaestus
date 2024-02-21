using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;

namespace Hephaestus.Backend.Application.Database;

public static class ODataModel {

	private static readonly ODataConventionModelBuilder Builder = new();

	public static IEdmModel GetEdmModel() {

		// Bools
		Builder.EntitySet<YesNo>("YesNo");

		// Keys
		Builder.EntitySet<Role>("Roles");
		Builder.EntitySet<Theme>("Themes");
		Builder.EntitySet<Language>("Languages");

		// Entities
		Builder.EntitySet<User>("Users");
		Builder.EntitySet<Version>("Versions");
		Builder.EntitySet<Preferences>("Preferences");

		return Builder.GetEdmModel();

	}

}