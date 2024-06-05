using Application.DTOs;
using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain.Entities;
using MapsterMapper;

namespace Infrastructure.Services;

public class MediaService : IMediaService
{
    private readonly IMapper _mapper;
    private readonly IGenericRepository<Media> _repository;

    public MediaService(IMapper mapper,
        IGenericRepository<Media> repository)
    {
        _mapper = mapper;
        _repository = repository;
    }

    public async Task AddMediaAsync(MediaDto media)
    {
        using MemoryStream memoryStream = new MemoryStream();
        await media.File.CopyToAsync(memoryStream);

        var bytes = memoryStream.ToArray();
        string base64 = Convert.ToBase64String(bytes);

        var entity = _mapper.Map<Media>(media);

        entity.FileBase64 = base64;
        entity.FileName = media.File.FileName;

        await _repository.CreateAsync(entity);
    }
}