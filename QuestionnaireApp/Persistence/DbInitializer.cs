using Application.Interfaces;
using Persistence.Contexts;

namespace Persistence;

public class DbInitializer : IDbInitializer
{
    private readonly ApplicationContext _context;

    public DbInitializer(ApplicationContext context)
    {
        _context = context;
    }

    public async Task InitializeAsync()
    {
        await _context.Database.EnsureDeletedAsync();
        await _context.Database.EnsureCreatedAsync();
    }
}