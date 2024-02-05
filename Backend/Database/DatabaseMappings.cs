namespace Hephaestus.Backend.Database {

	public static class DatabaseMappings {

		public static List<EntityMapping> EntityMappings { get; } = [

			new(
				name: "Versions",
				type: typeof(AppVersion),
				maps: typeof(AppVersionMapping)
			),

			new(
				name: "Users",
				type: typeof(UserInfo),
				maps: typeof(UserInfoMapping)
			),

			new(
				name: "Preferences",
				type: typeof(Preferences),
				maps: typeof(PreferencesMapping)
			),

		];

	}

	public class EntityMapping(string name, Type type, Type maps) {

		public string Name { get; } = name;
		public Type Type { get; } = type;
		public Type Maps { get; } = maps;

	}

}