using System.Reflection;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts;

public class ApplicationContext : DbContext
{
    public ApplicationContext(DbContextOptions<ApplicationContext>  options) : base(options)
    {
    }

    public DbSet<FinancialCredential> FinancialCredentials => Set<FinancialCredential>();
    public DbSet<IndividualEntrepreneur> IndividualEntrepreneurs => Set<IndividualEntrepreneur>();
    public DbSet<LimitedLiabilityCompany> LimitedLiabilityCompanies => Set<LimitedLiabilityCompany>();
    public DbSet<Media> Medias => Set<Media>();
    
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}