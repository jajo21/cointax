namespace cointaxAPI.Models 
{
    public interface ITransactionRepository
    {
        public Task<List<Transaction>> GetTransactions();
    }
}