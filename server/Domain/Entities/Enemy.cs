using Domain.Entities.Abstract;
using Domain.Entities.Linkers;

namespace Domain.Entities;

public class Enemy : BaseEntity
{
    public ushort MinPhysicalDamage { get; set; }

    public ushort MaxPhysicalDamage { get; set; }

    public ushort MinPhysicalFireDamage { get; set; }

    public ushort MaxPhysicalFireDamage { get; set; }

    public ushort MinPhysicalColdDamage { get; set; }

    public ushort MaxPhysicalColdDamage { get; set; }

    public ushort MinPhysicalLightningDamage { get; set; }

    public ushort MaxPhysicalLightningDamage { get; set; }

    public ushort MinPhysicalPoisonDamage { get; set; }

    public ushort MaxPhysicalPoisonDamage { get; set; }

    public ushort MinPhysicalLightDamage { get; set; }

    public ushort MaxPhysicalLightDamage { get; set; }

    public ushort MinPhysicalArcaneDamage { get; set; }

    public ushort MaxPhysicalArcaneDamage { get; set; }

    public ushort MinPhysicalNatureDamage { get; set; }

    public ushort MaxPhysicalNatureDamage { get; set; }

    public ushort MinPhysicalChaosDamage { get; set; }

    public ushort MaxPhysicalChaosDamage { get; set; }

    public ushort MinMagicalFireDamage { get; set; }

    public ushort MaxMagicalFireDamage { get; set; }

    public ushort MinMagicalColdDamage { get; set; }

    public ushort MaxMagicalColdDamage { get; set; }
    
    public ushort MinMagicalLightningDamage { get; set; }
    
    public ushort MaxMagicalLightningDamage { get; set; }
    
    public ushort MinMagicalPoisonDamage { get; set; }
    
    public ushort MaxMagicalPoisonDamage { get; set; }
    
    public ushort MinMagicalLightDamage { get; set; }
    
    public ushort MaxMagicalLightDamage { get; set; }
    
    public ushort MinMagicalArcaneDamage { get; set; }
    
    public ushort MaxMagicalArcaneDamage { get; set; }
    
    public ushort MinMagicalNatureDamage { get; set; }
    
    public ushort MaxMagicalNatureDamage { get; set; }
    
    public ushort MinMagicalChaosDamage { get; set; }
    
    public ushort MaxMagicalChaosDamage { get; set; }
    
    public uint FireResistPenetration { get; set; }
    
    public uint ColdResistPenetration { get; set; }
    
    public uint LightningResistPenetration { get; set; }
    
    public uint PoisonResistPenetration { get; set; }
    
    public uint LightResistPenetration { get; set; }
    
    public uint ArcaneResistPenetration { get; set; }
    
    public uint NatureResistPenetration { get; set; }
    
    public uint ChaosResistPenetration { get; set; }
    
    public ushort CriticalStrikeRating { get; set; }
    
    public uint Defense { get; set; }
    
    public uint Health { get; set; }
    
    public ushort DodgeRating { get; set; }
    
    public ushort EvadeRating { get; set; }
    
    public ushort ParryRating { get; set; }
    
    public ushort BlockRating { get; set; }
    
    public ushort FireResist { get; set; }
    
    public ushort ColdResist { get; set; }
    
    public ushort LightningResist { get; set; }
    
    public ushort PoisonResist { get; set; }
    
    public ushort LightResist { get; set; }
    
    public ushort ArcaneResist { get; set; }
    
    public ushort NatureResist { get; set; }
    
    public ushort ChaosResist { get; set; }

    public virtual IList<EnemySkill> Skills { get; set; }
    
    public virtual IList<SavedEnemyProgress> SavedEnemyProgresses { get; set; }

    public virtual IList<QuestObjective> Objectives { get; set; }
}