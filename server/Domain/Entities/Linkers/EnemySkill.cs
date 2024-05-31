using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class EnemySkill : BaseEntity
{ 
    public Guid EnemyId { get; set; }
    
    public Guid SkillId { get; set; }
    
    public virtual Enemy Enemy { get; set; }
    
    public virtual SkillLevel Skill { get; set; }
}