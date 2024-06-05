using Application.DTOs.FinancialCredential;
using Microsoft.AspNetCore.Http;

namespace Application.DTOs.LimitedLiabilityCompany;

public class LimitedLiabilityCompanyDto
{
    public string LongName { get; set; }
    public string ShortName { get; set; }
    public string INN { get; set; }
    public IFormFile ScanINN { get; set; }
    public string OGRN { get; set; }
    public IFormFile ScanOGRN { get; set; }
    public DateTime RegisterDate { get; set; }
    public IFormFile ScanEGRIP { get; set; }
    public IFormFile? ScanContract { get; set; }
    public bool LackContract { get; set; }
    
    public IList<FinancialCredentialDto> FinancialCredentials { get; set; }
}