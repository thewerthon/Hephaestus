using Hephaestus.Architect.Interfaces;

namespace Hephaestus.Frontend.Classes {

	public class AppUser : IUser {

		public int Id { get; set; } = 0;
		public string? Guid { get; set; }
		public string? Name { get; set; }
		public string? FirstName { get; set; }
		public string? SecondName { get; set; }
		public string? Department { get; set; }
		public string? Office { get; set; }
		public string? Country { get; set; }
		public string? Title { get; set; }
		public string? Email { get; set; }
		public string? Photo { get; set; } = "images/users/unknown.jpg";
		public string? Role { get; set; } = "System.User";
		public bool? Active { get; set; } = true;

		public static implicit operator AppUser(UserInfo info) {

			return new AppUser {

				Id = info.Id,
				Guid = info.Guid,
				Name = info.Name,
				FirstName = info.FirstName,
				SecondName = info.SecondName,
				Department = info.Department,
				Office = info.Office,
				Country = info.Country,
				Title = info.Title,
				Email = info.Email,
				Photo = info.Photo,
				Role = info.Role,
				Active = info.Active

			};

		}

		public static implicit operator AppUser(GraphUser info) {

			return new AppUser {

				Id = info.Id,
				Guid = info.Guid,
				Name = info.Name,
				FirstName = info.FirstName,
				SecondName = info.SecondName,
				Department = info.Department,
				Office = info.Office,
				Country = info.Country,
				Title = info.Title,
				Email = info.Email,
				Photo = info.Photo,
				Role = info.Role,
				Active = info.Active

			};

		}

	}

	public static class UserInfoExtensions {

		public static AppUser ToAppUser(this UserInfo info) {

			return new AppUser {

				Id = info.Id,
				Guid = info.Guid,
				Name = info.Name,
				FirstName = info.FirstName,
				SecondName = info.SecondName,
				Department = info.Department,
				Office = info.Office,
				Country = info.Country,
				Title = info.Title,
				Email = info.Email,
				Photo = info.Photo,
				Role = info.Role,
				Active = info.Active

			};

		}

	}

}