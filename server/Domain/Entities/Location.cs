using Domain.Entities.Abstract;
using Domain.Entities.Linkers;
using Domain.Enums;

namespace Domain.Entities;

public class Location : BaseEntity
{
    public LocationId DataId { get; set; } 
    
    public ushort Index { get; set; }
    
    public virtual IList<Quest> Quests { get; set; }
    
    public virtual IList<TreasureLocation> Treasures { get; set; }
}