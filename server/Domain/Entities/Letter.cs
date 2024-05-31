using Domain.Entities.Abstract;

namespace Domain.Entities;

public class Letter : BaseEntity
{
    public Guid SenderId { get; set; }
    
    public Guid ReceiverId { get; set; }
    
    public string Subject { get; set; }
    
    public uint Amount { get; set; }
    
    public virtual Character Sender { get; set; }
    
    public virtual Character Receiver { get; set; }
}