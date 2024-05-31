using System.Reflection;
using Domain.Entities;
using Domain.Entities.Linkers;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence.Contexts;

public class ApplicationDbContext : IdentityDbContext<User,
    IdentityRole<Guid>,
    Guid,
    IdentityUserClaim<Guid>,
    IdentityUserRole<Guid>,
    IdentityUserLogin<Guid>,
    IdentityRoleClaim<Guid>,
    IdentityUserToken<Guid>>
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {
    }

    public DbSet<Bag> Bags => Set<Bag>();
    
    public DbSet<Character> Characters => Set<Character>();
    
    public DbSet<Enemy> Enemies => Set<Enemy>();
    
    public DbSet<Guild> Guilds => Set<Guild>();
    
    public DbSet<Item> Items => Set<Item>();
    
    public DbSet<Letter> Letters => Set<Letter>();
    
    public DbSet<Location> Locations => Set<Location>();
    
    public DbSet<Quest> Quests => Set<Quest>();
    
    public DbSet<Skill> Skills => Set<Skill>();
    
    public DbSet<Talent> Talents => Set<Talent>();
    
    public DbSet<Treasure> Treasures => Set<Treasure>();
    
    public DbSet<AuctionItem> AuctionItems => Set<AuctionItem>();
    
    public DbSet<CharacterBag> CharacterBags => Set<CharacterBag>();
    
    public DbSet<CharacterGuild> CharacterGuilds => Set<CharacterGuild>();
    
    public DbSet<CharacterItem> CharacterItems => Set<CharacterItem>();
    
    public DbSet<CharacterProfession> CharacterProfessions => Set<CharacterProfession>();
    
    public DbSet<EnemySkill> EnemySkills => Set<EnemySkill>();
    
    public DbSet<ItemSlot> ItemSlots => Set<ItemSlot>();
    
    public DbSet<QuestAwardItem> QuestAwardItems => Set<QuestAwardItem>();
    
    public DbSet<QuestObjective> QuestObjectives => Set<QuestObjective>();
    
    public DbSet<RelatedCharactersEnemyProgress> RelatedCharactersEnemyProgresses =>
        Set<RelatedCharactersEnemyProgress>();
    
    public DbSet<SavedEnemyProgress> SavedEnemyProgresses => Set<SavedEnemyProgress>();
    
    public DbSet<SkillEffect> SkillEffects => Set<SkillEffect>();
    
    public DbSet<SkillLevel> SkillLevels => Set<SkillLevel>();
    
    public DbSet<TalentLink> TalentLinks => Set<TalentLink>();
    
    public DbSet<TalentNode> TalentNodes => Set<TalentNode>();
    
    public DbSet<TreasureLocation> TreasureLocations => Set<TreasureLocation>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);
        builder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
    }
}