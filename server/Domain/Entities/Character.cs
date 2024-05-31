using Domain.Entities.Abstract;
using Domain.Entities.Linkers;
using Domain.Enums;

namespace Domain.Entities;

public class Character : BaseEntity
{
    public Guid OwnerId { get; set; }
    
    public string Name { get; set; }
    
    public CharacterClass Class { get; set; }
    
    public ulong Expierence { get; set; }
    
    public ulong Balance { get; set; }
    
    public virtual User Owner { get; set; }
    
    public virtual IList<CharacterBag> CharacterBags { get; set; }
    
    public virtual IList<CharacterGuild> CharacterGuilds { get; set; }
    
    public virtual IList<CharacterItem> CharacterItems { get; set; }
    
    public virtual IList<RelatedCharactersEnemyProgress> EnemyProgresses { get; set; }
    
    public virtual IList<Letter> SentLetters { get; set; }
    
    public virtual IList<Letter> ReceivedLetters { get; set; }
    
    public virtual IList<AuctionItem> AuctionItemsPosted { get; set; }
    
    public virtual IList<AuctionItem> AuctionItemsBidOn  { get; set; }
    
    public virtual IList<CharacterProfession> Professions { get; set; }
    
    public virtual IList<CharacterTalent> Talents { get; set; }
}