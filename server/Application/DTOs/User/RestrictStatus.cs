namespace Application.DTOs.User;

public sealed class RestrictStatus
{
    public bool IsRestricted { get; set; }
    public TimeSpan? RemainingTime { get; set; }
}