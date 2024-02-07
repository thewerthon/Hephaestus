using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1861 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations {
	/// <inheritdoc />
	public partial class M0000 : Migration {
		/// <inheritdoc />
		protected override void Up(MigrationBuilder migrationBuilder) {
			migrationBuilder.CreateTable(
					name: "Active",
					columns: table => new {
						Id = table.Column<bool>(type: "bit", nullable: false),
						Name = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
						Name_pt = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
						Name_en = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
						Name_es = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true)
					},
					constraints: table => {
						table.PrimaryKey("PK_Active", x => x.Id);
					});

			migrationBuilder.CreateTable(
					name: "Hidden",
					columns: table => new {
						Id = table.Column<bool>(type: "bit", nullable: false),
						Name = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
						Name_pt = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
						Name_en = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
						Name_es = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true)
					},
					constraints: table => {
						table.PrimaryKey("PK_Hidden", x => x.Id);
					});

			migrationBuilder.CreateTable(
					name: "Languages",
					columns: table => new {
						Key = table.Column<string>(type: "varchar(2)", unicode: false, maxLength: 2, nullable: false),
						Name = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: false),
						Name_pt = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
						Name_en = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
						Name_es = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true)
					},
					constraints: table => {
						table.PrimaryKey("PK_Languages", x => x.Key);
					});

			migrationBuilder.CreateTable(
					name: "Roles",
					columns: table => new {
						Key = table.Column<string>(type: "varchar(32)", unicode: false, maxLength: 32, nullable: false),
						Name = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
						Name_pt = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
						Name_en = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
						Name_es = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true)
					},
					constraints: table => {
						table.PrimaryKey("PK_Roles", x => x.Key);
					});

			migrationBuilder.CreateTable(
					name: "Themes",
					columns: table => new {
						Key = table.Column<string>(type: "varchar(5)", unicode: false, maxLength: 5, nullable: false),
						Name = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: false),
						Name_pt = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
						Name_en = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
						Name_es = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true)
					},
					constraints: table => {
						table.PrimaryKey("PK_Themes", x => x.Key);
					});

			migrationBuilder.CreateTable(
					name: "Versions",
					columns: table => new {
						Build = table.Column<int>(type: "int", nullable: false),
						Force = table.Column<int>(type: "int", nullable: false),
						Name = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
						Notes = table.Column<string>(type: "nvarchar(max)", nullable: false)
					},
					constraints: table => {
						table.PrimaryKey("PK_Versions", x => x.Build);
					});

			migrationBuilder.CreateTable(
					name: "Users",
					columns: table => new {
						Id = table.Column<int>(type: "int", nullable: false)
									.Annotation("SqlServer:Identity", "1, 1"),
						Guid = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
						Name = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
						FirstName = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
						SecondName = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
						Country = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
						Office = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
						Department = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
						Title = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
						Email = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
						Photo = table.Column<string>(type: "nvarchar(max)", nullable: true),
						Role = table.Column<string>(type: "varchar(32)", nullable: true),
						Hidden = table.Column<bool>(type: "bit", nullable: true, defaultValue: false),
						Active = table.Column<bool>(type: "bit", nullable: true, defaultValue: true)
					},
					constraints: table => {
						table.PrimaryKey("PK_Users", x => x.Id);
						table.ForeignKey(
											name: "FK_Users_Active_Active",
											column: x => x.Active,
											principalTable: "Active",
											principalColumn: "Id");
						table.ForeignKey(
											name: "FK_Users_Hidden_Hidden",
											column: x => x.Hidden,
											principalTable: "Hidden",
											principalColumn: "Id");
						table.ForeignKey(
											name: "FK_Users_Roles_Role",
											column: x => x.Role,
											principalTable: "Roles",
											principalColumn: "Key");
					});

			migrationBuilder.CreateTable(
					name: "Preferences",
					columns: table => new {
						Id = table.Column<int>(type: "int", nullable: false)
									.Annotation("SqlServer:Identity", "1, 1"),
						User = table.Column<int>(type: "int", nullable: false),
						Theme = table.Column<string>(type: "varchar(5)", nullable: true),
						Language = table.Column<string>(type: "varchar(2)", nullable: true)
					},
					constraints: table => {
						table.PrimaryKey("PK_Preferences", x => x.Id);
						table.ForeignKey(
											name: "FK_Preferences_Languages_Language",
											column: x => x.Language,
											principalTable: "Languages",
											principalColumn: "Key");
						table.ForeignKey(
											name: "FK_Preferences_Themes_Theme",
											column: x => x.Theme,
											principalTable: "Themes",
											principalColumn: "Key");
						table.ForeignKey(
											name: "FK_Preferences_Users_User",
											column: x => x.User,
											principalTable: "Users",
											principalColumn: "Id",
											onDelete: ReferentialAction.Cascade);
					});

			migrationBuilder.InsertData(
					table: "Active",
					columns: new[] { "Id", "Name", "Name_en", "Name_es", "Name_pt" },
					values: new object[,]
					{
										{ false, "No", "No", "No", "Não" },
										{ true, "Yes", "Yes", "Sí", "Sim" }
					});

			migrationBuilder.InsertData(
					table: "Hidden",
					columns: new[] { "Id", "Name", "Name_en", "Name_es", "Name_pt" },
					values: new object[,]
					{
										{ false, "No", "No", "No", "Não" },
										{ true, "Yes", "Yes", "Sí", "Sim" }
					});

			migrationBuilder.InsertData(
					table: "Languages",
					columns: new[] { "Key", "Name", "Name_en", "Name_es", "Name_pt" },
					values: new object[,]
					{
										{ "en", "English", "English (US)", "Inglés (EUA)", "Inglês (EUA)" },
										{ "es", "Spanish", "Spanish (SP)", "Español (ES)", "Espanhol (ES)" },
										{ "pt", "Portuguese", "Portuguese (BR)", "Portugués (BR)", "Português (BR)" }
					});

			migrationBuilder.InsertData(
					table: "Roles",
					columns: new[] { "Key", "Name", "Name_en", "Name_es", "Name_pt" },
					values: new object[,]
					{
										{ "Engineering.Admin", "Engineering Admin", "Engineering (Manager)", "Ingeniería (Gerente)", "Engenharia (Gestão)" },
										{ "Engineering.Member", "Engineering Member", "Engineering (Member)", "Ingeniería (Miembro)", "Engenharia (Membro)" },
										{ "Engineering.User", "Engineering User", "Engineering (User)", "Ingeniería (Usuario)", "Engenharia (Usuário)" },
										{ "Fiscal.Admin", "Fiscal Admin", "Fiscal (Manager)", "Fiscal (Gerente)", "Fiscal (Gestão)" },
										{ "Fiscal.Member", "Fiscal Member", "Fiscal (Member)", "Fiscal (Miembro)", "Fiscal (Membro)" },
										{ "Fiscal.User", "Fiscal User", "Fiscal (User)", "Fiscal (Usuario)", "Fiscal (Usuário)" },
										{ "Logistics.Admin", "Logistics Admin", "Logistics (Manager)", "Logística (Gerente)", "Logística (Gestão)" },
										{ "Logistics.Member", "Logistics Member", "Logistics (Member)", "Logística (Miembro)", "Logística (Membro)" },
										{ "Logistics.User", "Logistics User", "Logistics (User)", "Logística (Usuario)", "Logística (Usuário)" },
										{ "Maintenance.Admin", "Maintenance Admin", "Maintenance (Manager)", "Mantenimiento (Gerente)", "Manutenção (Gestão)" },
										{ "Maintenance.Member", "Maintenance Member", "Maintenance (Member)", "Mantenimiento (Miembro)", "Manutenção (Membro)" },
										{ "Maintenance.User", "Maintenance User", "Maintenance (User)", "Mantenimiento (Usuario)", "Manutenção (Usuário)" },
										{ "Planning.Admin", "Planning Admin", "Planning (Manager)", "Planificación (Gerente)", "Planejamento (Gestão)" },
										{ "Planning.Member", "Planning Member", "Planning (Member)", "Planificación (Miembro)", "Planejamento (Membro)" },
										{ "Planning.User", "Planning User", "Planning (User)", "Planificación (Usuario)", "Planejamento (Usuário)" },
										{ "Production.Admin", "Production Admin", "Production (Manager)", "Producción (Gerente)", "Produção (Gestão)" },
										{ "Production.Member", "Production Member", "Production (Member)", "Producción (Miembro)", "Produção (Membro)" },
										{ "Production.User", "Production User", "Production (User)", "Producción (Usuario)", "Produção (Usuário)" },
										{ "Quality.Admin", "Quality Admin", "Quality (Manager)", "Calidad (Gerente)", "Qualidade (Gestão)" },
										{ "Quality.Member", "Quality Member", "Quality (Member)", "Calidad (Miembro)", "Qualidade (Membro)" },
										{ "Quality.User", "Quality User", "Quality (User)", "Calidad (Usuario)", "Qualidade (Usuário)" },
										{ "Safety.Admin", "Safety Admin", "Safety (Manager)", "Seguridad (Gerente)", "Segurança (Gestão)" },
										{ "Safety.Member", "Safety Member", "Safety (Member)", "Seguridad (Miembro)", "Segurança (Membro)" },
										{ "Safety.User", "Safety User", "Safety (User)", "Seguridad (Usuario)", "Segurança (Usuário)" },
										{ "System.Admin", "System Admin", "Administrator", "Administrador", "Administrador" },
										{ "System.Member", "SystemM ember", "Moderator", "Moderador", "Moderador" },
										{ "System.User", "System User", "System User", "Usuario Estándar", "Usuário Padrão" },
										{ "Warehouse.Admin", "Warehouse Admin", "Warehouse (Manager)", "Almacén (Gerente)", "Almoxarifado (Gestão)" },
										{ "Warehouse.Member", "Warehouse Member", "Warehouse (Member)", "Almacén (Miembro)", "Almoxarifado (Membro)" },
										{ "Warehouse.User", "Warehouse User", "Warehouse (User)", "Almacén (Usuario)", "Almoxarifado (Usuário)" }
					});

			migrationBuilder.InsertData(
					table: "Themes",
					columns: new[] { "Key", "Name", "Name_en", "Name_es", "Name_pt" },
					values: new object[,]
					{
										{ "auto", "Automatic", "Automatic", "Automático", "Automático" },
										{ "dark", "Dark Theme", "Dark Theme", "Tema Oscuro", "Tema Escuro" },
										{ "light", "Light Theme", "Light Theme", "Tema Claro", "Tema Claro" }
					});

			migrationBuilder.InsertData(
					table: "Versions",
					columns: new[] { "Build", "Force", "Name", "Notes" },
					values: new object[] { 3, 3, "v2.0.0 (Alpha 3)", "" });

			migrationBuilder.CreateIndex(
					name: "IX_Preferences_Language",
					table: "Preferences",
					column: "Language");

			migrationBuilder.CreateIndex(
					name: "IX_Preferences_Theme",
					table: "Preferences",
					column: "Theme");

			migrationBuilder.CreateIndex(
					name: "IX_Preferences_User",
					table: "Preferences",
					column: "User",
					unique: true);

			migrationBuilder.CreateIndex(
					name: "IX_Users_Active",
					table: "Users",
					column: "Active");

			migrationBuilder.CreateIndex(
					name: "IX_Users_Email",
					table: "Users",
					column: "Email");

			migrationBuilder.CreateIndex(
					name: "IX_Users_Guid",
					table: "Users",
					column: "Guid");

			migrationBuilder.CreateIndex(
					name: "IX_Users_Hidden",
					table: "Users",
					column: "Hidden");

			migrationBuilder.CreateIndex(
					name: "IX_Users_Role",
					table: "Users",
					column: "Role");

			migrationBuilder.CreateIndex(
					name: "IX_Versions_Build",
					table: "Versions",
					column: "Build",
					unique: true);

			migrationBuilder.CreateIndex(
					name: "IX_Versions_Force",
					table: "Versions",
					column: "Force");
		}

		/// <inheritdoc />
		protected override void Down(MigrationBuilder migrationBuilder) {
			migrationBuilder.DropTable(
					name: "Preferences");

			migrationBuilder.DropTable(
					name: "Versions");

			migrationBuilder.DropTable(
					name: "Languages");

			migrationBuilder.DropTable(
					name: "Themes");

			migrationBuilder.DropTable(
					name: "Users");

			migrationBuilder.DropTable(
					name: "Active");

			migrationBuilder.DropTable(
					name: "Hidden");

			migrationBuilder.DropTable(
					name: "Roles");
		}
	}
}
