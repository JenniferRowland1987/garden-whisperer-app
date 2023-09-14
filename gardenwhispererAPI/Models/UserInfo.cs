﻿using System;
using System.Collections.Generic;

namespace gardenwhispererAPI.Models;

public partial class UserInfo
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? UserName { get; set; }

    public string? Password { get; set; }

    public virtual ICollection<Plant> Plants { get; set; } = new List<Plant>();
}
