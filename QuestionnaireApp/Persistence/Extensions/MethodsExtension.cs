using Application.Interfaces;
using Application.Interfaces.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence.Contexts;
using Persistence.Repositories;

namespace Persistence.Extensions;

public static class MethodsExtension
{
    public static IServiceCollection AddPersistenceLayer(this IServiceCollection serviceCollection,
        IConfiguration configuration)
        => serviceCollection
            .AddApplicationContext(configuration)
            .AddScoped<IDbInitializer, DbInitializer>()
            .AddRepositories();
    
    public static async Task UseDbInitializerAsync(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();

        var dbInitializer = scope.ServiceProvider.GetRequiredService<IDbInitializer>();

        await dbInitializer.InitializeAsync();
    }

    private static IServiceCollection AddApplicationContext(this IServiceCollection serviceCollection,
        IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("entityDb");
        
        return serviceCollection.AddDbContext<ApplicationContext>(options =>
        {
            options.UseNpgsql(connectionString,
                builder => builder.MigrationsAssembly(typeof(ApplicationContext).Assembly.FullName));
            options.UseLazyLoadingProxies();
        });
    }

    private static IServiceCollection AddRepositories(this IServiceCollection serviceCollection) =>
        serviceCollection.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));
}