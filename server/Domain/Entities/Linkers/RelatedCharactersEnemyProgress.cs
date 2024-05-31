using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class RelatedCharactersEnemyProgress : BaseEntity
{
    public Guid CharacterId { get; set; }
    
    public Guid EnemyProgressId { get; set; }
    
    public uint HealDone { get; set; }
    
    public uint DamageDone { get; set; }
    
    public virtual Character Character { get; set; }
    
    public virtual SavedEnemyProgress EnemyProgress { get; set; }
    
}