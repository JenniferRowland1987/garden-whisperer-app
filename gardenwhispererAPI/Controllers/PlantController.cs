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

    //if there are issues with adding plants... revisit this api call... I'm kind of on the fence about it working or not

    [HttpPost("addplant")]
    public IActionResult AddPlant([FromBody] Plant plantDetails)
    {
      
      var newPlant = new Plant
      {
        UserId = plantDetails.UserId,
        ScienificName = plantDetails.ScienificName,
        CommonName = plantDetails.CommonName,
        NickName = plantDetails.NickName,
        DatePlanted = plantDetails.DatePlanted,
        Notes = plantDetails.Notes,
        Sun = plantDetails.Sun,
        LastWater = plantDetails.LastWater,
        LastFertilization = plantDetails.LastFertilization,
        IsHealthy = plantDetails.IsHealthy,
        PerenualId = plantDetails.PerenualId,
      };

      _dbContext.Plants.Add(newPlant);
      _dbContext.SaveChanges();

      return Ok(newPlant);
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

    [HttpPut("{plantId}")]
    public IActionResult UpdatePlant(int plantId, [FromBody] Plant updatedPlant)
    {
      try
      {
        var existingPlant = _dbContext.Plants.Find(plantId);

        if (existingPlant == null)
        {
          return NotFound();
        }

       
        existingPlant.ScienificName = updatedPlant.ScienificName;
        existingPlant.CommonName = updatedPlant.CommonName;
        existingPlant.NickName = updatedPlant.NickName;
        existingPlant.DatePlanted = updatedPlant.DatePlanted;
        existingPlant.Notes = updatedPlant.Notes;
        existingPlant.Sun = updatedPlant.Sun;
        existingPlant.LastWater = updatedPlant.LastWater;
        existingPlant.LastFertilization = updatedPlant.LastFertilization;
        existingPlant.IsHealthy = updatedPlant.IsHealthy;
        existingPlant.PerenualId = updatedPlant.PerenualId;

        
        _dbContext.SaveChanges();

        return Ok(existingPlant);
      }
      catch (Exception ex)
      {
        return StatusCode(500, "Internal server error");
      }
    }

  }
}
