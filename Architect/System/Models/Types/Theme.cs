﻿namespace Hephaestus.Architect.Application.Models;

public class Theme : BaseKey, ISeedData<BaseKey> {

	public static IEnumerable<BaseKey> Seed { get; } = [

		new Theme { Key = "auto",   Value = "Automático",   Value_en = "Automatic",    Value_es = "Automático" },
		new Theme { Key = "light",  Value = "Tema Claro",   Value_en = "Light Theme",  Value_es = "Tema Claro" },
		new Theme { Key = "dark",   Value = "Tema Escuro",  Value_en = "Dark Theme",   Value_es = "Tema Oscuro" }

	];

}