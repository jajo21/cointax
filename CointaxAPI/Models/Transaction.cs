namespace cointaxAPI.Models
{
    public class Transaction : ITransaction
    {
        public int Id { get; set; }
        public string Date { get; set; } = string.Empty;
        public string SumSold { get; set; } = string.Empty;
        public string CNameSold { get; set; } = string.Empty;
        public string SumBought { get; set; } = string.Empty;
        public string CNameBought { get; set; } = string.Empty;
    }
}