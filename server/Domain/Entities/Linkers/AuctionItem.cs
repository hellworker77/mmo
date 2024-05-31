using Domain.Entities.Abstract;

namespace Domain.Entities.Linkers;

public class AuctionItem : BaseEntity
{
    public Guid ItemId { get; set; }
    
    public Guid SellerId { get; set; }
    
    public Guid? BidderId { get; set; }
    
    public uint Price { get; set; }
    
    public byte Duration { get; set; }
    
    public uint MinBid { get; set; }
    
    public uint? ActualBid { get; set; }
    
    public virtual CharacterItem Item { get; set; }
    
    public virtual Character Seller { get; set; }
    
    public virtual Character? Bidder { get; set; }
}