using Domain.Entities.Linkers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class SkillLevelConfiguration : IEntityTypeConfiguration<SkillLevel>
{
    public void Configure(EntityTypeBuilder<SkillLevel> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.Skill)
            .WithMany(x => x.Levels)
            .HasForeignKey(x => x.SkillId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.HasMany(x => x.Effects)
            .WithOne(x => x.Skill)
            .HasForeignKey(x => x.SkillId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasMany(x => x.EnemySkills)
            .WithOne(x => x.Skill)
            .HasForeignKey(x => x.SkillId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
    }
}