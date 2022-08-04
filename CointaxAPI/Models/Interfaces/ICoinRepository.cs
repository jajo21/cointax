namespace cointaxAPI.Models 
{
    public interface ICoinRepository
    {
        public Task<List<Coin>> GetCoins();
        public Task<Coin> GetCoin(int id);
        public Task<List<Coin>>  AddCoin(Coin coin);
        public Task<List<Coin>>  DeleteCoin(int id);
        public Task<List<Coin>>  UpdateCoin(Coin request);
    }
}