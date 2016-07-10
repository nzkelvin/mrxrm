/// <reference path="C:\Users\kelvi_000\Source\Repos\mrxrm\Mrxrm\Mrxrm.Crm2016.Katas\Mrxrm.Crm2016.Katas.Customisations\intellisense/Xrm.js" />

if (typeof(Mrxrm) == typeof(undefined) || !Mrxrm)
    Mrxrm = { __namespace: true };

if (typeof (Mrxrm.Account) == typeof (undefined) || !Mrxrm.Account)
    Mrxrm.Account = { __namespace: true };

Mrxrm.Account.Forms = (function () {
    //Private properties & methods

    //var x = 0;
    //var _privateMethod = function() {
    //    return x++;
    //};

    //Public 
    return {
        OnLoad: function () {
            alert("OnLoad");
            //TODO: Do stuff
            //return x;
        }
    };
})();