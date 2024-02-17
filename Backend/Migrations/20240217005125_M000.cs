﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class M000 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Active",
                columns: table => new
                {
                    Id = table.Column<bool>(type: "bit", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    Name_en = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    Name_es = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Active", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Hidden",
                columns: table => new
                {
                    Id = table.Column<bool>(type: "bit", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: false),
                    Name_en = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true),
                    Name_es = table.Column<string>(type: "nvarchar(8)", maxLength: 8, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hidden", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Languages",
                columns: table => new
                {
                    Key = table.Column<string>(type: "varchar(2)", unicode: false, maxLength: 2, nullable: false),
                    Name = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: false),
                    Name_en = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
                    Name_es = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true)
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
                    Name = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: false),
                    Name_en = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true),
                    Name_es = table.Column<string>(type: "nvarchar(32)", maxLength: 32, nullable: true)
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
                    Name = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: false),
                    Name_en = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true),
                    Name_es = table.Column<string>(type: "nvarchar(16)", maxLength: 16, nullable: true)
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
                name: "Users",
                columns: table => new
                {
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
                    Hidden = table.Column<bool>(type: "bit", nullable: false, defaultValue: false),
                    Active = table.Column<bool>(type: "bit", nullable: false, defaultValue: true),
                    CreatedBy = table.Column<int>(type: "int", nullable: true),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    UpdatedBy = table.Column<int>(type: "int", nullable: true),
                    UpdatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    DeletedBy = table.Column<int>(type: "int", nullable: true),
                    DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Users_Active_Active",
                        column: x => x.Active,
                        principalTable: "Active",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Users_Hidden_Hidden",
                        column: x => x.Hidden,
                        principalTable: "Hidden",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Users_Roles_Role",
                        column: x => x.Role,
                        principalTable: "Roles",
                        principalColumn: "Key");
                    table.ForeignKey(
                        name: "FK_Users_Users_CreatedBy",
                        column: x => x.CreatedBy,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Users_Users_DeletedBy",
                        column: x => x.DeletedBy,
                        principalTable: "Users",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Users_Users_UpdatedBy",
                        column: x => x.UpdatedBy,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "Preferences",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    User = table.Column<int>(type: "int", nullable: false),
                    Theme = table.Column<string>(type: "varchar(5)", nullable: true),
                    Language = table.Column<string>(type: "varchar(2)", nullable: true)
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

            migrationBuilder.InsertData(
                table: "Active",
                columns: new[] { "Id", "Name", "Name_en", "Name_es" },
                values: new object[,]
                {
                    { false, "Não", "No", "No" },
                    { true, "Sim", "Yes", "Sí" }
                });

            migrationBuilder.InsertData(
                table: "Hidden",
                columns: new[] { "Id", "Name", "Name_en", "Name_es" },
                values: new object[,]
                {
                    { false, "Não", "No", "No" },
                    { true, "Sim", "Yes", "Sí" }
                });

            migrationBuilder.InsertData(
                table: "Languages",
                columns: new[] { "Key", "Name", "Name_en", "Name_es" },
                values: new object[,]
                {
                    { "en", "Inglês (EUA)", "English (US)", "Inglés (EUA)" },
                    { "es", "Espanhol (ES)", "Spanish (SP)", "Español (ES)" },
                    { "pt", "Português (BR)", "Portuguese (BR)", "Portugués (BR)" }
                });

            migrationBuilder.InsertData(
                table: "Roles",
                columns: new[] { "Key", "Name", "Name_en", "Name_es" },
                values: new object[,]
                {
                    { "Engineering.Admin", "Engenharia (Gestão)", "Engineering (Manager)", "Ingeniería (Gerente)" },
                    { "Engineering.Member", "Engenharia (Membro)", "Engineering (Member)", "Ingeniería (Miembro)" },
                    { "Engineering.User", "Engenharia (Usuário)", "Engineering (User)", "Ingeniería (Usuario)" },
                    { "Fiscal.Admin", "Fiscal (Gestão)", "Fiscal (Manager)", "Fiscal (Gerente)" },
                    { "Fiscal.Member", "Fiscal (Membro)", "Fiscal (Member)", "Fiscal (Miembro)" },
                    { "Fiscal.User", "Fiscal (Usuário)", "Fiscal (User)", "Fiscal (Usuario)" },
                    { "Logistics.Admin", "Logística (Gestão)", "Logistics (Manager)", "Logística (Gerente)" },
                    { "Logistics.Member", "Logística (Membro)", "Logistics (Member)", "Logística (Miembro)" },
                    { "Logistics.User", "Logística (Usuário)", "Logistics (User)", "Logística (Usuario)" },
                    { "Maintenance.Admin", "Manutenção (Gestão)", "Maintenance (Manager)", "Mantenimiento (Gerente)" },
                    { "Maintenance.Member", "Manutenção (Membro)", "Maintenance (Member)", "Mantenimiento (Miembro)" },
                    { "Maintenance.User", "Manutenção (Usuário)", "Maintenance (User)", "Mantenimiento (Usuario)" },
                    { "Planning.Admin", "Planejamento (Gestão)", "Planning (Manager)", "Planificación (Gerente)" },
                    { "Planning.Member", "Planejamento (Membro)", "Planning (Member)", "Planificación (Miembro)" },
                    { "Planning.User", "Planejamento (Usuário)", "Planning (User)", "Planificación (Usuario)" },
                    { "Production.Admin", "Produção (Gestão)", "Production (Manager)", "Producción (Gerente)" },
                    { "Production.Member", "Produção (Membro)", "Production (Member)", "Producción (Miembro)" },
                    { "Production.User", "Produção (Usuário)", "Production (User)", "Producción (Usuario)" },
                    { "Quality.Admin", "Qualidade (Gestão)", "Quality (Manager)", "Calidad (Gerente)" },
                    { "Quality.Member", "Qualidade (Membro)", "Quality (Member)", "Calidad (Miembro)" },
                    { "Quality.User", "Qualidade (Usuário)", "Quality (User)", "Calidad (Usuario)" },
                    { "Safety.Admin", "Segurança (Gestão)", "Safety (Manager)", "Seguridad (Gerente)" },
                    { "Safety.Member", "Segurança (Membro)", "Safety (Member)", "Seguridad (Miembro)" },
                    { "Safety.User", "Segurança (Usuário)", "Safety (User)", "Seguridad (Usuario)" },
                    { "System.Admin", "Administrador", "Administrator", "Administrador" },
                    { "System.Member", "Moderador", "Moderator", "Moderador" },
                    { "System.User", "Usuário Padrão", "System User", "Usuario Estándar" },
                    { "Warehouse.Admin", "Almoxarifado (Gestão)", "Warehouse (Manager)", "Almacén (Gerente)" },
                    { "Warehouse.Member", "Almoxarifado (Membro)", "Warehouse (Member)", "Almacén (Miembro)" },
                    { "Warehouse.User", "Almoxarifado (Usuário)", "Warehouse (User)", "Almacén (Usuario)" }
                });

            migrationBuilder.InsertData(
                table: "Themes",
                columns: new[] { "Key", "Name", "Name_en", "Name_es" },
                values: new object[,]
                {
                    { "auto", "Automático", "Automatic", "Automático" },
                    { "dark", "Tema Escuro", "Dark Theme", "Tema Oscuro" },
                    { "light", "Tema Claro", "Light Theme", "Tema Claro" }
                });

            migrationBuilder.InsertData(
                table: "Versions",
                columns: new[] { "Build", "Force", "Name", "Notes" },
                values: new object[] { 3, 3, "v2.0.0 (Alpha 3)", "" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Active", "Country", "CreatedAt", "CreatedBy", "DeletedAt", "DeletedBy", "Department", "Email", "FirstName", "Guid", "Hidden", "Name", "Office", "Photo", "Role", "SecondName", "Title", "UpdatedAt", "UpdatedBy" },
                values: new object[,]
                {
                    { 1, true, null, null, null, null, null, null, "system@siw.ind.br", null, "00000000-0000-0000-0000-000000000000", true, "Sistema", null, "images/users/unknown.jpg", "System.Admin", null, null, null, null },
                    { 2, true, null, null, null, null, null, null, "autobot@siw.ind.br", null, "8c4e35a5-2f64-4c28-8644-672f037272c5", true, "Autobot", null, "images/users/unknown.jpg", "System.Admin", null, null, null, null }
                });

            migrationBuilder.InsertData(
                table: "Preferences",
                columns: new[] { "Id", "Language", "Theme", "User" },
                values: new object[,]
                {
                    { 1, "pt", "auto", 1 },
                    { 2, "pt", "auto", 2 }
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
                name: "IX_Users_Active",
                table: "Users",
                column: "Active");

            migrationBuilder.CreateIndex(
                name: "IX_Users_CreatedBy",
                table: "Users",
                column: "CreatedBy");

            migrationBuilder.CreateIndex(
                name: "IX_Users_DeletedBy",
                table: "Users",
                column: "DeletedBy");

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
