using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class BagConfiguration : IEntityTypeConfiguration<Bag>
{
    public void Configure(EntityTypeBuilder<Bag> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasMany(x => x.CharacterBags)
            .WithOne(x => x.Bag)
            .HasForeignKey(x => x.BagId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
    }
}