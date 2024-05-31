using Application.Interfaces.Repositories;
using Domain.Entities.Abstract;
using Microsoft.EntityFrameworkCore;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class GenericRepository<T>(ApplicationDbContext context) : IGenericRepository<T> where T : BaseEntity
{
    public IQueryable<T> Entities => context.Set<T>();

    public async Task<T?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
        => await context
            .Set<T>()
            .AsNoTracking()
            .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);

    public async Task<T?> GetWithTrackingByIdAsync(Guid id, CancellationToken cancellationToken)
        => await context
            .Set<T>()
            .FirstOrDefaultAsync(x => x.Id == id, cancellationToken);
    
    public async Task<Guid> CreateAsync(T entity, CancellationToken cancellationToken)
    {
        entity.CreatedDate = DateTime.Now.ToUniversalTime();
        entity.UpdatedDate = DateTime.Now.ToUniversalTime();
        
        context.Entry(entity).State = EntityState.Added;
        await context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }

    public async Task UpdateAsync(T entity, CancellationToken cancellationToken)
    {
        entity.UpdatedDate = DateTime.Now.ToUniversalTime();
        
        context.Entry(entity).State = EntityState.Modified;
        await context.SaveChangesAsync(cancellationToken);
    }

    public async Task DeleteAsync(T entity, CancellationToken cancellationToken)
    {
        context.Entry(entity).State = EntityState.Deleted;
        await context.SaveChangesAsync(cancellationToken);
    }
}