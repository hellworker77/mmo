using Domain.Entities.Abstract;
using Domain.Entities.Linkers;

namespace Domain.Entities;

public class Bag : BaseItem
{
    public byte SlotsCount { get; set; }
    public virtual IList<CharacterBag> CharacterBags { get; set; }
}