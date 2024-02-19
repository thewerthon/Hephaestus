namespace Hephaestus.Backend.Application.Database;

public static class DatabaseMappings {

	public static List<Table> Tables { get; } = [

		// Bools
		new(name: "YesNo", type: typeof(YesNo), map: typeof(YesNoMap)),
		
		// Keys
		new(name: "Roles", type: typeof(Role), map: typeof(RoleMap)),
		new(name: "Themes", type: typeof(Theme), map: typeof(ThemeMap)),
		new(name: "Languages", type: typeof(Language), map: typeof(LanguageMap)),

		// Entities
		new(name: "Users", type: typeof(User), map: typeof(UserMap)),
		new(name: "Versions", type: typeof(Version), map: typeof(VersionMap)),
		new(name: "Preferences", type: typeof(Preferences), map: typeof(PreferencesMap)),

	];

}

public class Table(string name, Type type, Type map) {

	public string Name { get; } = name;
	public Type Type { get; } = type;
	public Type TDef { get; } = map;

}