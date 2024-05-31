namespace Shared.Constants;

public static class CacheConstants
{
    private const string RestrictedStatusCacheKey = "restrictedStatus";
    public static readonly TimeSpan CacheSlidingExpirationTime = TimeSpan.FromHours(24);
    public static string GetRestrictedUserCacheKey(Guid userId) => $"{RestrictedStatusCacheKey}:{userId}";
}