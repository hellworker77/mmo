using Domain.Entities.Abstract;
using Domain.Enums;

namespace Domain.Entities;

public class Media : BaseEntity
{
    public Guid? IndividualEntrepreneurId { get; set; }
    public Guid? LimitedLiabilityCompanyId { get; set; }
    public MediaType Type { get; set; }
    
    public string FileName { get; set; }
    public string FileBase64 { get; set; }

    public virtual IndividualEntrepreneur IndividualEntrepreneur { get; set; }
    public virtual LimitedLiabilityCompany LimitedLiabilityCompany { get; set; }
}