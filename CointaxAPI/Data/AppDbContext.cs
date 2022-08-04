using cointaxAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace cointaxAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            this.Database.EnsureCreated();
        }

        public DbSet<Coin> Coins { get; set; } = null!;
        public DbSet<Transaction> Transactions { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 1,
                Name = "Bitcoin",
                Symbol = "BTC",
                CurrencyType = "crypto"
            });

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 2,
                Name = "Ethereum",
                Symbol = "ETH",
                CurrencyType = "crypto"
            });

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 3,
                Name = "Tether",
                Symbol = "USDT",
                CurrencyType = "crypto"
            });

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 4,
                Name = "BNB",
                Symbol = "BNB",
                CurrencyType = "crypto"
            });

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 5,
                Name = "USD Coin",
                Symbol = "USDC",
                CurrencyType = "crypto"
            });

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 6,
                Name = "Ripple",
                Symbol = "XRP",
                CurrencyType = "crypto"
            });

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 7,
                Name = "Solana",
                Symbol = "SOL",
                CurrencyType = "crypto"
            });

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 8,
                Name = "Svensk Krona",
                Symbol = "SEK",
                CurrencyType = "fiat"
            });

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 9,
                Name = "US Dollar",
                Symbol = "USD",
                CurrencyType = "fiat"
            });

            modelBuilder.Entity<Coin>().HasData(new Coin
            {
                Id = 10,
                Name = "Euro",
                Symbol = "EUR",
                CurrencyType = "crypto"
            });

            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 1,
                Date = "2022-03-10T12:00",
                SumSold = "400000",
                CNameSold = "SEK",
                SumBought = "1",
                CNameBought = "BTC"
            });

            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 2,
                Date = "2022-03-11T12:00",
                SumSold = "790000",
                CNameSold = "SEK",
                SumBought = "2",
                CNameBought = "BTC"
            });

            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 3,
                Date = "2022-03-12T12:00",
                SumSold = "2",
                CNameSold = "BTC",
                SumBought = "830000",
                CNameBought = "SEK"
            });

            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 4,
                Date = "2022-03-13T12:00",
                SumSold = "390000",
                CNameSold = "SEK",
                SumBought = "1",
                CNameBought = "BTC"
            });

            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 5,
                Date = "2022-03-14T12:00",
                SumSold = "380000",
                CNameSold = "SEK",
                SumBought = "1",
                CNameBought = "BTC"
            });

            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 6,
                Date = "2022-03-15T12:00",
                SumSold = "370000",
                CNameSold = "SEK",
                SumBought = "1",
                CNameBought = "BTC"
            });

            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 7,
                Date = "2022-03-16T12:00",
                SumSold = "2",
                CNameSold = "BTC",
                SumBought = "810000",
                CNameBought = "SEK"
            });

            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 8,
                Date = "2022-03-17T12:00",
                SumSold = "1",
                CNameSold = "BTC",
                SumBought = "400000",
                CNameBought = "SEK"
            });
            
            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 9,
                Date = "2022-03-18T12:00",
                SumSold = "390000",
                CNameSold = "SEK",
                SumBought = "1",
                CNameBought = "BTC"
            });

            modelBuilder.Entity<Transaction>().HasData(new Transaction
            {
                Id = 10,
                Date = "2022-03-19T12:00",
                SumSold = "1",
                CNameSold = "BTC",
                SumBought = "380000",
                CNameBought = "SEK"
            });
        }
    }
}