using Domain.Entities.Abstract;
using Domain.Entities.Linkers;

namespace Domain.Entities.Linkers;

public class SkillLevel : BaseEntity
{
    public Guid SkillId { get; set; } 
    
    public byte Level { get; set; }
    
    public ushort Cost { get; set; }
    
    public virtual Skill Skill { get; set; }
    
    public virtual IList<EnemySkill> EnemySkills { get; set; }
    
    public virtual IList<SkillEffect> Effects { get; set; }
}