using Application.DTOs.User;
using Application.Interfaces.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Shared;
using Shared.Constants;
using ZiggyCreatures.Caching.Fusion;

namespace Infrastructure.Services;

public sealed class IdentityService(IHttpContextAccessor accessor,
    UserManager<User> userManager,
    IFusionCache cache) : IIdentityService
{
    public Result<Guid> GetIdentity()
    {
        var userIdentity = accessor.HttpContext?.User.FindFirst("sub")?.Value;

        if (userIdentity == null)
        {
            return Result<Guid>.Failure();
        }

        return Result<Guid>.Success(Guid.Parse(userIdentity));
    }
    public async Task<Result<RestrictStatus>> IsRestrictedAsync(HttpContext httpContext)
    {
        
        var restrictStatus = new RestrictStatus();

        var claims = httpContext.User.Claims.Select(x => x);
        
        var userId = httpContext.User.FindFirst("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier")?.Value;
        
        if (httpContext.User.Identity is {IsAuthenticated: true} && userId != null)
        {
            var cacheKey = CacheConstants.GetRestrictedUserCacheKey(Guid.Parse(userId));
            restrictStatus = await cache.GetOrSetAsync<RestrictStatus>(
                cacheKey,
                async (ctx, token) =>
                {
                    ctx.Options.Duration = CacheConstants.CacheSlidingExpirationTime;
                    
                    var user = await userManager.GetUserAsync(httpContext.User);

                    if (user is {RestrictedEndTime: not null} && user.RestrictedEndTime.Value > DateTime.UtcNow)
                    {
                        return new RestrictStatus
                        {
                            IsRestricted = true,
                            RemainingTime = user.RestrictedEndTime.Value - DateTime.UtcNow
                        };
                    }

                    return new RestrictStatus
                    {
                        IsRestricted = false
                    };
                });
        }
       
        return Result<RestrictStatus>.Success(restrictStatus);
    }
}