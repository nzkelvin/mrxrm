<%@ Page Language="C#" MasterPageFile="~/MasterPages/WebFormsContent.master" AutoEventWireup="true" CodeBehind="CrmDataSource.aspx.cs" Inherits="Site.Areas.Katas.Pages.Index" %>
<%@ OutputCache CacheProfile="User" %>
<%@ Import namespace="Adxstudio.Xrm" %>
<%@ Import namespace="Adxstudio.Xrm.Web.Mvc.Html" %>


<asp:Content ContentPlaceHolderID="MainContent" runat="server">
    <adx:CrmDataSource runat="server" ID="AccountDataSource" >
	    <FetchXml>
            <fetch version="1.0" output-format="xml-platform" mapping="logical" distinct="false">
              <entity name="account">
                <attribute name="name" />
                <attribute name="telephone1" />
                <attribute name="accountid" />
                <attribute name="address1_city" />
                <order attribute="name" descending="false" />
                <filter type="and">
                  <condition attribute="statecode" operator="eq" value="0" />
                </filter>
              </entity>
            </fetch>
	    </FetchXml>
    </adx:CrmDataSource>
    <asp:GridView ID="GridView1" runat="server" DataSourceID="AccountDataSource" AutoGenerateColumns="False" AllowSorting="True" AllowPaging="True" PageSize="5">
	    <Columns>
		    <asp:BoundField DataField='name' HeaderText="Name" SortExpression="name" />
		    <asp:BoundField DataField='address1_city' HeaderText="City" />
		    <asp:BoundField DataField='telephone1' HeaderText="Telephone" />
	    </Columns>
    </asp:GridView>
</asp:Content>

