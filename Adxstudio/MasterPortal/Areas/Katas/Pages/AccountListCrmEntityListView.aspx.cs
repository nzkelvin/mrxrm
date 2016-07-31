using System;
using System.Collections.Generic;
using Adxstudio.Xrm.Web.UI.CrmEntityListView;
using Site.Pages;

namespace Site.Areas.Katas.Pages
{
    public partial class AccountListCrmEntityListView : PortalPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            ListView.ViewConfigurations = new List<ViewConfiguration>
            {
                new ViewConfiguration("account", "accountid", "Active Accounts", 25)
            };
        }
    }
}