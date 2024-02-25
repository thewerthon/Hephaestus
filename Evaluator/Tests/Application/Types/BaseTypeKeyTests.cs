namespace Hephaestus.Evaluator.Tests;

[Collection("TestCollection")]
public abstract class BaseTypeKeyTests<T>(ApplicationFactory app, string endpoint) : BaseODataTests<T>(app, endpoint) where T : class, ITypeKey, ITypeSeed<T> {

	[Theory]
	[MemberData(nameof(GetSeedData))]
	public virtual async Task GetItemAsync(T item) {

		//Arrange
		var key = item.Key;

		// Act
		var response = await HttpClient.GetFromJsonAsync<T>($"{Endpoint}('{key}')");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<T>(response);
		Assert.Equal(item.Key, response.Key);
		Assert.Equal(item.Value, response.Value);
		Assert.NotNull(response.Value);

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