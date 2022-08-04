namespace cointaxAPI.Models
{
    interface ICoin
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Symbol { get; set; }
        public string CurrencyType { get; set; }
    }
}