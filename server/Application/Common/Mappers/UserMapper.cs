using Application.DTOs.User;
using Domain.Entities;
using Mapster;

namespace Application.Common.Mappers;

public class UserMapper : IRegister
{
    public void Register(TypeAdapterConfig config)
    {
        config.ForType<User, UserDto>();

        config.ForType<User, UserShortDto>();
    }
}