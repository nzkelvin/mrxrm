using Adxstudio.Xrm.Web.Mvc;
using System.Web.Mvc;

namespace Site.Areas.Katas
{
    public class KatasAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Katas";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            //context.MapSiteMarkerRoute(
            //        "AccountBalances",
            //        "Balances", // Site Marker name -> web page with partial url of myaccounts
            //        "",//"{action}",
            //        new { controller = "Info", action = "AccountBalances" }, new { action = @"^AccountBalances.*" });

            context.MapRoute(
                "katas_default",
                "katas/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
            //i.e. / myaccounts / accountbalances(web page partial url = myaccounts or myaccounts / accountbalances)
        }
    }
}