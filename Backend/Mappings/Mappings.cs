using Hephaestus.Architect.Models;

namespace Hephaestus.Backend.Mappings {

	public static class Mappings {

		public static List<EntityMapping> EntityMappings { get; } = [

			new(
				tableName: "Versions",
				modelType: typeof(VersionInfo),
				mappingType: typeof(VersionInfoMapping)
			),

			new(
				tableName: "Users",
				modelType: typeof(UserInfo),
				mappingType: typeof(UserInfoMapping)
			),

			new(
				tableName: "Preferences",
				modelType: typeof(Preferences),
				mappingType: typeof(PreferencesMapping)
			),

		];

	}

	public class EntityMapping(string tableName, Type modelType, Type mappingType) {

		public string TableName { get; } = tableName;
		public Type ModelType { get; } = modelType;
		public Type MappingType { get; } = mappingType;

	}

}