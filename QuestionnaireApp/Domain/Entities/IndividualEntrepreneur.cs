using Domain.Entities.Abstract;

namespace Domain.Entities;

public class IndividualEntrepreneur : BaseEntity
{
    public string INN { get; set; }
    public string OGRNIP { get; set; }
    public DateTime RegisterDate { get; set; }
    public bool LackContract { get; set; }
    
    public virtual IList<FinancialCredential> FinancialCredentials { get; set; }
    public virtual IList<Media> Medias { get; set; }
}