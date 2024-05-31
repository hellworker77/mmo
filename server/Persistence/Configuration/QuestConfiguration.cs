using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class QuestConfiguration : IEntityTypeConfiguration<Quest>
{
    public void Configure(EntityTypeBuilder<Quest> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasMany(x => x.Objectives)
            .WithOne(x => x.Quest)
            .HasForeignKey(x => x.QuestId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasMany(x => x.AwardItems)
            .WithOne(x => x.Quest)
            .HasForeignKey(x => x.QuestId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
    }
}