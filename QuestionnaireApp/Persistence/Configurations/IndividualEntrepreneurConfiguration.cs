using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configurations;

public class IndividualEntrepreneurConfiguration : IEntityTypeConfiguration<IndividualEntrepreneur>
{
    public void Configure(EntityTypeBuilder<IndividualEntrepreneur> builder)
    {
        builder.HasKey(x => x.Id);

        builder.HasMany(x => x.FinancialCredentials)
            .WithOne(x => x.IndividualEntrepreneur)
            .HasForeignKey(x => x.IndividualEntrepreneurId)
            .OnDelete(DeleteBehavior.SetNull);
        
        builder.HasMany(x => x.Medias)
            .WithOne(x => x.IndividualEntrepreneur)
            .HasForeignKey(x => x.IndividualEntrepreneurId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}