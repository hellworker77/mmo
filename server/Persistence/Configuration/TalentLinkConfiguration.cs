using Domain.Entities.Linkers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class TalentLinkConfiguration : IEntityTypeConfiguration<TalentLink>
{
    public void Configure(EntityTypeBuilder<TalentLink> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.Parent)
            .WithMany(x => x.Links)
            .HasForeignKey(x => x.ParentId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
    }
}