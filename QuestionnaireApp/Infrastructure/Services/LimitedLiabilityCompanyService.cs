using Application.DTOs;
using Application.DTOs.LimitedLiabilityCompany;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain.Entities;
using Domain.Enums;
using FluentValidation;
using FluentValidation.Results;
using Infrastructure.Extensions;
using MapsterMapper;

namespace Infrastructure.Services;

public class LimitedLiabilityCompanyService : ILimitedLiabilityCompanyService
{
    private readonly IValidator<LimitedLiabilityCompanyDto> _validator;
    private readonly IMapper _mapper;
    private readonly IGenericRepository<LimitedLiabilityCompany> _repository;
    private readonly IFinancialCredentialService _financialCredentialService;
    private readonly IMediaService _mediaService;

    public LimitedLiabilityCompanyService(IValidator<LimitedLiabilityCompanyDto> validator,
        IMapper mapper,
        IGenericRepository<LimitedLiabilityCompany> repository,
        IFinancialCredentialService financialCredentialService,
        IMediaService mediaService)
    {
        _validator = validator;
        _mapper = mapper;
        _repository = repository;
        _financialCredentialService = financialCredentialService;
        _mediaService = mediaService;
    }


    public async Task<bool> AddLimitedLiabilityCompanyAsync(LimitedLiabilityCompanyDto limitedLiabilityCompany)
    {
        var validationResult = await _validator.ValidateAsync(limitedLiabilityCompany);
        if (!validationResult.IsValid)
        {
            return false;
        }

        await using var transaction = _repository.BeginTransaction();
        var entity = _mapper.Map<LimitedLiabilityCompany>(limitedLiabilityCompany);
        var entityId = await _repository.CreateAsync(entity);

        foreach (var financialCredential in limitedLiabilityCompany.FinancialCredentials)
        {
            financialCredential.LimitedLiabilityCompanyId = entityId;
            var financialAdded = await _financialCredentialService.AddFinancialCredentialAsync(financialCredential);
            if (!financialAdded)
            {
                await transaction.RollbackAsync();
                return false;
            }
        }

        var medias = limitedLiabilityCompany.GetMedias();

        foreach  (var media in medias)
        {
            media.LimitedLiabilityCompanyId = entityId;
            await _mediaService.AddMediaAsync(media);
        }
        
        await transaction.CommitAsync();
        
        return true;
    }
    
}