using Microsoft.Xrm.Portal.Configuration;
using Site.App_Logic.Repositories;
using Site.Areas.Katas.ViewModels;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Site.Areas.Katas.Controllers
{
    public class AccountController : Controller
    {
        // GET: Katas/Account
        public ActionResult AccountListMvc()
        {
            var crmOrgService = PortalCrmConfigurationManager.CreateOrganizationService();
            var accountRepo = new AccountRepository(crmOrgService);
            var records = accountRepo.RetrieveMultiple();

            var accounts = new List<AccountModel>();
            foreach(var rec in records)
            {
                accounts.Add(new AccountModel() { Name = rec.Attributes["name"].ToString() });
            }

            return ToRazor("AccountListMvc", accounts, "Account List using MVC");
        }

        private ViewResult ToRazor(string viewName, object model, string title)
        {
            ViewData.Model = model;
            ViewBag.Title = title;
            ViewBag._ViewName = viewName;

            return new ViewResult()
            {
                ViewName = "_RazorLayout",
                ViewData = ViewData
            };
        }

        private CultureInfo GetCultureInfo()
        {
            var userLanguages = Request.UserLanguages;
            CultureInfo ci;
            if (userLanguages.Count() > 0)
            {
                try
                {
                    ci = new CultureInfo(userLanguages[0]);
                }
                catch (CultureNotFoundException)
                {
                    ci = CultureInfo.InvariantCulture;
                }
            }
            else
            {
                ci = CultureInfo.InvariantCulture;
            }

            return ci;
        }
    }
}