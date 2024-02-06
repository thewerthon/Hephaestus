namespace Hephaestus.Backend.Database {

	public class UserRoleTable : IEntityTypeConfiguration<UserRole> {

		public void Configure(EntityTypeBuilder<UserRole> builder) {

			// Table Name
			builder.ToTable("Roles");

			// Primary Key
			builder.HasKey(x => x.Key);
			builder.Property(x => x.Key).IsUnicode(false).ValueGeneratedNever();

			// Data Seed
			builder.HasData(
				new Theme { Key = "System.Admin", Name = "System Admin", Name_pt = "Administrador", Name_en = "Administrator", Name_es = "Administrador" },
				new Theme { Key = "System.Member", Name = "SystemM ember", Name_pt = "Moderador", Name_en = "Moderator", Name_es = "Moderador" },
				new Theme { Key = "System.User", Name = "System User", Name_pt = "Usuário Padrão", Name_en = "System User", Name_es = "Usuario Estándar" },
				new Theme { Key = "Engineering.Admin", Name = "Engineering Admin", Name_pt = "Engenharia (Gestão)", Name_en = "Engineering (Manager)", Name_es = "Ingeniería (Gerente)" },
				new Theme { Key = "Engineering.Member", Name = "Engineering Member", Name_pt = "Engenharia (Membro)", Name_en = "Engineering (Member)", Name_es = "Ingeniería (Miembro)" },
				new Theme { Key = "Engineering.User", Name = "Engineering User", Name_pt = "Engenharia (Usuário)", Name_en = "Engineering (User)", Name_es = "Ingeniería (Usuario)" },
				new Theme { Key = "Fiscal.Admin", Name = "Fiscal Admin", Name_pt = "Fiscal (Gestão)", Name_en = "Fiscal (Manager)", Name_es = "Fiscal (Gerente)" },
				new Theme { Key = "Fiscal.Member", Name = "Fiscal Member", Name_pt = "Fiscal (Membro)", Name_en = "Fiscal (Member)", Name_es = "Fiscal (Miembro)" },
				new Theme { Key = "Fiscal.User", Name = "Fiscal User", Name_pt = "Fiscal (Usuário)", Name_en = "Fiscal (User)", Name_es = "Fiscal (Usuario)" },
				new Theme { Key = "Logistics.Admin", Name = "Logistics Admin", Name_pt = "Logística (Gestão)", Name_en = "Logistics (Manager)", Name_es = "Logística (Gerente)" },
				new Theme { Key = "Logistics.Member", Name = "Logistics Member", Name_pt = "Logística (Membro)", Name_en = "Logistics (Member)", Name_es = "Logística (Miembro)" },
				new Theme { Key = "Logistics.User", Name = "Logistics User", Name_pt = "Logística (Usuário)", Name_en = "Logistics (User)", Name_es = "Logística (Usuario)" },
				new Theme { Key = "Maintenance.Admin", Name = "Maintenance Admin", Name_pt = "Manutenção (Gestão)", Name_en = "Maintenance (Manager)", Name_es = "Mantenimiento (Gerente)" },
				new Theme { Key = "Maintenance.Member", Name = "Maintenance Member", Name_pt = "Manutenção (Membro)", Name_en = "Maintenance (Member)", Name_es = "Mantenimiento (Miembro)" },
				new Theme { Key = "Maintenance.User", Name = "Maintenance User", Name_pt = "Manutenção (Usuário)", Name_en = "Maintenance (User)", Name_es = "Mantenimiento (Usuario)" },
				new Theme { Key = "Planning.Admin", Name = "Planning Admin", Name_pt = "Planejamento (Gestão)", Name_en = "Planning (Manager)", Name_es = "Planificación (Gerente)" },
				new Theme { Key = "Planning.Member", Name = "Planning Member", Name_pt = "Planejamento (Membro)", Name_en = "Planning (Member)", Name_es = "Planificación (Miembro)" },
				new Theme { Key = "Planning.User", Name = "Planning User", Name_pt = "Planejamento (Usuário)", Name_en = "Planning (User)", Name_es = "Planificación (Usuario)" },
				new Theme { Key = "Production.Admin", Name = "Production Admin", Name_pt = "Produção (Gestão)", Name_en = "Production (Manager)", Name_es = "Producción (Gerente)" },
				new Theme { Key = "Production.Member", Name = "Production Member", Name_pt = "Produção (Membro)", Name_en = "Production (Member)", Name_es = "Producción (Miembro)" },
				new Theme { Key = "Production.User", Name = "Production User", Name_pt = "Produção (Usuário)", Name_en = "Production (User)", Name_es = "Producción (Usuario)" },
				new Theme { Key = "Quality.Admin", Name = "Quality Admin", Name_pt = "Qualidade (Gestão)", Name_en = "Quality (Manager)", Name_es = "Calidad (Gerente)" },
				new Theme { Key = "Quality.Member", Name = "Quality Member", Name_pt = "Qualidade (Membro)", Name_en = "Quality (Member)", Name_es = "Calidad (Miembro)" },
				new Theme { Key = "Quality.User", Name = "Quality User", Name_pt = "Qualidade (Usuário)", Name_en = "Quality (User)", Name_es = "Calidad (Usuario)" },
				new Theme { Key = "Safety.Admin", Name = "Safety Admin", Name_pt = "Segurança (Gestão)", Name_en = "Safety (Manager)", Name_es = "Seguridad (Gerente)" },
				new Theme { Key = "Safety.Member", Name = "Safety Member", Name_pt = "Segurança (Membro)", Name_en = "Safety (Member)", Name_es = "Seguridad (Miembro)" },
				new Theme { Key = "Safety.User", Name = "Safety User", Name_pt = "Segurança (Usuário)", Name_en = "Safety (User)", Name_es = "Seguridad (Usuario)" },
				new Theme { Key = "Warehouse.Admin", Name = "Warehouse Admin", Name_pt = "Almoxarifado (Gestão)", Name_en = "Warehouse (Manager)", Name_es = "Almacén (Gerente)" },
				new Theme { Key = "Warehouse.Member", Name = "Warehouse Member", Name_pt = "Almoxarifado (Membro)", Name_en = "Warehouse (Member)", Name_es = "Almacén (Miembro)" },
				new Theme { Key = "Warehouse.User", Name = "Warehouse User", Name_pt = "Almoxarifado (Usuário)", Name_en = "Warehouse (User)", Name_es = "Almacén (Usuario)" }
			);

		}

	}

}