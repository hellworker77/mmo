using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class CharacterConfiguration : IEntityTypeConfiguration<Character>
{
    public void Configure(EntityTypeBuilder<Character> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.Owner)
            .WithMany(x => x.Characters)
            .HasForeignKey(x => x.OwnerId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasMany(x => x.CharacterGuilds)
            .WithOne(x => x.Character)
            .HasForeignKey(x => x.CharacterId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasMany(x => x.CharacterBags)
            .WithOne(x => x.Character)
            .HasForeignKey(x => x.CharacterId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.HasMany(x => x.EnemyProgresses)
            .WithOne(x => x.Character)
            .HasForeignKey(x => x.CharacterId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasMany(x => x.SentLetters)
            .WithOne(x => x.Sender)
            .HasForeignKey(x => x.SenderId)
            .OnDelete(DeleteBehavior.SetNull)
            .IsRequired();
        
        builder.HasMany(x => x.ReceivedLetters)
            .WithOne(x => x.Receiver)
            .HasForeignKey(x => x.ReceiverId)
            .OnDelete(DeleteBehavior.SetNull)
            .IsRequired();
        
        builder.HasMany(x => x.AuctionItemsPosted)
            .WithOne(x => x.Seller)
            .HasForeignKey(x => x.SellerId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasMany(x => x.AuctionItemsBidOn)
            .WithOne(x => x.Bidder)
            .HasForeignKey(x => x.BidderId)
            .OnDelete(DeleteBehavior.SetNull)
            .IsRequired();
        
        builder.HasMany(x => x.Professions)
            .WithOne(x => x.Character)
            .HasForeignKey(x => x.CharacterId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
    }
}