using Domain.Entities.Abstract;
using Microsoft.EntityFrameworkCore.Storage;

namespace Application.Interfaces.Repositories;

public interface IGenericRepository<T> where T : BaseEntity
{
    Task<Guid> CreateAsync(T entity);
    IDbContextTransaction BeginTransaction();
}