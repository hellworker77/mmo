using Microsoft.AspNetCore.Identity;

namespace Domain.Entities;

public class User : IdentityUser<Guid>
{
    public DateTime? RestrictedEndTime { get; set; }
    public virtual IList<Character> Characters { get; set; }
}