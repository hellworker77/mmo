using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class SavedEnemyProgress : BaseEntity
{
    public Guid EnemyId { get; set; }
    
    public uint ActualHealth { get; set; }
    
    public virtual Enemy Enemy { get; set; }
    
    public virtual IList<RelatedCharactersEnemyProgress> RelatedCharacters { get; set; }
}