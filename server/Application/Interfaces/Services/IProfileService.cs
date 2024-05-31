using Application.DTOs.User;
using Shared;

namespace Application.Interfaces.Services;

public interface IProfileService
{
    Task<Result<UserDto>> GetByIdAsync(Guid userId);

    Task<Result<UserShortDto>> GetChunkAsync(int index, int size);

    Task RegisterAsync(RegisterUserDto registerUserDto);

    Task ChangePasswordAsync(Guid userId, string oldPassword, string newPassword, bool needVerification);
    
    Task ChangeUsernameAsync(Guid userId, string newUsername, bool needVerification);
    
    Task ChangeEmailAsync(Guid userId, string newEmail, bool needVerification);
    
    Task PromoteAsync(Guid userId);
}