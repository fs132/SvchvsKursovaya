using System;
using System.Collections.Generic;

#nullable disable

namespace SVChVS_Course_Project.Models
{
    public partial class Game
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Price { get; set; }
        public int ReleaseYear { get; set; }
        public double AverageMark { get; set; }
    }
}
