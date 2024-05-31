using Application.Interfaces;
using Persistence.Contexts;

namespace Persistence.SeedData;

public class DbInitializer(ApplicationDbContext context) : IDbInitializer 
{
    public async Task InitializeAsync()
    {
        await context.Database.EnsureDeletedAsync();
        await context.Database.EnsureCreatedAsync();
        
        context.Roles.AddRange(Data.Roles);
        await context.SaveChangesAsync();

        context.Users.AddRange(Data.Users);
        await context.SaveChangesAsync();

        context.UserRoles.AddRange(Data.UserRoles);
        await context.SaveChangesAsync();
    }

    public void Initialize()
    {
        context.Database.EnsureDeleted();
        context.Database.EnsureCreated();
        
        context.Roles.AddRange(Data.Roles);
        context.SaveChanges();

        context.Users.AddRange(Data.Users);
        context.SaveChanges();

        context.UserRoles.AddRange(Data.UserRoles);
        context.SaveChanges();
    }
}