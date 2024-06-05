using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configurations;

public class LimitedLiabilityCompanyConfiguration : IEntityTypeConfiguration<LimitedLiabilityCompany>
{
    public void Configure(EntityTypeBuilder<LimitedLiabilityCompany> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasMany(x => x.FinancialCredentials)
            .WithOne(x => x.LimitedLiabilityCompany)
            .HasForeignKey(x => x.LimitedLiabilityCompanyId)
            .OnDelete(DeleteBehavior.SetNull);
        
        builder.HasMany(x => x.Medias)
            .WithOne(x => x.LimitedLiabilityCompany)
            .HasForeignKey(x => x.LimitedLiabilityCompanyId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}