namespace Hephaestus.Architect.Models;

public class Role : BaseTypeKey, ITypeSeed<BaseTypeKey> {

	public static IEnumerable<BaseTypeKey> Seed { get; } = [

		new Role { Key = "System.Admin",        Value = "Administrador",            Value_en = "Administrator",           Value_es = "Administrador" },
		new Role { Key = "System.Member",       Value = "Moderador",                Value_en = "Moderator",               Value_es = "Moderador" },
		new Role { Key = "System.User",         Value = "Usuário Padrão",           Value_en = "System User",             Value_es = "Usuario Estándar" },
		new Role { Key = "Engineering.Admin",   Value = "Engenharia (Gestão)",      Value_en = "Engineering (Manager)",   Value_es = "Ingeniería (Gerente)" },
		new Role { Key = "Engineering.Member",  Value = "Engenharia (Membro)",      Value_en = "Engineering (Member)",    Value_es = "Ingeniería (Miembro)" },
		new Role { Key = "Engineering.User",    Value = "Engenharia (Usuário)",     Value_en = "Engineering (User)",      Value_es = "Ingeniería (Usuario)" },
		new Role { Key = "Fiscal.Admin",        Value = "Fiscal (Gestão)",          Value_en = "Fiscal (Manager)",        Value_es = "Fiscal (Gerente)" },
		new Role { Key = "Fiscal.Member",       Value = "Fiscal (Membro)",          Value_en = "Fiscal (Member)",         Value_es = "Fiscal (Miembro)" },
		new Role { Key = "Fiscal.User",         Value = "Fiscal (Usuário)",         Value_en = "Fiscal (User)",           Value_es = "Fiscal (Usuario)" },
		new Role { Key = "Logistics.Admin",     Value = "Logística (Gestão)",       Value_en = "Logistics (Manager)",     Value_es = "Logística (Gerente)" },
		new Role { Key = "Logistics.Member",    Value = "Logística (Membro)",       Value_en = "Logistics (Member)",      Value_es = "Logística (Miembro)" },
		new Role { Key = "Logistics.User",      Value = "Logística (Usuário)",      Value_en = "Logistics (User)",        Value_es = "Logística (Usuario)" },
		new Role { Key = "Maintenance.Admin",   Value = "Manutenção (Gestão)",      Value_en = "Maintenance (Manager)",   Value_es = "Mantenimiento (Gerente)" },
		new Role { Key = "Maintenance.Member",  Value = "Manutenção (Membro)",      Value_en = "Maintenance (Member)",    Value_es = "Mantenimiento (Miembro)" },
		new Role { Key = "Maintenance.User",    Value = "Manutenção (Usuário)",     Value_en = "Maintenance (User)",      Value_es = "Mantenimiento (Usuario)" },
		new Role { Key = "Planning.Admin",      Value = "Planejamento (Gestão)",    Value_en = "Planning (Manager)",      Value_es = "Planificación (Gerente)" },
		new Role { Key = "Planning.Member",     Value = "Planejamento (Membro)",    Value_en = "Planning (Member)",       Value_es = "Planificación (Miembro)" },
		new Role { Key = "Planning.User",       Value = "Planejamento (Usuário)",   Value_en = "Planning (User)",         Value_es = "Planificación (Usuario)" },
		new Role { Key = "Production.Admin",    Value = "Produção (Gestão)",        Value_en = "Production (Manager)",    Value_es = "Producción (Gerente)" },
		new Role { Key = "Production.Member",   Value = "Produção (Membro)",        Value_en = "Production (Member)",     Value_es = "Producción (Miembro)" },
		new Role { Key = "Production.User",     Value = "Produção (Usuário)",       Value_en = "Production (User)",       Value_es = "Producción (Usuario)" },
		new Role { Key = "Quality.Admin",       Value = "Qualidade (Gestão)",       Value_en = "Quality (Manager)",       Value_es = "Calidad (Gerente)" },
		new Role { Key = "Quality.Member",      Value = "Qualidade (Membro)",       Value_en = "Quality (Member)",        Value_es = "Calidad (Miembro)" },
		new Role { Key = "Quality.User",        Value = "Qualidade (Usuário)",      Value_en = "Quality (User)",          Value_es = "Calidad (Usuario)" },
		new Role { Key = "Safety.Admin",        Value = "Segurança (Gestão)",       Value_en = "Safety (Manager)",        Value_es = "Seguridad (Gerente)" },
		new Role { Key = "Safety.Member",       Value = "Segurança (Membro)",       Value_en = "Safety (Member)",         Value_es = "Seguridad (Miembro)" },
		new Role { Key = "Safety.User",         Value = "Segurança (Usuário)",      Value_en = "Safety (User)",           Value_es = "Seguridad (Usuario)" },
		new Role { Key = "Warehouse.Admin",     Value = "Almoxarifado (Gestão)",    Value_en = "Warehouse (Manager)",     Value_es = "Almacén (Gerente)" },
		new Role { Key = "Warehouse.Member",    Value = "Almoxarifado (Membro)",    Value_en = "Warehouse (Member)",      Value_es = "Almacén (Miembro)" },
		new Role { Key = "Warehouse.User",      Value = "Almoxarifado (Usuário)",   Value_en = "Warehouse (User)",        Value_es = "Almacén (Usuario)" }

	];

}