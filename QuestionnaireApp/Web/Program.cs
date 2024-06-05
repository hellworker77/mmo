using System.Reflection;
using Application.Extensions;
using Application.Options;
using Infrastructure.Extensions;
using Persistence.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder =>
        {
            builder.WithOrigins("http://localhost:3000")
                .AllowAnyHeader()
                .AllowAnyMethod();
        });
});

builder.Services.AddApplicationLayer();
builder.Services.AddPersistenceLayer(builder.Configuration);
builder.Services.AddInfrastructureLayer(builder.Configuration);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddControllers().AddNewtonsoftJson();
builder.Services.Configure<DaDataOptions>(builder.Configuration.GetSection("DaDataOptions"));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    await app.UseDbInitializerAsync();
}

app.UseRouting();

app.UseCors("AllowSpecificOrigin");

app.MapControllers();

app.Run();

