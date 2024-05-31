using System.IdentityModel.Tokens.Jwt;
using Application.Interfaces.Services;
using Infrastructure.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Extensions;

public static class MethodExtensions
{
    public static IServiceCollection AddAuthenticationSchema(this IServiceCollection services,
        IConfiguration configuration,
        string audience = "api")
    {
        JwtSecurityTokenHandler.DefaultInboundClaimTypeMap.Clear();
        var identityUrl = configuration.GetValue<string>("IdentityUrl");

        services.AddAuthentication(options =>
        {
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        }).AddJwtBearer(options =>
        {
            options.Authority = identityUrl;
            options.RequireHttpsMetadata = false;
            options.Audience = audience;
        });

        return services;
    }

    public static IServiceCollection AddInfrastructureLayer(this IServiceCollection services) =>
        services
            .AddServices()
            .AddProviders();

    private static IServiceCollection AddServices(this IServiceCollection services) =>
        services
            .AddTransient<IIdentityService, IdentityService>();
    
    private static IServiceCollection AddProviders(this IServiceCollection services) => services;
}