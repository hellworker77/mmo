using Application.DTOs.FinancialCredential;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain.Entities;
using FluentValidation;
using FluentValidation.Results;
using MapsterMapper;

namespace Infrastructure.Services;

public class FinancialCredentialService : IFinancialCredentialService
{
    private readonly IMapper _mapper;
    private readonly IValidator<FinancialCredentialDto> _validator;
    private readonly IGenericRepository<FinancialCredential> _repository;

    public FinancialCredentialService(IMapper mapper, 
        IValidator<FinancialCredentialDto> validator,
        IGenericRepository<FinancialCredential> repository)
    {
        _mapper = mapper;
        _validator = validator;
        _repository = repository;
    }

    public async Task<bool> AddFinancialCredentialAsync(FinancialCredentialDto financialCredential)
    {
        var validationResult = await _validator.ValidateAsync(financialCredential);

        if (validationResult.IsValid)
        {
            var entity = _mapper.Map<FinancialCredential>(financialCredential);
            await _repository.CreateAsync(entity);
        }

        return validationResult.IsValid;
    }
}