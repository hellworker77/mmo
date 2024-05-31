using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class ItemConfiguration : IEntityTypeConfiguration<Item>
{
    public void Configure(EntityTypeBuilder<Item> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasMany(x => x.OwnedItems)
            .WithOne(x => x.Item)
            .HasForeignKey(x => x.ItemId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasMany(x => x.Objectives)
            .WithOne(x => x.Item)
            .HasForeignKey(x => x.ItemId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasMany(x => x.AwardItems)
            .WithOne(x => x.Item)
            .HasForeignKey(x => x.ItemId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}