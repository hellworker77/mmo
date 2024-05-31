using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class GuildConfiguration : IEntityTypeConfiguration<Guild>
{
    public void Configure(EntityTypeBuilder<Guild> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasMany(x => x.Members)
            .WithOne(x => x.Guild)
            .HasForeignKey(x => x.GuildId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
    }
}