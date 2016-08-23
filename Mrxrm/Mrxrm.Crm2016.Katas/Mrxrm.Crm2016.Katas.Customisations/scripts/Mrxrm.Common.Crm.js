if (typeof(Mrxrm) == typeof(undefined)) Mrxrm = { __namespace: true };

if (typeof(Mrxrm.Common) == typeof(undefined)) Mrxrm.Common = { __namespace: true };

Mrxrm.Common.Crm = (function () {
    //Private properties & methods

    //var x = 0;
    //var _privateMethod = function() {
    //    return x++;
    //};

    //Public 
    return {
        addFilter: function() {
            var customerAccountFilter = "<filter type='and'><condition attribute='accountid' operator='null' /></filter>";
            Xrm.Page.getControl("customerid").addCustomFilter(customerAccountFilter, "account");
        },
        defaultcustomer: function() {
            Xrm.Page.getControl("customerid").addPreSearch(Mrxrm.Common.Crm.addFilter);
        },
        setDefaultCustomerLookup: function () {
            Xrm.Page.getControl("customerid").setDefaultView("{00000000-0000-0000-00AA-000010001004}");
            //Xrm.Page.getControl("customerid").setDefaultView("{00000000-0000-0000-00AA-000010001003}");
        }
    };
})();