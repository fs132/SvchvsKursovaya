using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SVChVS_Course_Project.Models;
using SVChVS_Course_Project.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SVChVS_Course_Project.Controllers
{
    [ApiController]
    public class GameController : ControllerBase
    {
        private readonly IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpGet]
        [Route("[controller]")]
        public async Task<IActionResult> GetAll()
        {
            try
            {
                var games = await _gameService.GetAll();

                return Ok(games);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-by-mark")]
        public async Task<IActionResult> GetByMark()
        {
            try
            {
                var games = await _gameService.SortByMark();

                return Ok(games);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-by-price")]
        public async Task<IActionResult> GetByPrice()
        {
            try
            {
                var games = await _gameService.SortByPrice();

                return Ok(games);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-by-year")]
        public async Task<IActionResult> GetByYear()
        {
            try
            {
                var games = await _gameService.SortByReleaseYear();

                return Ok(games);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-by-id")]
        public async Task<IActionResult> GetByID(string id)
        {
            try
            {
                var games = await _gameService.Get(id);

                return Ok(games);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPost]
        [Route("[controller]/create")]
        [ProducesResponseType(typeof(Game), StatusCodes.Status200OK)]
        public async Task<IActionResult> Create([FromBody] Game gameForCreate)
        {
            try
            {
                if (gameForCreate is null || !ModelState.IsValid)
                {
                    return BadRequest("Модель не подходит");
                }

                var result = await _gameService.Create(gameForCreate);

                return Ok(gameForCreate);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPost]
        [Route("[controller]/get-by-name")]
        [ProducesResponseType(typeof(List<Game>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetByName([FromBody] string name)
        {
            try
            {
                var result = await _gameService.GetByNameAsync(name);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPost]
        [Route("[controller]/get-by-description")]
        [ProducesResponseType(typeof(List<Game>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetByDescription([FromBody] string name)
        {
            try
            {
                var result = await _gameService.GetByDescriptionAsync(name);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPost]
        [Route("[controller]/get-by-lower-price")]
        [ProducesResponseType(typeof(List<Game>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetByLowerPrice([FromBody] int name)
        {
            try
            {
                var result = await _gameService.GetByLowerPriceAsync(name);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPost]
        [Route("[controller]/get-by-higher-release-year")]
        [ProducesResponseType(typeof(List<Game>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetByHigherReleaseYear([FromBody] int name)
        {
            try
            {
                var result = await _gameService.GetByHigherReleaseYearAsync(name);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPost]
        [Route("[controller]/get-by-higher-mark")]
        [ProducesResponseType(typeof(List<Game>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetByHigherMark([FromBody] int name)
        {
            try
            {
                var result = await _gameService.GetByHigherMarkAsync(name);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }


        [HttpPut]
        [Route("[controller]/update")]
        [ProducesResponseType(typeof(Game), StatusCodes.Status200OK)]
        public async Task<IActionResult> Update([FromBody] Game gameForUpdate)
        {
            try
            {
                if (gameForUpdate is null || !ModelState.IsValid)
                {
                    return BadRequest("Модель не подходит");
                }

                var result = await _gameService.Update(gameForUpdate);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpDelete]
        [Route("[controller]/delete")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        public async Task<IActionResult> Delete([FromBody] string RFID)
        {
            try
            {
                await _gameService.Remove(RFID);

                return Ok(RFID);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }
    }
}
