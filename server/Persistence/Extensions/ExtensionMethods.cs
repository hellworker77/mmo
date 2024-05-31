using Application.Interfaces;
using Domain.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.StackExchangeRedis;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence.Contexts;
using Persistence.SeedData;
using ZiggyCreatures.Caching.Fusion;
using ZiggyCreatures.Caching.Fusion.Serialization.SystemTextJson;

namespace Persistence.Extensions;

public static class ExtensionMethods
{
    public static IServiceCollection AddPersistenceLayer(this IServiceCollection services,
        IConfiguration configuration) =>
        services
            .AddDbContext(configuration)
            .AddRepositories();

    public static void AddIdentities(this IServiceCollection services) =>
        services.AddDefaultIdentity<User>()
            .AddRoles<IdentityRole<Guid>>()
            .AddEntityFrameworkStores<ApplicationDbContext>()
            .AddUserManager<UserManager<User>>()
            .AddRoleManager<RoleManager<IdentityRole<Guid>>>()
            .AddDefaultTokenProviders();

    public static IServiceCollection AddRedisCache(this IServiceCollection services, IConfiguration configuration)
    {
        var redisConnectionString = configuration.GetConnectionString("redisCache");

        services.AddFusionCache()
            .WithDefaultEntryOptions(new FusionCacheEntryOptions
            {
                FactorySoftTimeout = TimeSpan.FromMilliseconds(100),
                FactoryHardTimeout = TimeSpan.FromMilliseconds(1500)
            })
            .WithSerializer(new FusionCacheSystemTextJsonSerializer())
            .WithDistributedCache(new RedisCache(new RedisCacheOptions
                {
                    Configuration = redisConnectionString
                }
            ));
        return services;
    }

    public static IServiceCollection AddDbInitializer(this IServiceCollection services) =>
        services
            .AddTransient<IDbInitializer, DbInitializer>();

    public static void UseDbInitializer(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();

        var dbInitializer = scope.ServiceProvider.GetRequiredService<IDbInitializer>();

        dbInitializer.Initialize();
    }


    public static async Task UseDbInitializerAsync(this IApplicationBuilder app)
    {
        using var scope = app.ApplicationServices.CreateScope();

        var dbInitializer = scope.ServiceProvider.GetRequiredService<IDbInitializer>();

        await dbInitializer.InitializeAsync();
    }

    private static IServiceCollection AddDbContext(this IServiceCollection services,
        IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("entityDb");

        return services.AddDbContext<ApplicationDbContext>(options =>
        {
            options.UseNpgsql(connectionString,
                builder => builder.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName));
            options.UseLazyLoadingProxies();
        });
    }

    private static IServiceCollection AddRepositories(this IServiceCollection services) =>
        services;
}