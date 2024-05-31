using Domain.Entities.Linkers;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class TalentNodeConfiguration : IEntityTypeConfiguration<TalentNode>
{
    public void Configure(EntityTypeBuilder<TalentNode> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasOne(x => x.Talent)
            .WithMany(x => x.Nodes)
            .HasForeignKey(x => x.TalentId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.HasOne(x => x.Link)
            .WithMany(x => x.Nodes)
            .HasForeignKey(x => x.LinkId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
        
    }
}