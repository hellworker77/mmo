using Application.DTOs.User;
using Microsoft.AspNetCore.Http;
using Shared;

namespace Application.Interfaces.Services;

public interface IIdentityService
{
    Result<Guid> GetIdentity();

    Task<Result<RestrictStatus>> IsRestrictedAsync(HttpContext httpContext);
}