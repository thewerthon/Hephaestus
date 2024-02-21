namespace Hephaestus.Architect.System.Models;

public class YesNo : BaseTypeBool, ITypeSeed<BaseTypeBool> {

	public static IEnumerable<BaseTypeBool> Seed { get; } = [

		new YesNo { Key = true, Value = "Sim", Value_en = "Yes", Value_es = "Sí" },
		new YesNo { Key = false, Value = "Não", Value_en = "No",  Value_es = "No" }

	];

}