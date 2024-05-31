using Domain.Entities.Linkers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class TreasureLocationConfiguration : IEntityTypeConfiguration<TreasureLocation>
{
    public void Configure(EntityTypeBuilder<TreasureLocation> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.Location)
            .WithMany(x => x.Treasures)
            .HasForeignKey(x => x.LocationId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.HasOne(x => x.Treasure)
            .WithMany(x => x.Locations)
            .HasForeignKey(x => x.TreasureId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
    }
}