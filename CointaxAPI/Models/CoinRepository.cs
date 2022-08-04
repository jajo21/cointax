using cointaxAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace cointaxAPI.Models
{
    public class CoinRepository : ICoinRepository
    {
        private AppDbContext _context;

        public CoinRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<List<Coin>> GetCoins()
        {
            return await _context.Coins.ToListAsync();
        }

        public async Task<Coin> GetCoin(int id)
        {
            var coin = await _context.Coins.FindAsync(id);
            if(coin == null) throw new Exception("Coin not found");
            return coin;
        }

        public async Task<List<Coin>> AddCoin(Coin coin)
        {
            _context.Coins.Add(coin);
            await _context.SaveChangesAsync();
            return await _context.Coins.ToListAsync();
        }

        public async Task<List<Coin>> DeleteCoin(int id)
        {
            var coin = await _context.Coins.FindAsync(id);
            if(coin == null) throw new Exception("Coin not found");
            _context.Coins.Remove(coin);
            await _context.SaveChangesAsync();
            return await _context.Coins.ToListAsync();
        }

        public async Task<List<Coin>> UpdateCoin(Coin request)
        {
            var coin = await _context.Coins.FindAsync(request.Id);
            if(coin == null) throw new Exception("Coin not found");

            coin.Name = request.Name;
            coin.Symbol = request.Symbol;
            coin.CurrencyType = request.CurrencyType;

            await _context.SaveChangesAsync();
            return await _context.Coins.ToListAsync();
        }
    }
}