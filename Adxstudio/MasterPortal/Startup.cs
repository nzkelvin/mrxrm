using System.Web;
using Adxstudio.Xrm.AspNet.Cms;
using Adxstudio.Xrm.AspNet.PortalBus;
using Owin;
using Site.Areas.Account.Models;

namespace Site
{
	public partial class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			app.UseApplicationRestartPluginMessage(new PluginMessageOptions());
			app.UsePortalBus<ApplicationRestartPortalBusMessage>();
			app.UsePortalBus<CacheInvalidationPortalBusMessage>();

			if (!SetupConfig.InitialSetupIsRunning())
			{
				app.CreatePerOwinContext(ApplicationDbContext.Create);
				app.CreatePerOwinContext<ApplicationOrganizationManager>(ApplicationOrganizationManager.Create);
				app.CreatePerOwinContext<ApplicationWebsiteManager>(ApplicationWebsiteManager.Create);
				app.CreatePerOwinContext<ApplicationWebsite>(ApplicationWebsite.Create);
				app.CreatePerOwinContext<ApplicationPortalContextManager>(ApplicationPortalContextManager.Create);

				var websiteManager = ApplicationWebsiteManager.Create(ApplicationDbContext.Create());
				var website = websiteManager.Find(HttpContext.Current.Request.RequestContext);

				if (SetupConfig.OwinEnabled())
				{
					ConfigureAuth(app, website);
				}

				app.UseWebsiteHeaderSettings(website);
			}
		}
	}
}
