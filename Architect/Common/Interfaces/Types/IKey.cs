﻿namespace Hephaestus.Architect.Application.Interfaces;

public interface IKey : IType {

	[Key]
	[Required]
	[MaxLength(8)]
	public string Key { get; set; }

	public bool Active { get; set; }

}