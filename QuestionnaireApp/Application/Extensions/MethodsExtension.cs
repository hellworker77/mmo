using System.Reflection;
using FluentValidation;
using Mapster;
using MapsterMapper;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Extensions;

public static class MethodsExtension
{
    public static void AddApplicationLayer(this IServiceCollection serviceCollection) 
        => serviceCollection
            .AddMappersFromAssembly(Assembly.GetExecutingAssembly())
            .AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
    
    private static IServiceCollection AddMappersFromAssembly(this IServiceCollection services, Assembly executionAssembly)
    {
        var typeAdapterConfig = TypeAdapterConfig.GlobalSettings;
        typeAdapterConfig.Scan(executionAssembly);
        var mapperConfig = new Mapper(typeAdapterConfig);
        return  services.AddSingleton<IMapper>(mapperConfig);
    }
}