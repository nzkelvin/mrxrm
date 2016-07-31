using Microsoft.Xrm.Sdk;
using System;
using System.Text;
using System.Web.UI.WebControls;
using Label = System.Web.UI.WebControls.Label;

namespace Site.Areas.Katas.Pages
{
    public partial class AccountListCrmDataSource : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var fetchXml = new StringBuilder();
            fetchXml.Append("<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>");
            fetchXml.Append("  <entity name='account'>");
            fetchXml.Append("	<attribute name='name' />");
            fetchXml.Append("	<attribute name='telephone1' />");
            fetchXml.Append("	<attribute name='accountid' />");
            fetchXml.Append("	<attribute name='address1_city' />");
            fetchXml.Append("	<order attribute='name' descending='false' />");
            fetchXml.Append("	<filter type='and'>");
            fetchXml.Append("	  <condition attribute='statecode' operator='eq' value='0' />");
            fetchXml.Append("	</filter>");
            fetchXml.Append("  </entity>");
            fetchXml.Append("</fetch>");

            AccountDataSource.FetchXml = fetchXml.ToString();
            AccountDataSource.DataBind();
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