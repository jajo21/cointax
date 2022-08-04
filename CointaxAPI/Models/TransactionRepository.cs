using cointaxAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace cointaxAPI.Models
{
    public class TransactionRepository : ITransactionRepository
    {
        private AppDbContext _context;

        public TransactionRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<List<Transaction>> GetTransactions()
        {
            return await _context.Transactions.ToListAsync();
        }
    }
}