using Application.DTOs;
using Application.DTOs.LimitedLiabilityCompany;
using Application.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace Web.Controllers;

[ApiController]
[Route("api/[controller]")]
public class QuestionnaireController : ControllerBase
{
    private readonly IDaDataService _daDataService;
    private readonly IIndividualEntrepreneurService _individualEntrepreneurService;
    private readonly ILimitedLiabilityCompanyService _liabilityCompanyService;

    public QuestionnaireController(IDaDataService daDataService,
        IIndividualEntrepreneurService individualEntrepreneurService, 
        ILimitedLiabilityCompanyService liabilityCompanyService)
    {
        _daDataService = daDataService;
        _individualEntrepreneurService = individualEntrepreneurService;
        _liabilityCompanyService = liabilityCompanyService;
    }


    [HttpGet]
    [Route("INN")]
    public async Task<IActionResult> GetLimitedLiabilityCompanyByINN(string inn)
    {
        var liabilityCompany = await _daDataService.GetLimitedLiabilityCompanyByINNAsync(inn);
        if (liabilityCompany == null)
        {
            return await Task.FromResult(NotFound());
        }
        return await Task.FromResult(Ok(liabilityCompany));
    }
    
    [HttpGet]
    [Route("BIK")]
    public async Task<IActionResult> GetFinancialCredentialByBIK(string bik)
    {
        var financialCredential = await _daDataService.GetFinancialCredentialByBIKAsync(bik);
        if (financialCredential == null)
        {
            return await Task.FromResult(NotFound());
        }
        return await Task.FromResult(Ok(financialCredential));
    }
    
    [HttpPost]
    [Route("LLC")]
    public async Task<IActionResult> CreateLLC(LimitedLiabilityCompanyDto limitedLiabilityCompany)
    {
        var wasAdded = await _liabilityCompanyService.AddLimitedLiabilityCompanyAsync(limitedLiabilityCompany);
        if (!wasAdded)
        {
            return BadRequest();
        }
        return Ok();
    }
    
    [HttpPost]
    [Route("IE")]
    public async Task<IActionResult> CreateIE([FromForm] IndividualEntrepreneurDto individualEntrepreneur)
    {
        var wasAdded = await _individualEntrepreneurService.AddIndividualEntrepreneurAsync(individualEntrepreneur);
        if (!wasAdded)
        {
            return BadRequest();
        }
        return Ok();
    }
}