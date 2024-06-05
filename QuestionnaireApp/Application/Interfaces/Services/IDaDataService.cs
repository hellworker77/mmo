using Application.DTOs.FinancialCredential;
using Application.DTOs.LimitedLiabilityCompany;

namespace Application.Interfaces.Services;

public interface IDaDataService
{
    Task<FinancialCredentialByBIKDto?> GetFinancialCredentialByBIKAsync(string bik);

    Task<LimitedLiabilityCompanyByINNDto?> GetLimitedLiabilityCompanyByINNAsync(string inn);
}