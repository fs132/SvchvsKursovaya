using Microsoft.Extensions.DependencyInjection;

namespace SVChVS_Course_Project.Services
{
    public static class Registrator
    {
        public static void Reg(this IServiceCollection serviceDescriptors)
        {
            serviceDescriptors.AddScoped<IGameService, GameService>();
        }
    }
}
