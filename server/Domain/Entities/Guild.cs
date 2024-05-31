using Domain.Entities.Abstract;
using Domain.Entities.Linkers;

namespace Domain.Entities;

public class Guild : BaseEntity
{
    public string Name { get; set; }
    
    public virtual IList<CharacterGuild> Members { get; set; }
}