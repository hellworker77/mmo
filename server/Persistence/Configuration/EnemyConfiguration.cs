using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class EnemyConfiguration : IEntityTypeConfiguration<Enemy>
{
    public void Configure(EntityTypeBuilder<Enemy> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasMany(x => x.Skills)
            .WithOne(x => x.Enemy)
            .HasForeignKey(x => x.EnemyId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasMany(x => x.SavedEnemyProgresses)
            .WithOne(x => x.Enemy)
            .HasForeignKey(x => x.EnemyId)
            .OnDelete(DeleteBehavior.SetNull)
            .IsRequired();
        
        builder.HasMany(x => x.Objectives)
            .WithOne(x => x.Enemy)
            .HasForeignKey(x => x.EnemyId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}