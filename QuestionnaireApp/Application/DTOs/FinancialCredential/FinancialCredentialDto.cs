namespace Application.DTOs.FinancialCredential;

public class FinancialCredentialDto 
{
    public Guid? IndividualEntrepreneurId { get; set; }
    
    public Guid? LimitedLiabilityCompanyId { get; set; }
    
    public string BIK { get; set; }
    public string BankName { get; set; }
    public string CheckingAccount { get; set; }
    public string CorrespondentAccount { get; set; }
   
}