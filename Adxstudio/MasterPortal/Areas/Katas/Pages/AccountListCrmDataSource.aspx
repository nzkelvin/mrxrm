<%@ Page Language="C#" MasterPageFile="~/MasterPages/WebFormsContent.master" AutoEventWireup="true" CodeBehind="AccountListCrmDataSource.aspx.cs" Inherits="Site.Areas.Katas.Pages.AccountListCrmDataSource" %>
<%@ OutputCache CacheProfile="User" %>
<%@ Import Namespace="System.Data" %>
<%@ Import namespace="Adxstudio.Xrm" %>
<%@ Import namespace="Adxstudio.Xrm.Web.Mvc.Html" %>
<%@ Import Namespace="Microsoft.Xrm.Sdk" %>


<asp:Content ContentPlaceHolderID="MainContent" runat="server">
    <adx:CrmDataSource runat="server" ID="AccountDataSource" >
<%--	    <FetchXml>
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
	    </FetchXml>--%>
    </adx:CrmDataSource>
    <asp:GridView ID="AccountGridView" runat="server" DataSourceID="AccountDataSource" AutoGenerateColumns="False" AllowSorting="True" AllowPaging="True" PageSize="25" OnRowDataBound="AccountGridView_RowDataBound">
	    <Columns>
            <asp:TemplateField HeaderText="Account Name" ItemStyle-Width="15%">
		        <ItemTemplate>
		            <asp:Label ID="name" runat="server" />
		        </ItemTemplate>
		    </asp:TemplateField>
<%--		    <asp:BoundField DataField='name' HeaderText="Name" SortExpression="name" />
		    <asp:BoundField DataField='address1_city' HeaderText="City" />
		    <asp:BoundField DataField='telephone1' HeaderText="Telephone" />--%>
	    </Columns>
    </asp:GridView>
</asp:Content>
