namespace Hephaestus.Evaluator.Tests;

[Collection("TestCollection")]
public abstract class BaseTypeBoolTests<T>(ApplicationFactory app, string endpoint) : BaseODataTests<T>(app, endpoint) where T : class, ITypeBool, ITypeSeed<T> {

	[Theory]
	[MemberData(nameof(GetSeedData))]
	public virtual async Task GetItemAsync(T item) {

		//Arrange
		var key = item.Key.ToString().ToLower();

		// Act
		var response = await HttpClient.GetFromJsonAsync<T>($"{Endpoint}({key})");

		// Assert
		Assert.NotNull(response);
		Assert.IsType<T>(response);
		Assert.Equal(item.Key, response.Key);
		Assert.Equal(item.Value, response.Value);
		Assert.NotNull(response.Value);

	}

	public static BaseTypeBoolTheoryData<T> GetSeedData() {

		return new BaseTypeBoolTheoryData<T>(T.Seed);

	}

}

public class BaseTypeBoolTheoryData<T> : TheoryData<T> where T : ITypeBool {

	public BaseTypeBoolTheoryData(IEnumerable<T> seedData) {

		foreach (var item in seedData) {

			Add(item);

		}

	}

}