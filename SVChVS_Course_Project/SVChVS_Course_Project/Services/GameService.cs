using Microsoft.EntityFrameworkCore;
using SVChVS_Course_Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SVChVS_Course_Project.Services
{
    public class GameService : IGameService
    {
        private readonly GamesContext gamesContext;

        public GameService(GamesContext gamesContext)
        {
            this.gamesContext = gamesContext;
        }

        public async Task<Game> Create(Game entity)
        {
            entity.Id = Guid.NewGuid().ToString();

            await gamesContext.AddAsync(entity);

            await gamesContext.SaveChangesAsync();

            return entity;
        }

        public async Task<Game> Get(string id)
        {
            return await gamesContext.Games.FirstOrDefaultAsync(_ => _.Id == id);
        }

        public async Task<IList<Game>> GetAll()
        {
            return await gamesContext.Games
                .OrderBy(_ => _.Name)
                .ToListAsync();
        }

        public async Task<IList<Game>> GetByDescriptionAsync(string description)
        {
            return await gamesContext.Games
                .Where(_ => _.Description.Contains(description))
                .OrderBy(_ => _.Name)
                .ToListAsync();
        }

        public async Task<IList<Game>> GetByHigherMarkAsync(double mark)
        {
            return await gamesContext.Games
                .Where(_ => _.AverageMark >= mark)
                .OrderBy(_ => _.Name)
                .ToListAsync();
        }

        public async Task<IList<Game>> GetByHigherReleaseYearAsync(int year)
        {
            return await gamesContext.Games
               .Where(_ => _.ReleaseYear >= year)
               .OrderBy(_ => _.Name)
               .ToListAsync();
        }

        public async Task<IList<Game>> GetByLowerPriceAsync(int price)
        {
            return await gamesContext.Games
                   .Where(_ => _.Price <= price)
                   .OrderBy(_ => _.Name)
                   .ToListAsync();
        }

        public async Task<IList<Game>> GetByNameAsync(string name)
        {
            return await gamesContext.Games
                .Where(_ => _.Name.Contains(name))
                .OrderBy(_ => _.Name)
                .ToListAsync();
        }

        public async Task Remove(string id)
        {
            var forRemove = await Get(id);

            gamesContext.Remove(forRemove);

            await gamesContext.SaveChangesAsync();
        }

        public Task SaveChanges()
        {
            throw new NotImplementedException();
        }

        public async Task<IList<Game>> SortByMark()
        {
            return await gamesContext.Games
                .OrderBy(_ => _.AverageMark)
                .ToListAsync();
        }

        public async Task<IList<Game>> SortByPrice()
        {
            return await gamesContext.Games
                .OrderBy(_ => _.Price)
                .ToListAsync();
        }

        public async Task<IList<Game>> SortByReleaseYear()
        {
            return await gamesContext.Games
                .OrderBy(_ => _.ReleaseYear)
                .ToListAsync();
        }

        public async Task<Game> Update(Game entity)
        {
            gamesContext.Update(entity);

            await gamesContext.SaveChangesAsync();

            return entity;
        }
    }
}
