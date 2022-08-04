

using cointaxAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace cointaxAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly ITransactionRepository _coinRepository;

        public TransactionController(ITransactionRepository coinRepository) 
        {
            _coinRepository = coinRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Transaction>>> GetTransactions()
        {
            return Ok(await _coinRepository.GetTransactions());
        }
    }
}