using cointaxAPI.Data;
using cointaxAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace cointaxAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoinController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly ICoinRepository _coinRepository;

        public CoinController(AppDbContext context, ICoinRepository coinRepository) 
        {
            _context = context;
            _coinRepository = coinRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Coin>>> GetCoins()
        {
            return Ok(await _coinRepository.GetCoins());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Coin>> GetCoin(int id)
        {
            try
            {
                var coin = await _coinRepository.GetCoin(id);
                return Ok(coin);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status400BadRequest, ex.Message);
            }
        }
        
        [HttpPost]
        public async Task<ActionResult<List<Coin>>> AddCoin(Coin coin)
        {
            var coins = await _coinRepository.AddCoin(coin);
            return Ok(coins);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Coin>>> DeleteCoin(int id)
        {
            try
            {
                return Ok(await _coinRepository.DeleteCoin(id));
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status400BadRequest, ex.Message);
            }
        }

        [HttpPut]
        public async Task<ActionResult<List<Coin>>> UpdateCoin(Coin request)
        {
            try
            {
                var coins = await _coinRepository.UpdateCoin(request);
                return Ok(coins);
            }
            catch (Exception ex)
            {
                return this.StatusCode(StatusCodes.Status400BadRequest, ex.Message);
            }
        }
    }
}