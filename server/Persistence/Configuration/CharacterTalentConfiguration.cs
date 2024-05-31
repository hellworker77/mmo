using Domain.Entities.Linkers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class CharacterTalentConfiguration : IEntityTypeConfiguration<CharacterTalent>
{
    public void Configure(EntityTypeBuilder<CharacterTalent> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.Talent)
            .WithMany(x => x.Characters)
            .HasForeignKey(x => x.TalentId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
        builder.HasOne(x => x.Character)
            .WithMany(x => x.Talents)
            .HasForeignKey(x => x.CharacterId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
    }
}