using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class QuestAwardItem : BaseEntity
{
    public Guid QuestId { get; set; }
    
    public Guid ItemId { get; set; }
    
    public virtual Quest Quest { get; set; }
    
    public virtual Item Item { get; set; }
}