namespace cointaxAPI.Models
{
    interface ITransaction
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public string SumSold { get; set; }
        public string CNameSold { get; set; }
        public string SumBought { get; set; }
        public string CNameBought { get; set; }
    }
}