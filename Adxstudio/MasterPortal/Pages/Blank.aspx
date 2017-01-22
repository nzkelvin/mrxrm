<%@ Page Language="C#" MasterPageFile="~/MasterPages/Default.master" AutoEventWireup="true" CodeBehind="Blank.aspx.cs" Inherits="Site.Pages.Blank" %>
<%@ OutputCache CacheProfile="User" %>
<%@ Import Namespace="Adxstudio.Xrm.Web.Mvc.Html" %>

<asp:Content ContentPlaceHolderID="MainContent" runat="server">
	<%: Html.HtmlAttribute("adx_copy", cssClass: "page-copy") %>
    <adx:AdPlacement ID="BottomAd" runat="server" PlacementName="Sidebar Bottom" ShowCopy="true" />
</asp:Content>
