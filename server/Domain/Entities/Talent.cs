using Domain.Entities.Abstract;
using Domain.Entities.Linkers;
using Domain.Enums;

namespace Domain.Entities;

public class Talent : BaseEntity
{
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public byte MaxLevel { get; set; }
    
    public TalentId DataId { get; set; }
    
    public CharacterClass TargetClass { get; set; }
    
    public virtual IList<TalentNode> Nodes { get; set; }
    
    public virtual IList<TalentLink> Links { get; set; }
    
    public virtual IList<CharacterTalent> Characters { get; set; }
}