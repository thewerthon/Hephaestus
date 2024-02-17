using Version = Hephaestus.Architect.Models.Version;

namespace Hephaestus.Backend.Database {

	public static class DatabaseTables {

		public static List<Table> Tables { get; } = [

			// Bools
			new(name: "Active", type: typeof(Active), tdef: typeof(ActiveTable)),
			new(name: "Hidden", type: typeof(Hidden), tdef: typeof(HiddenTable)),

			// Keys
			new(name: "Roles", type: typeof(Role), tdef: typeof(RoleTable)),
			new(name: "Themes", type: typeof(Theme), tdef: typeof(ThemeTable)),
			new(name: "Languages", type: typeof(Language), tdef: typeof(LanguageTable)),

			// Records
			new(name: "Users", type: typeof(User), tdef: typeof(UserTable)),
			new(name: "Versions", type: typeof(Version), tdef: typeof(VersionTable)),
			new(name: "Preferences", type: typeof(Preferences), tdef: typeof(PreferencesTable)),

		];

	}

	public class Table(string name, Type type, Type tdef) {

		public string Name { get; } = name;
		public Type Type { get; } = type;
		public Type TDef { get; } = tdef;

	}

}