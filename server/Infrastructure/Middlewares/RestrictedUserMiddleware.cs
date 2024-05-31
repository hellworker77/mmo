using System.Text.Json;
using Application.Interfaces.Services;
using Microsoft.AspNetCore.Http;

namespace Infrastructure.Middlewares;

public class RestrictedUserMiddleware(RequestDelegate next)
{
    public async Task InvokeAsync(HttpContext context, IIdentityService identityService)
    {
        var restrictedStatus = await identityService.IsRestrictedAsync(context);

        if (restrictedStatus.Data is {IsRestricted: true})
        {
            context.Response.StatusCode = StatusCodes.Status406NotAcceptable;
            await context.Response.WriteAsync(JsonSerializer.Serialize(restrictedStatus.Data));
            return;
        }

        await next(context);
    }
}