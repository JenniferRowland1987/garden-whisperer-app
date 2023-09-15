using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using gardenwhispererAPI.Models;

namespace gardenwhispererAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PlantController : ControllerBase
  {
    private readonly GardenwhispererDbContext _dbContext;

    public PlantController(GardenwhispererDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    [HttpGet]
    public ActionResult<IEnumerable<Plant>> GetAllUsersPlants()
    {
      return
        _dbContext.Plants.ToList();
    }

    [HttpGet("getgarden/{userId}")]
    public ActionResult<IEnumerable<Plant>> GetGarden(int userId)
    {
      
      var garden = _dbContext.Plants.Where(p => p.UserId == userId).ToList();

      return (garden);
    }

    [HttpGet("getplant/{plantId}")]
    public ActionResult<Plant> GetPlant(int plantId)
    {
      var plant = _dbContext.Plants.Find(plantId);
      if (plant == null) { return NotFound(); }
      return plant;
    }

    [HttpPost("addplant/{userId}")]
    public IActionResult AddPlant(int userId, [FromBody] Plant plantDetails)
    {
      var user = _dbContext.UserInfos.Find(userId);

      if (user == null) { return NotFound(); }

      var newPlant = new Plant
      {
        UserId = userId,
        ScienificName = plantDetails.ScienificName,
        CommonName = plantDetails.CommonName,
        NickName = plantDetails.NickName,
        DatePlanted = plantDetails.DatePlanted,
        Notes = plantDetails.Notes,
      };

      _dbContext.Plants.Add(newPlant);
      _dbContext.SaveChanges();

      return CreatedAtAction(nameof(GetPlant), new { id = newPlant.Id }, newPlant);
    }

    [HttpDelete("{plantId}")]
    public IActionResult DeletePlant(int plantId)
    {
      var plant = _dbContext.Plants.Find(plantId);

      if (plant == null) { return NotFound();}
      _dbContext.Plants.Remove(plant);
      _dbContext.SaveChanges();
      return NoContent();
    }

  }
}
