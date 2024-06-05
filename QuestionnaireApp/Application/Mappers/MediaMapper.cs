using Application.DTOs;
using Domain.Entities;
using Mapster;

namespace Application.Mappers;

public class MediaMapper : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.ForType<Media, MediaDto>();
    }
}