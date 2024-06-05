using Domain.Entities.Abstract;

namespace Domain.Entities;

public class FinancialCredential : BaseEntity
{
    public Guid? IndividualEntrepreneurId { get; set; }
    public Guid? LimitedLiabilityCompanyId { get; set; }
    
    public string BIK { get; set; }
    public string BankName { get; set; }
    public string CheckingAccount { get; set; }
    public string CorrespondentAccount { get; set; }
     
    public virtual IndividualEntrepreneur IndividualEntrepreneur { get; set; }
    public virtual LimitedLiabilityCompany LimitedLiabilityCompany { get; set; }
}