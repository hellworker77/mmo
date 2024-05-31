using Domain.Entities.Abstract;
using Domain.Enums;

namespace Domain.Entities.Linkers;

public class CharacterGuild : BaseEntity
{
    public GuildRole Role { get; set; }
    
    public Guid GuildId { get; set; }
    
    public Guid CharacterId { get; set; }
    
    public virtual Guild Guild { get; set; }
    
    public virtual Character Character { get; set; }
}