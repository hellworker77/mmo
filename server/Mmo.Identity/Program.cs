using Mmo.Identity.IdentityPreset;
using Persistence.Extensions;

var builder = WebApplication.CreateBuilder(args);



builder.Services.AddIdentityCors();

builder.Services.AddPersistenceLayer(builder.Configuration);

builder.Services.AddIdentityConfigurations();

builder.Services.AddIdentityServerContextsConfiguration(builder.Configuration);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDatabaseInitializer();
}

app.UseCorsWithPolicy();

app.UseHttpsRedirection();

app.UseRouting();

app.UseIdentityServer();

app.UseAuthorization();

app.MapControllers();

app.Run();