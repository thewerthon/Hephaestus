namespace Hephaestus.Evaluator.Abstractions.Tests;

[Collection("TestCollection")]
public abstract class BaseTypeKeyTests<T>(ApplicationFactory app, string endpoint) : BaseODataTests<T>(app, endpoint) where T : class, ITypeKey, ITypeSeed<T> {

	[Theory]
	[MemberData(nameof(GetSeedData))]
	public virtual async Task GetItemAsync(T item) {

		//Arrange
		var key = item.Key;

		// Act
		var response = await HttpClient.GetAsync($"{Endpoint}('{key}')");
		var content = await response.Content.ReadFromJsonAsync<T>();

		// Assert Status
		Assert.True(response.IsSuccessStatusCode);

		// Assert Content
		Assert.NotNull(content);
		Assert.IsType<T>(content);
		Assert.Equal(item.Key, content.Key);
		Assert.Equal(item.Value, content.Value);
		Assert.NotNull(content.Value);

	}

	public static BaseTypeKeyTheoryData<T> GetSeedData() {

		return new BaseTypeKeyTheoryData<T>(T.Seed);

	}

}

public class BaseTypeKeyTheoryData<T> : TheoryData<T> where T : ITypeKey {

	public BaseTypeKeyTheoryData(IEnumerable<T> seedData) {

		foreach (var item in seedData) {

			Add(item);

		}

	}

}