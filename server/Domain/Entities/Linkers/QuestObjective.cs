using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class QuestObjective : BaseEntity
{
    public Guid? EnemyId { get; set; }
    public Guid? ItemId { get; set; }
    public Guid? QuestId { get; set; }
    
    public uint Value { get; set; }
    
    public virtual Enemy? Enemy { get; set; }
    
    public virtual Item? Item { get; set; }
    
    public virtual Quest Quest { get; set; }
}