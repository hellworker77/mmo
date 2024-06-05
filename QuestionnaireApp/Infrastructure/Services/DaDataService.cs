using Application.DTOs.FinancialCredential;
using Application.DTOs.LimitedLiabilityCompany;
using Application.Interfaces.Services;
using Dadata;
using MapsterMapper;

namespace Infrastructure.Services;

public class DaDataService : IDaDataService
{
    private readonly SuggestClientAsync _suggestClient;
    private readonly IMapper _mapper;

    public DaDataService(SuggestClientAsync suggestClient,
        IMapper mapper)
    {
        _suggestClient = suggestClient;
        _mapper = mapper;
    }
    
    public async Task<FinancialCredentialByBIKDto?> GetFinancialCredentialByBIKAsync(string bik)
    {
        var suggestResponse = await _suggestClient.FindBank(bik);
        var suggestion = suggestResponse.suggestions.FirstOrDefault();

        if (suggestion is null)
        {
            return null;
        }
        
        var bank = suggestion.data;
        return _mapper.Map<FinancialCredentialByBIKDto>(bank);
    }

    public async Task<LimitedLiabilityCompanyByINNDto?> GetLimitedLiabilityCompanyByINNAsync(string inn)
    {
        var suggestResponse = await _suggestClient.FindParty(inn);
        var suggestion = suggestResponse.suggestions.FirstOrDefault();
        
        if (suggestion is null)
        {
            return null;
            
        }

        var party = suggestion.data;
        return _mapper.Map<LimitedLiabilityCompanyByINNDto>(party);
    }
}