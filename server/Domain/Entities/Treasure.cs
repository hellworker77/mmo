using Domain.Entities.Abstract;
using Domain.Entities.Linkers;
using Domain.Enums;

namespace Domain.Entities;

public class Treasure : BaseEntity
{
    public string Name { get; set; }
    
    public string Description { get; set; }
    
    public TreasureId DataId { get; set; }
    
    public ushort RequiredLevel { get; set; }
    
    public virtual IList<TreasureLocation> Locations { get; set; }
}