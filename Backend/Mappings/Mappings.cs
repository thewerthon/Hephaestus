using Hephaestus.Architect.Models;

namespace Hephaestus.Backend.Mappings {

	public static class Mappings {

		public static List<SingletonMapping> SingletonMappings { get; } = [



		];

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

	public class SingletonMapping(string name, Type type) {

		public string Name { get; } = name;
		public Type Type { get; } = type;

	}

	public class EntityMapping(string name, Type type, Type maps) {

		public string Name { get; } = name;
		public Type Type { get; } = type;
		public Type Maps { get; } = maps;

	}

}