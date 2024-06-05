using Application.DTOs.LimitedLiabilityCompany;
using Dadata.Model;
using Mapster;

namespace Application.Mappers;

public class LimitedLiabilityCompanyMapper : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.ForType<Party, LimitedLiabilityCompanyByINNDto>()
            .Map(destination => destination.RegisterDate, source => source.state.registration_date)
            .Map(destination => destination.OGRN, source => source.ogrn)
            .Map(destination => destination.ShortName, source => source.name.@short)
            .Map(destination => destination.LongName, source => source.name.full);
        
    }
}