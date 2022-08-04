namespace cointaxAPI.Models
{
    public class Coin : ICoin
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Symbol { get; set; } = string.Empty;
        public string CurrencyType { get; set; } = string.Empty;
    }
}