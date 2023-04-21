using SVChVS_Course_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SVChVS_Course_Project.Services
{
    public interface IGameService : IServiceBase<Game>
    {
        Task<IList<Game>> GetByNameAsync(string name);
        Task<IList<Game>> GetByDescriptionAsync(string description);
        Task<IList<Game>> GetByLowerPriceAsync(int price);
        Task<IList<Game>> GetByHigherReleaseYearAsync(int year);
        Task<IList<Game>> GetByHigherMarkAsync(double mark);
        Task<IList<Game>> SortByPrice();
        Task<IList<Game>> SortByReleaseYear();
        Task<IList<Game>> SortByMark();

    }
}
