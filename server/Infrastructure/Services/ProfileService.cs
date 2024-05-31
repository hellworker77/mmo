using Application.DTOs.User;
using Application.Interfaces.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Identity;
using Shared;

namespace Infrastructure.Services;

public sealed class ProfileService(UserManager<User> userManager) : IProfileService
{
    public Task<Result<UserDto>> GetByIdAsync(Guid userId)
    {
        throw new NotImplementedException();
    }

    public Task<Result<UserShortDto>> GetChunkAsync(int index, int size)
    {
        throw new NotImplementedException();
    }

    public Task RegisterAsync(RegisterUserDto registerUserDto)
    {
        throw new NotImplementedException();
    }

    public Task ChangePasswordAsync(Guid userId, string oldPassword, string newPassword, bool needVerification)
    {
        throw new NotImplementedException();
    }

    public Task ChangeUsernameAsync(Guid userId, string newUsername, bool needVerification)
    {
        throw new NotImplementedException();
    }

    public Task ChangeEmailAsync(Guid userId, string newEmail, bool needVerification)
    {
        throw new NotImplementedException();
    }

    public Task PromoteAsync(Guid userId)
    {
        throw new NotImplementedException();
    }
}