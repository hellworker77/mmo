using Domain.Entities.Abstract;
using Domain.Enums;

namespace Domain.Entities.Linkers;

public class CharacterProfession : BaseEntity
{
    public Guid CharacterId { get; set; }
    
    public ushort Level { get; set; }
    
    public ProfessionId ProfessionId { get; set; }
    
    public virtual Character Character { get; set; }
}