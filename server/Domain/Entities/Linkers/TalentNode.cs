using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class TalentNode : BaseEntity
{
    public Guid LinkId { get; set; }
    
    public Guid TalentId { get; set; }   
    
    public byte RequiredLevel { get; set; }
    
    public virtual TalentLink Link { get; set; }
    
    public virtual Talent Talent { get; set; }
}