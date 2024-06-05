using Application.DTOs.FinancialCredential;
using Dadata.Model;
using Domain.Entities;
using Mapster;

namespace Application.Mappers;

public class FinancialCredentialMapper : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.ForType<Bank, FinancialCredentialByBIKDto>()
            .Map(destination => destination.BankName, source => source.name.payment)
            .Map(destination => destination.CorrespondentAccount, source => source.correspondent_account);

        config.ForType<FinancialCredentialDto, FinancialCredential>();
    }
}