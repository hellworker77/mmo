using Application.Extensions;
using Infrastructure.Extensions;
using Infrastructure.Middlewares;
using Persistence.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddPersistenceLayer(builder.Configuration)
    .AddRedisCache(builder.Configuration)
    .AddIdentities();

builder.Services
    .AddInfrastructureLayer()
    .AddAuthenticationSchema(builder.Configuration);

builder.Services.AddApplicationLayer();

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();

app.UseMiddleware<RestrictedUserMiddleware>();

app.UseAuthorization();

app.MapControllers();

app.Run();

