using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Label = System.Web.UI.WebControls.Label;

namespace Site.Areas.Katas.Pages
{
    public partial class Index : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void AccountGridView_RowDataBound(object sender, GridViewRowEventArgs e)
        {
            if (e.Row.RowType == DataControlRowType.DataRow)
            {
                var name = e.Row.FindControl("name") as Label;
                var dataItem = e.Row.DataItem as Entity;

                name.Text = dataItem.GetAttributeValue<string>("name");
            }
        }
    }
}