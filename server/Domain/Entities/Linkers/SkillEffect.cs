using Domain.Entities.Abstract;
using Domain.Enums;

namespace Domain.Entities.Linkers;

public class SkillEffect : BaseEntity
{
    public Guid SkillId { get; set; }
    
    public byte Turns { get; set; }
    
    public uint Value { get; set; }
    
    public SkillEffectType EffectType { get; set; }
    
    public virtual SkillLevel Skill { get; set; }
   
}