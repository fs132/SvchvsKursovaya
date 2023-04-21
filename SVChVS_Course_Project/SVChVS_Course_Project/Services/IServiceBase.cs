using System.Collections.Generic;
using System.Threading.Tasks;

namespace SVChVS_Course_Project.Services
{
    public interface IServiceBase<T> where T : class
    {
        Task<IList<T>> GetAll();
        Task<T> Get(string id);
        Task<T> Create(T entity);
        Task<T> Update(T entity);
        Task Remove(string id);
        Task SaveChanges();
    }
}
