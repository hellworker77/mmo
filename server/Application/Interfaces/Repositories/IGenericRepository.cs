using Domain.Entities.Abstract;

namespace Application.Interfaces.Repositories;

public interface IGenericRepository<T> where T : BaseEntity
{
    IQueryable<T> Entities { get; }
    
    Task<T?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
    
    Task<T?> GetWithTrackingByIdAsync(Guid id, CancellationToken cancellationToken);

    Task<Guid> CreateAsync(T entity, CancellationToken cancellationToken);
    
    Task UpdateAsync(T entity, CancellationToken cancellationToken);
    
    Task DeleteAsync(T entity, CancellationToken cancellationToken);
}