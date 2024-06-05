using Application.DTOs.FinancialCredential;
using FluentValidation.Results;

namespace Application.Interfaces.Services;

public interface IFinancialCredentialService
{
    Task<bool> AddFinancialCredentialAsync(FinancialCredentialDto financialCredential);
}