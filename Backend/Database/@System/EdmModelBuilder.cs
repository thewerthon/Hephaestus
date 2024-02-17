using Microsoft.OData.Edm;
using Microsoft.OData.ModelBuilder;
using Version = Hephaestus.Architect.Models.Version;

namespace Hephaestus.Backend.Database {

	public static class EdmModelBuilder {

		private static readonly ODataConventionModelBuilder Builder = new();

		public static IEdmModel GetEdmModel() {

			// Application Types
			Builder.EntitySet<Active>("Active");
			Builder.EntitySet<Hidden>("Hidden");
			Builder.EntitySet<Role>("Roles");
			Builder.EntitySet<Theme>("Themes");
			Builder.EntitySet<Language>("Languages");

			// Application Records
			Builder.EntitySet<User>("Users");
			Builder.EntitySet<Version>("Versions");
			Builder.EntitySet<Preferences>("Preferences");

			return Builder.GetEdmModel();

		}

	}

}