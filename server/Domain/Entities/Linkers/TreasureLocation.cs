using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class TreasureLocation : BaseEntity
{
    public Guid TreasureId { get; set; }
   
    public Guid LocationId { get; set; } 
    
    public virtual Treasure Treasure { get; set; }
    
    public virtual Location Location { get; set; }
}