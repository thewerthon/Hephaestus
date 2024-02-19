namespace Hephaestus.Architect.Application.Models;

public class YesNo : BaseBool, ISeedData<BaseBool> {

	public static IEnumerable<BaseBool> Seed { get; } = [

		new YesNo { Key = true, Value = "Sim", Value_en = "Yes", Value_es = "Sí" },
		new YesNo { Key = false, Value = "Não", Value_en = "No",  Value_es = "No" }

	];

}