using Application.DTOs.FinancialCredential;
using Microsoft.AspNetCore.Http;

namespace Application.DTOs;

public class IndividualEntrepreneurDto
{
    public string INN { get; set; }
    public IFormFile ScanINN { get; set; }
    public string OGRNIP { get; set; }
    public IFormFile ScanOGRNIP { get; set; }
    public DateTime RegisterDate { get; set; }
    public IFormFile ScanEGRIP { get; set; }
    public IFormFile? ScanContract { get; set; }
    public bool LackContract { get; set; }
    
    public IList<FinancialCredentialDto> FinancialCredentials { get; set; }
}