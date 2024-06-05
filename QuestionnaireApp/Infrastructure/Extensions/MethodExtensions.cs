using Application.Interfaces.Services;
using Application.Options;
using Dadata;
using Infrastructure.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Extensions;

public static class MethodExtensions
{
    public static IServiceCollection AddInfrastructureLayer(this IServiceCollection serviceCollection,
        IConfiguration configuration)
        => serviceCollection
            .AddServices()
            .AddDaData(configuration);

    private static IServiceCollection AddDaData(this IServiceCollection serviceCollection,
        IConfiguration configuration)
    {
        var daDataOptions = new DaDataOptions();
        configuration.GetSection("DaDataOptions").Bind(daDataOptions);

        serviceCollection.AddSingleton(new SuggestClientAsync(daDataOptions.Token));
        
        return serviceCollection;
    }

    private static IServiceCollection AddServices(this IServiceCollection serviceCollection)
        => serviceCollection
            .AddScoped<IDaDataService, DaDataService>()
            .AddScoped<IMediaService, MediaService>()
            .AddScoped<IFinancialCredentialService, FinancialCredentialService>()
            .AddScoped<ILimitedLiabilityCompanyService, LimitedLiabilityCompanyService>()
            .AddScoped<IIndividualEntrepreneurService, IndividualEntrepreneurService>();
}