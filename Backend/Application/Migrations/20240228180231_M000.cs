using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Hephaestus.Backend.Application.Migrations
{
    /// <inheritdoc />
    public partial class M000 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Languages",
                columns: table => new
                {
                    Key = table.Column<string>(type: "varchar(2)", unicode: false, maxLength: 2, nullable: false),
                    Value = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    Value_en = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Value_es = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Languages", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    Key = table.Column<string>(type: "varchar(32)", unicode: false, maxLength: 32, nullable: false),
                    Value = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    Value_en = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Value_es = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "Themes",
                columns: table => new
                {
                    Key = table.Column<string>(type: "varchar(5)", unicode: false, maxLength: 5, nullable: false),
                    Value = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    Value_en = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Value_es = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Active = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Themes", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "Versions",
                columns: table => new
                {
                    Build = table.Column<int>(type: "int", nullable: false),
                    Force = table.Column<int>(type: "int", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
                    Notes = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Versions", x => x.Build);
                });

            migrationBuilder.CreateTable(
                name: "YesNo",
                columns: table => new
                {
                    Key = table.Column<bool>(type: "bit", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    Value_en = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Value_es = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_YesNo", x => x.Key);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Guid = table.Column<string>(type: "nvarchar(36)", maxLength: 36, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    Name_en = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Name_es = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    Country = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    Office = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    Department = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    Title = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    Photo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Role = table.Column<string>(type: "varchar(32)", nullable: true),
                    Hidden = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    Active = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Roles_Role",
                        column: x => x.Role,
                        principalTable: "Roles",
                        principalColumn: "Key");
                    table.ForeignKey(
                        name: "FK_Users_Users_CreatedBy",
                        column: x => x.CreatedBy,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_Users_UpdatedBy",
                        column: x => x.UpdatedBy,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Users_YesNo_Active",
                        column: x => x.Active,
                        principalTable: "YesNo",
                        principalColumn: "Key");
                    table.ForeignKey(
                        name: "FK_Users_YesNo_Hidden",
                        column: x => x.Hidden,
                        principalTable: "YesNo",
                        principalColumn: "Key");
                });

            migrationBuilder.CreateTable(
                name: "Preferences",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    User = table.Column<int>(type: "int", nullable: false),
                    Theme = table.Column<string>(type: "varchar(5)", nullable: true),
                    Language = table.Column<string>(type: "varchar(2)", nullable: true),
                    FeatureAlert = table.Column<int>(type: "int", nullable: true),
                    FavoriteModules = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    FavoriteFunctions = table.Column<string>(type: "nvarchar(128)", maxLength: 128, nullable: true)
                },
                constraints: table =>
                {
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

            migrationBuilder.CreateTable(
                name: "Tests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: false),
                    Name_en = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    Name_es = table.Column<string>(type: "nvarchar(64)", maxLength: 64, nullable: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    CreatedOn = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedOn = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tests", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Tests_Users_CreatedBy",
                        column: x => x.CreatedBy,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Tests_Users_UpdatedBy",
                        column: x => x.UpdatedBy,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "UsageLogs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DateTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Action = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
                    Details = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    AppBuild = table.Column<int>(type: "int", nullable: true),
                    AppVersion = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    PlatformName = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    PlatformLayout = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    PlatformVersion = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
                    PlatformProduct = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    PlatformLanguage = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    PlatformManufacturer = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    SystemFamily = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    SystemVersion = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
                    SystemArchitecture = table.Column<int>(type: "int", nullable: true),
                    User = table.Column<int>(type: "int", nullable: true),
                    UserTheme = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    UserLanguage = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UsageLogs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UsageLogs_Users_User",
                        column: x => x.User,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Languages",
                columns: new[] { "Key", "Active", "Value", "Value_en", "Value_es" },
                values: new object[,]
                {
                    { "en", true, "Inglês (EUA)", "English (US)", "Inglés (EUA)" },
                    { "es", true, "Espanhol (ES)", "Spanish (SP)", "Español (ES)" },
                    { "pt", true, "Português (BR)", "Portuguese (BR)", "Portugués (BR)" }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Key", "Active", "Value", "Value_en", "Value_es" },
                values: new object[,]
                {
                    { "Engineering.Admin", true, "Engenharia (Gestão)", "Engineering (Manager)", "Ingeniería (Gerente)" },
                    { "Engineering.Member", true, "Engenharia (Membro)", "Engineering (Member)", "Ingeniería (Miembro)" },
                    { "Engineering.User", true, "Engenharia (Usuário)", "Engineering (User)", "Ingeniería (Usuario)" },
                    { "Fiscal.Admin", true, "Fiscal (Gestão)", "Fiscal (Manager)", "Fiscal (Gerente)" },
                    { "Fiscal.Member", true, "Fiscal (Membro)", "Fiscal (Member)", "Fiscal (Miembro)" },
                    { "Fiscal.User", true, "Fiscal (Usuário)", "Fiscal (User)", "Fiscal (Usuario)" },
                    { "Logistics.Admin", true, "Logística (Gestão)", "Logistics (Manager)", "Logística (Gerente)" },
                    { "Logistics.Member", true, "Logística (Membro)", "Logistics (Member)", "Logística (Miembro)" },
                    { "Logistics.User", true, "Logística (Usuário)", "Logistics (User)", "Logística (Usuario)" },
                    { "Maintenance.Admin", true, "Manutenção (Gestão)", "Maintenance (Manager)", "Mantenimiento (Gerente)" },
                    { "Maintenance.Member", true, "Manutenção (Membro)", "Maintenance (Member)", "Mantenimiento (Miembro)" },
                    { "Maintenance.User", true, "Manutenção (Usuário)", "Maintenance (User)", "Mantenimiento (Usuario)" },
                    { "Planning.Admin", true, "Planejamento (Gestão)", "Planning (Manager)", "Planificación (Gerente)" },
                    { "Planning.Member", true, "Planejamento (Membro)", "Planning (Member)", "Planificación (Miembro)" },
                    { "Planning.User", true, "Planejamento (Usuário)", "Planning (User)", "Planificación (Usuario)" },
                    { "Production.Admin", true, "Produção (Gestão)", "Production (Manager)", "Producción (Gerente)" },
                    { "Production.Member", true, "Produção (Membro)", "Production (Member)", "Producción (Miembro)" },
                    { "Production.User", true, "Produção (Usuário)", "Production (User)", "Producción (Usuario)" },
                    { "Quality.Admin", true, "Qualidade (Gestão)", "Quality (Manager)", "Calidad (Gerente)" },
                    { "Quality.Member", true, "Qualidade (Membro)", "Quality (Member)", "Calidad (Miembro)" },
                    { "Quality.User", true, "Qualidade (Usuário)", "Quality (User)", "Calidad (Usuario)" },
                    { "Safety.Admin", true, "Segurança (Gestão)", "Safety (Manager)", "Seguridad (Gerente)" },
                    { "Safety.Member", true, "Segurança (Membro)", "Safety (Member)", "Seguridad (Miembro)" },
                    { "Safety.User", true, "Segurança (Usuário)", "Safety (User)", "Seguridad (Usuario)" },
                    { "System.Admin", true, "Administrador", "Administrator", "Administrador" },
                    { "System.Member", true, "Moderador", "Moderator", "Moderador" },
                    { "System.User", true, "Usuário Padrão", "System User", "Usuario Estándar" },
                    { "Warehouse.Admin", true, "Almoxarifado (Gestão)", "Warehouse (Manager)", "Almacén (Gerente)" },
                    { "Warehouse.Member", true, "Almoxarifado (Membro)", "Warehouse (Member)", "Almacén (Miembro)" },
                    { "Warehouse.User", true, "Almoxarifado (Usuário)", "Warehouse (User)", "Almacén (Usuario)" }
                });

            migrationBuilder.InsertData(
                table: "Themes",
                columns: new[] { "Key", "Active", "Value", "Value_en", "Value_es" },
                values: new object[,]
                {
                    { "auto", true, "Automático", "Automatic", "Automático" },
                    { "dark", true, "Tema Escuro", "Dark Theme", "Tema Oscuro" },
                    { "light", true, "Tema Claro", "Light Theme", "Tema Claro" }
                });

            migrationBuilder.InsertData(
                table: "Versions",
                columns: new[] { "Build", "Force", "Name", "Notes" },
                values: new object[] { 4, 4, "v2.0.0 (Alpha 4)", "" });

            migrationBuilder.InsertData(
                table: "YesNo",
                columns: new[] { "Key", "Value", "Value_en", "Value_es" },
                values: new object[,]
                {
                    { false, "Não", "No", "No" },
                    { true, "Sim", "Yes", "Sí" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Active", "Country", "CreatedBy", "CreatedOn", "Department", "Email", "FirstName", "Guid", "Hidden", "LastName", "Name", "Name_en", "Name_es", "Office", "Photo", "Role", "Title", "UpdatedBy", "UpdatedOn" },
                values: new object[] { 1, true, null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "sistema@siw.ind.br", null, "00000000-0000-0000-0000-000000000000", true, null, "Sistema", "System", "Sistema", null, "images/users/unknown.jpg", "System.Admin", null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.InsertData(
                table: "Preferences",
                columns: new[] { "Id", "FavoriteFunctions", "FavoriteModules", "FeatureAlert", "Language", "Theme", "User" },
                values: new object[] { 1, null, null, 0, "pt", "auto", 1 });

            migrationBuilder.InsertData(
                table: "Tests",
                columns: new[] { "Id", "CreatedBy", "CreatedOn", "Name", "Name_en", "Name_es", "UpdatedBy", "UpdatedOn" },
                values: new object[,]
                {
                    { 1, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Test 1", null, null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 2, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Test 2", null, null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Test 3", null, null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Active", "Country", "CreatedBy", "CreatedOn", "Department", "Email", "FirstName", "Guid", "Hidden", "LastName", "Name", "Name_en", "Name_es", "Office", "Photo", "Role", "Title", "UpdatedBy", "UpdatedOn" },
                values: new object[,]
                {
                    { 2, true, null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "usuario-portal@siw.ind.br", null, "00000000-0000-0000-0000-000000000001", true, null, "Usuário do Portal", "Portal User", "Usuario del Portal", null, "images/users/unknown.jpg", "System.User", null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 3, true, null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "usuario-externo@siw.ind.br", null, "00000000-0000-0000-0000-000000000002", true, null, "Usuário Externo", "External User", "Usuario Externo", null, "images/users/unknown.jpg", "System.User", null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) },
                    { 4, true, null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), null, "autobot@siw.ind.br", null, "8c4e35a5-2f64-4c28-8644-672f037272c5", true, null, "Autobot", "Autobot", "Autobot", null, "images/users/unknown.jpg", "System.Admin", null, 1, new DateTime(2024, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified) }
                });

            migrationBuilder.InsertData(
                table: "Preferences",
                columns: new[] { "Id", "FavoriteFunctions", "FavoriteModules", "FeatureAlert", "Language", "Theme", "User" },
                values: new object[,]
                {
                    { 2, null, null, 0, "pt", "auto", 2 },
                    { 3, null, null, 0, "pt", "auto", 3 },
                    { 4, null, null, 0, "pt", "auto", 4 }
                });

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
                name: "IX_Tests_CreatedBy",
                table: "Tests",
                column: "CreatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_Tests_UpdatedBy",
                table: "Tests",
                column: "UpdatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_UsageLogs_User",
                table: "UsageLogs",
                column: "User");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Active",
                table: "Users",
                column: "Active");

            migrationBuilder.CreateIndex(
                name: "IX_Users_CreatedBy",
                table: "Users",
                column: "CreatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Guid",
                table: "Users",
                column: "Guid",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Hidden",
                table: "Users",
                column: "Hidden");

            migrationBuilder.CreateIndex(
                name: "IX_Users_Role",
                table: "Users",
                column: "Role");

            migrationBuilder.CreateIndex(
                name: "IX_Users_UpdatedBy",
                table: "Users",
                column: "UpdatedBy");

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
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Preferences");

            migrationBuilder.DropTable(
                name: "Tests");

            migrationBuilder.DropTable(
                name: "UsageLogs");

            migrationBuilder.DropTable(
                name: "Versions");

            migrationBuilder.DropTable(
                name: "Languages");

            migrationBuilder.DropTable(
                name: "Themes");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "YesNo");
        }
    }
}
