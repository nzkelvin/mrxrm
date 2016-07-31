<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPages/Default.master" Inherits="System.Web.Mvc.ViewPage" %>
<%@ Import Namespace="System.Web.Mvc.Html" %>
<asp:Content ID="Title" ContentPlaceHolderID="Title" runat="server" ><%= (string) ViewBag.Title %></asp:Content>

<asp:Content ID="Head" ContentPlaceHolderID="Head" runat="server">
    <%--<link rel="stylesheet" href="<%: Url.Content("~/Areas/Katas/css/sample.css") %>">--%>
</asp:Content>

<%--<asp:Content ID="PageTitle" ContentPlaceHolderID="PageTitle" runat="server">
    <div id="pageTitle"><%= (string) ViewBag.PageTitle  %></div>
</asp:Content>--%>

<asp:Content ID="MainContent" ContentPlaceHolderID="MainContent" runat="server">
	<% Html.RenderPartial((string) ViewBag._ViewName, ViewData); %>
</asp:Content>