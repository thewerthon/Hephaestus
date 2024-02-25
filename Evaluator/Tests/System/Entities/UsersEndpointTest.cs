using Hephaestus.Evaluator;

namespace Hephaestus.Evaluator;

public class UsersEndpointTest(ApplicationFactory app) : BaseEntityEndpointTests<User>(app, BaseEndpoint, Sample) {

	private static readonly string BaseEndpoint = "/OData/Users";

	private static User Sample => new() {

		Id = 0,
		Guid = "12345678-1234-1234-1234-123456789012",
		Name = "Usuário de Teste",
		Email = "teste@siw.ind.br",
		Photo = "images/users/unknown.jpg",
		Role = "System.User",
		Hidden = false,
		Active = true

	};

}