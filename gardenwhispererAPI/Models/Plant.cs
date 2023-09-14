using System;
using System.Collections.Generic;

namespace gardenwhispererAPI.Models;

public partial class Plant
{
    public int Id { get; set; }

    public int? UserId { get; set; }

    public string ScienificName { get; set; } = null!;

    public string? CommonName { get; set; }

    public string? NickName { get; set; }

    public DateTime? DatePlanted { get; set; }

    public string? Notes { get; set; }

    public string? Sun { get; set; }

    public DateTime? LastWater { get; set; }

    public DateTime? LastFertilization { get; set; }

    public bool? IsHealthy { get; set; }

    public virtual UserInfo? User { get; set; }
}
