using Domain.Entities.Linkers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class CharacterItemConfiguration : IEntityTypeConfiguration<CharacterItem>
{
    public void Configure(EntityTypeBuilder<CharacterItem> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.AuctionItem)
            .WithOne(x => x.Item)
            .HasForeignKey<AuctionItem>(x => x.ItemId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasOne(x => x.Character)
            .WithMany(x => x.CharacterItems)
            .HasForeignKey(x => x.CharacterId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.HasMany(x => x.NestedItems)
            .WithOne(x => x.Item)
            .HasForeignKey(x => x.ItemId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
    }
}