using Domain.Entities.Abstract;

namespace Domain.Entities;

public class LimitedLiabilityCompany : BaseEntity
{
    public string LongName { get; set; }
    public string ShortName { get; set; }
    public string INN { get; set; }
    public string OGRN { get; set; }
    public DateTime RegisterDate { get; set; }
    public bool LackContract { get; set; }
    
    public virtual IList<FinancialCredential> FinancialCredentials { get; set; }
    public virtual IList<Media> Medias { get; set; }
}