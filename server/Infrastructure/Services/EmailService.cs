using Application.Interfaces.Services;

namespace Infrastructure.Services;

public sealed class EmailService : IEmailService
{
    public Task SendAsync(string receiver, string subject, string message)
    {
        throw new NotImplementedException();
    }
}