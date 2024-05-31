using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class ItemSlot : BaseEntity
{
    public Guid ItemId { get; set; }
    
    public virtual CharacterItem Item { get; set; }
}