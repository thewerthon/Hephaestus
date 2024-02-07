namespace Hephaestus.Architect.Interfaces {

	public interface IUser {

		int Id { get; set; }
		string? Guid { get; set; }
		string? Name { get; set; }
		string? FirstName { get; set; }
		string? SecondName { get; set; }
		string? Department { get; set; }
		string? Country { get; set; }
		string? Office { get; set; }
		string? Title { get; set; }
		string? Email { get; set; }
		string? Photo { get; set; }
		string? Role { get; set; }
		bool? Active { get; set; }

	}

}