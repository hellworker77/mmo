using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Persistence.Configuration;

public class LetterConfiguration : IEntityTypeConfiguration<Letter>
{
    public void Configure(EntityTypeBuilder<Letter> builder)
    {
        builder.HasKey(x => x.Id);
        
    }
}