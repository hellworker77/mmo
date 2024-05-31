using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class CharacterItem : BaseEntity
{
    public Guid ItemId { get; set; }
    
    public Guid CharacterId { get; set; }
    
    public virtual Item Item { get; set; }
    
    public virtual AuctionItem AuctionItem { get; set; }
    
    public virtual Character Character { get; set; }
    
    public virtual IList<ItemSlot> NestedItems { get; set; }
}