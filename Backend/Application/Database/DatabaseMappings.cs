namespace Hephaestus.Backend.Application.Database;

public static class DatabaseMappings {

	public static List<Table> Tables { get; } = [

		// Bools
		new(name: "YesNo", type: typeof(YesNo), map: typeof(YesNoMapping)),
		
		// Keys
		new(name: "Roles", type: typeof(Role), map: typeof(RoleMapping)),
		new(name: "Themes", type: typeof(Theme), map: typeof(ThemeMapping)),
		new(name: "Languages", type: typeof(Language), map: typeof(LanguageMapping)),

		// Entities
		new(name: "Tests", type: typeof(Test), map: typeof(TestMapping)),
		new(name: "Users", type: typeof(User), map: typeof(UserMapping)),
		new(name: "Versions", type: typeof(Version), map: typeof(VersionMapping)),
		new(name: "Preferences", type: typeof(Preferences), map: typeof(PreferencesMapping)),
		new(name: "UsageLogs", type: typeof(UsageLog), map: typeof(UsageLogMapping)),

	];

}

public class Table(string name, Type type, Type map) {

	public string Name { get; } = name;
	public Type Type { get; } = type;
	public Type TDef { get; } = map;

}