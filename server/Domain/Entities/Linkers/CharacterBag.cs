using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class CharacterBag : BaseEntity
{
    public Guid CharacterId { get; set; }
    
    public Guid BagId { get; set; }
    
    public virtual Character Character { get; set; }
    
    public virtual Bag Bag { get; set; }
}