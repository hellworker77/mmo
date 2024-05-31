using System.Reflection;
using FluentValidation;
using Mapster;
using MapsterMapper;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Extensions;

public static class ExtensionMethods
{
    public static void AddApplicationLayer(this IServiceCollection services)
    {
        services
            .AddMapsterFromAssembly()
            .AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
    }
    private static IServiceCollection AddMapsterFromAssembly(this IServiceCollection services)
    {
        var typeAdapterConfig = TypeAdapterConfig.GlobalSettings;
        typeAdapterConfig.Scan(Assembly.GetExecutingAssembly());
        var mapperConfig = new Mapper(typeAdapterConfig);
        return  services.AddSingleton<IMapper>(mapperConfig);
    }
}