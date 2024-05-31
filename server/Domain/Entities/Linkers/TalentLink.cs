using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class TalentLink : BaseEntity
{
    public Guid ParentId { get; set; }
    
    public virtual Talent Parent { get; set; }
    
    public virtual IList<TalentNode> Nodes { get; set; }
}