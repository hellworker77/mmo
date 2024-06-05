using Application.Interfaces.Repositories;
using Domain.Entities.Abstract;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Persistence.Contexts;

namespace Persistence.Repositories;

public class GenericRepository<T> : IGenericRepository<T> where T : BaseEntity
{
    private readonly ApplicationContext _context;

    public GenericRepository(ApplicationContext context)
    {
        _context = context;
    }

    public async Task<Guid> CreateAsync(T entity)
    {
        _context.Entry(entity).State = EntityState.Added;
        await _context.SaveChangesAsync();
        return entity.Id;
    }

    public IDbContextTransaction BeginTransaction()
    {
        return _context.Database.BeginTransaction();
    }
}