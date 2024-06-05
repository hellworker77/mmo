using Application.DTOs;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain.Entities;
using FluentValidation;
using FluentValidation.Results;
using Infrastructure.Extensions;
using MapsterMapper;

namespace Infrastructure.Services;

public class IndividualEntrepreneurService : IIndividualEntrepreneurService
{
    private readonly IValidator<IndividualEntrepreneurDto> _validator;
    private readonly IMapper _mapper;
    private readonly IGenericRepository<IndividualEntrepreneur> _repository;
    private readonly IFinancialCredentialService _financialCredentialService;
    private readonly IMediaService _mediaService;

    public IndividualEntrepreneurService(IValidator<IndividualEntrepreneurDto> validator, IMapper mapper, IGenericRepository<IndividualEntrepreneur> repository, IFinancialCredentialService financialCredentialService, IMediaService mediaService)
    {
        _validator = validator;
        _mapper = mapper;
        _repository = repository;
        _financialCredentialService = financialCredentialService;
        _mediaService = mediaService;
    }

    public async Task<bool> AddIndividualEntrepreneurAsync(IndividualEntrepreneurDto individualEntrepreneur)
    {
        var validationResult = await _validator.ValidateAsync(individualEntrepreneur);
        if (!validationResult.IsValid)
        {
            return false;
        }

        await using var transaction = _repository.BeginTransaction();
        var entity = _mapper.Map<IndividualEntrepreneur>(individualEntrepreneur);
        var entityId = await _repository.CreateAsync(entity);

        foreach (var financialCredential in individualEntrepreneur.FinancialCredentials)
        {
            financialCredential.IndividualEntrepreneurId = entityId;
            var financialAdded = await _financialCredentialService.AddFinancialCredentialAsync(financialCredential);
            if (!financialAdded)
            {
                await transaction.RollbackAsync();
                return false;
            }
        }

        var medias = individualEntrepreneur.GetMedias();

        foreach  (var media in medias)
        {
            media.IndividualEntrepreneurId = entityId;
            await _mediaService.AddMediaAsync(media);
        }

        await transaction.CommitAsync();
        
        return true;
    }
}