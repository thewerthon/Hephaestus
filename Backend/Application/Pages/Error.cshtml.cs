﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Backend.Application.Pages {

	[IgnoreAntiforgeryToken]
	[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]

	public class Error : PageModel {

		public string? RequestId { get; set; }
		public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

		public void OnGet() {

			RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;

		}

	}

}