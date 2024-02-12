namespace Hephaestus.Backend.Database {

	public static class DatabaseTables {

		public static List<Table> Tables { get; } = [

			// Application Bools
			new(name: "Active", type: typeof(Theme), tdef: typeof(ActiveTable)),
			new(name: "Hidden", type: typeof(Hidden), tdef: typeof(HiddenTable)),

			// Applications Keys
			new(name: "Themes", type: typeof(Theme), tdef: typeof(ThemeTable)),
			new(name: "Languages", type: typeof(Language), tdef: typeof(LanguageTable)),
			new(name: "Roles", type: typeof(UserRole), tdef: typeof(UserRoleTable)),

			// Application Records
			new(name: "Users", type: typeof(User), tdef: typeof(UserTable)),
			new(name: "Versions", type: typeof(Architect.Models.Version), tdef: typeof(AppVersionTable)),
			new(name: "Preferences", type: typeof(Preferences), tdef: typeof(PreferencesTable)),

		];

	}

	public class Table(string name, Type type, Type tdef) {

		public string Name { get; } = name;
		public Type Type { get; } = type;
		public Type TDef { get; } = tdef;

	}

}