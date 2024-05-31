using Domain.Enums;

namespace Domain.Entities.Abstract;

public class BaseItem : BaseEntity
{
    public string Name { get; set; }
    public string Description { get; set; }
    public ItemRarity Rarity { get; set; }
    public ItemType Type { get; set; }
    public UInt16 ItemLevel { get; set; }
    public byte RequiredLevel { get; set; }
    public ItemDataId DataId { get; set; }
}