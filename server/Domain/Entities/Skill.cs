using Domain.Entities.Abstract;
using Domain.Entities.Linkers;
using Domain.Enums;

namespace Domain.Entities;

public class Skill : BaseEntity
{
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public SkillId DataId { get; set; }
    
    public virtual IList<SkillLevel> Levels { get; set; }
}