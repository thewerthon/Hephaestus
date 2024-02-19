namespace Hephaestus.Architect.Application.Models;

public class Language : BaseKey, ISeedData<BaseKey> {

	public static IEnumerable<BaseKey> Seed { get; } = [

		new Language { Key = "pt", Value = "Português (BR)", Value_en = "Portuguese (BR)", Value_es = "Portugués (BR)" },
		new Language { Key = "en", Value = "Inglês (EUA)",   Value_en = "English (US)",    Value_es = "Inglés (EUA)" },
		new Language { Key = "es", Value = "Espanhol (ES)",  Value_en = "Spanish (SP)",    Value_es = "Español (ES)" }

	];

}