using Application.DTOs;

namespace Application.Interfaces.Services;

public interface IMediaService
{
    public Task AddMediaAsync(MediaDto media);
}