namespace Application.Interfaces;

public interface IDbInitializer
{
    Task InitializeAsync();
    void Initialize();
}