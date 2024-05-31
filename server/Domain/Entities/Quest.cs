using Domain.Entities.Abstract;
using Domain.Entities.Linkers;

namespace Domain.Entities;

public class Quest : BaseEntity
{
    public Guid LocationId { get; set; }
    
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public ulong Award { get; set; }
    
    public virtual Location Location { get; set; }
    
    public virtual IList<QuestObjective> Objectives { get; set; }
    
    public virtual IList<QuestAwardItem> AwardItems { get; set; }
}