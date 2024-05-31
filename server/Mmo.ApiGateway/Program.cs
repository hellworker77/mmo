using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using Persistence.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("ocelot.json", optional: false, reloadOnChange: true);
builder.Services.AddOcelot();

builder.Services
    .AddPersistenceLayer(builder.Configuration)
    .AddDbInitializer();

builder.Services.AddControllers();

builder.Services.AddSignalR();

builder.Services.AddEndpointsApiExplorer();


var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    await app.UseDbInitializerAsync();
}


app.UseHttpsRedirection();

app.UseAuthentication();

app.UseAuthorization();

app.UseOcelot().Wait();

app.MapControllers();

await app.RunAsync();