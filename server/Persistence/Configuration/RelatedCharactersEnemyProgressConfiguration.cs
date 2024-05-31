using Domain.Entities.Linkers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class RelatedCharactersEnemyProgressConfiguration : IEntityTypeConfiguration<RelatedCharactersEnemyProgress>
{
    public void Configure(EntityTypeBuilder<RelatedCharactersEnemyProgress> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.EnemyProgress)
            .WithMany(x => x.RelatedCharacters)
            .HasForeignKey(x => x.EnemyProgressId)
            .OnDelete(DeleteBehavior.SetNull)
            .IsRequired();
    }
}