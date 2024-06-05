using Application.DTOs;
using Application.DTOs.LimitedLiabilityCompany;
using FluentValidation.Results;

namespace Application.Interfaces.Services;

public interface ILimitedLiabilityCompanyService
{
    Task<bool> AddLimitedLiabilityCompanyAsync(LimitedLiabilityCompanyDto limitedLiabilityCompany);
}