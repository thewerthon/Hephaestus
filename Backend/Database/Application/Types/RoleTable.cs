namespace Hephaestus.Backend.Database {

	public class RoleTable : IEntityTypeConfiguration<Role> {

		public void Configure(EntityTypeBuilder<Role> builder) {

			// Table Name
			builder.ToTable("Roles");

			// Primary Key
			builder.HasKey(x => x.Key);
			builder.Property(x => x.Key).IsUnicode(false).ValueGeneratedNever();

			// Data Seed
			builder.HasData(
				new Role { Key = "System.Admin", Name = "Administrador", Name_en = "Administrator", Name_es = "Administrador" },
				new Role { Key = "System.Member", Name = "Moderador", Name_en = "Moderator", Name_es = "Moderador" },
				new Role { Key = "System.User", Name = "Usuário Padrão", Name_en = "System User", Name_es = "Usuario Estándar" },
				new Role { Key = "Engineering.Admin", Name = "Engenharia (Gestão)", Name_en = "Engineering (Manager)", Name_es = "Ingeniería (Gerente)" },
				new Role { Key = "Engineering.Member", Name = "Engenharia (Membro)", Name_en = "Engineering (Member)", Name_es = "Ingeniería (Miembro)" },
				new Role { Key = "Engineering.User", Name = "Engenharia (Usuário)", Name_en = "Engineering (User)", Name_es = "Ingeniería (Usuario)" },
				new Role { Key = "Fiscal.Admin", Name = "Fiscal (Gestão)", Name_en = "Fiscal (Manager)", Name_es = "Fiscal (Gerente)" },
				new Role { Key = "Fiscal.Member", Name = "Fiscal (Membro)", Name_en = "Fiscal (Member)", Name_es = "Fiscal (Miembro)" },
				new Role { Key = "Fiscal.User", Name = "Fiscal (Usuário)", Name_en = "Fiscal (User)", Name_es = "Fiscal (Usuario)" },
				new Role { Key = "Logistics.Admin", Name = "Logística (Gestão)", Name_en = "Logistics (Manager)", Name_es = "Logística (Gerente)" },
				new Role { Key = "Logistics.Member", Name = "Logística (Membro)", Name_en = "Logistics (Member)", Name_es = "Logística (Miembro)" },
				new Role { Key = "Logistics.User", Name = "Logística (Usuário)", Name_en = "Logistics (User)", Name_es = "Logística (Usuario)" },
				new Role { Key = "Maintenance.Admin", Name = "Manutenção (Gestão)", Name_en = "Maintenance (Manager)", Name_es = "Mantenimiento (Gerente)" },
				new Role { Key = "Maintenance.Member", Name = "Manutenção (Membro)", Name_en = "Maintenance (Member)", Name_es = "Mantenimiento (Miembro)" },
				new Role { Key = "Maintenance.User", Name = "Manutenção (Usuário)", Name_en = "Maintenance (User)", Name_es = "Mantenimiento (Usuario)" },
				new Role { Key = "Planning.Admin", Name = "Planejamento (Gestão)", Name_en = "Planning (Manager)", Name_es = "Planificación (Gerente)" },
				new Role { Key = "Planning.Member", Name = "Planejamento (Membro)", Name_en = "Planning (Member)", Name_es = "Planificación (Miembro)" },
				new Role { Key = "Planning.User", Name = "Planejamento (Usuário)", Name_en = "Planning (User)", Name_es = "Planificación (Usuario)" },
				new Role { Key = "Production.Admin", Name = "Produção (Gestão)", Name_en = "Production (Manager)", Name_es = "Producción (Gerente)" },
				new Role { Key = "Production.Member", Name = "Produção (Membro)", Name_en = "Production (Member)", Name_es = "Producción (Miembro)" },
				new Role { Key = "Production.User", Name = "Produção (Usuário)", Name_en = "Production (User)", Name_es = "Producción (Usuario)" },
				new Role { Key = "Quality.Admin", Name = "Qualidade (Gestão)", Name_en = "Quality (Manager)", Name_es = "Calidad (Gerente)" },
				new Role { Key = "Quality.Member", Name = "Qualidade (Membro)", Name_en = "Quality (Member)", Name_es = "Calidad (Miembro)" },
				new Role { Key = "Quality.User", Name = "Qualidade (Usuário)", Name_en = "Quality (User)", Name_es = "Calidad (Usuario)" },
				new Role { Key = "Safety.Admin", Name = "Segurança (Gestão)", Name_en = "Safety (Manager)", Name_es = "Seguridad (Gerente)" },
				new Role { Key = "Safety.Member", Name = "Segurança (Membro)", Name_en = "Safety (Member)", Name_es = "Seguridad (Miembro)" },
				new Role { Key = "Safety.User", Name = "Segurança (Usuário)", Name_en = "Safety (User)", Name_es = "Seguridad (Usuario)" },
				new Role { Key = "Warehouse.Admin", Name = "Almoxarifado (Gestão)", Name_en = "Warehouse (Manager)", Name_es = "Almacén (Gerente)" },
				new Role { Key = "Warehouse.Member", Name = "Almoxarifado (Membro)", Name_en = "Warehouse (Member)", Name_es = "Almacén (Miembro)" },
				new Role { Key = "Warehouse.User", Name = "Almoxarifado (Usuário)", Name_en = "Warehouse (User)", Name_es = "Almacén (Usuario)" }
			);

		}

	}

}