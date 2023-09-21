using gardenwhispererAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace gardenwhispererAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserInfoController : ControllerBase
  {
    private readonly GardenwhispererDbContext _dbContext;

    public UserInfoController(GardenwhispererDbContext dbContext)
    {
      _dbContext = dbContext;
    }

    [HttpGet]
    public ActionResult<IEnumerable<UserInfo>> GetUsers()
    {
      return _dbContext.UserInfos.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<UserInfo> GetUserInfo(int id)
    {
      var user = _dbContext.UserInfos.Find(id);
      if (user == null) { return NotFound(); }
      return user;
    }

    [HttpPost]
    public IActionResult CreateUser([FromBody]UserInfo newUser)
    {
      _dbContext.UserInfos.Add(newUser);
      _dbContext.SaveChanges();

      return CreatedAtAction(nameof(CreateUser), new {id = newUser.Id, newUser});
    }

    [HttpPut("{id}")]
    public IActionResult UpdateUser(int id, [FromBody]UserInfo updatedUser)
    {
      var existingUser = _dbContext.UserInfos.Find(id);
      if (existingUser == null) { return NotFound(); }

      existingUser.Name = updatedUser.Name;
      existingUser.UserName = updatedUser.UserName;
      existingUser.Password = updatedUser.Password;
      existingUser.City = updatedUser.City;

      _dbContext.Entry(existingUser).State = EntityState.Modified;

      _dbContext.SaveChanges();

      return Ok(existingUser);
    }

    [HttpDelete("{id}")]

    public IActionResult DeleteUser(int id)
    {
      var user = _dbContext.UserInfos.Find(id);
      if (user == null) { return NotFound(); };

      DeleteUserPlants(id);

      _dbContext.UserInfos.Remove(user);
      _dbContext.SaveChanges();

      return NoContent();
    }

    private void DeleteUserPlants(int userId)
    {
      var userPlants = _dbContext.Plants.Where(plant => plant.UserId == userId).ToList();
      foreach (var plant in userPlants)
      {
        _dbContext.Plants.Remove(plant);
      }
    }
  }
}
