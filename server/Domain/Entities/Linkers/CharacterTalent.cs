using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class CharacterTalent : BaseEntity
{
    public Guid TalentId { get; set; }
    
    public Guid CharacterId { get; set; }
    
    public byte Level { get; set; }
    
    public virtual Talent Talent { get; set; }
    
    public virtual Character Character { get; set; }
}