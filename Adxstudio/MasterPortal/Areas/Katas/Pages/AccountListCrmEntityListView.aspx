<%@ Page Language="C#" MasterPageFile="~/MasterPages/WebFormsContent.master" AutoEventWireup="true" CodeBehind="AccountListCrmEntityListView.aspx.cs" Inherits="Site.Areas.Katas.Pages.AccountListCrmEntityListView" %>
<%@ OutputCache CacheProfile="User" %>
<%@ Import Namespace="System.Data" %>
<%@ Import namespace="Adxstudio.Xrm" %>
<%@ Import namespace="Adxstudio.Xrm.Web.Mvc.Html" %>
<%@ Import Namespace="Microsoft.Xrm.Sdk" %>

<asp:Content ContentPlaceHolderID="MainContent" runat="server">
    <adx:CrmEntityListView runat="server" ID="ListView" CssClass="table-responsive" ListCssClass="table table-striped" ClientIDMode="Static"></adx:CrmEntityListView>
</asp:Content>
