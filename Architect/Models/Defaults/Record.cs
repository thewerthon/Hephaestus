using System.ComponentModel.DataAnnotations;

namespace Hephaestus.Architect.Models {

	public class Record {

		[Key]
		[Required]
		public int Id { get; set; }

	}

}