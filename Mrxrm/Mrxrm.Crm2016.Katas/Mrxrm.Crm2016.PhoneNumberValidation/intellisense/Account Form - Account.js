/// <reference path="Xrm.js" />

var EntityLogicalName = "account";
var Form_8448b78f_8f42_454e_8e2a_f8196b0419af_Properties = {
address1_composite: "address1_composite"
,address1_freighttermscode: "address1_freighttermscode"
,address1_shippingmethodcode: "address1_shippingmethodcode"
,creditlimit: "creditlimit"
,creditonhold: "creditonhold"
,description: "description"
,donotbulkemail: "donotbulkemail"
,donotemail: "donotemail"
,donotfax: "donotfax"
,donotphone: "donotphone"
,donotpostalmail: "donotpostalmail"
,donotsendmm: "donotsendmm"
,fax: "fax"
,industrycode: "industrycode"
,lastusedincampaign: "lastusedincampaign"
,name: "name"
,numberofemployees: "numberofemployees"
,originatingleadid: "originatingleadid"
,ownerid: "ownerid"
,ownershipcode: "ownershipcode"
,parentaccountid: "parentaccountid"
,paymenttermscode: "paymenttermscode"
,preferredcontactmethodcode: "preferredcontactmethodcode"
,primarycontactid: "primarycontactid"
,revenue: "revenue"
,sic: "sic"
,telephone1: "telephone1"
,tickersymbol: "tickersymbol"
,transactioncurrencyid: "transactioncurrencyid"
,websiteurl: "websiteurl"
};

var Form_8448b78f_8f42_454e_8e2a_f8196b0419af_Controls = {
accountcasessgrid: "accountcasessgrid"
,accountopportunitiesgrid: "accountopportunitiesgrid"
,address1_composite: "address1_composite"
,address1_freighttermscode: "address1_freighttermscode"
,address1_shippingmethodcode: "address1_shippingmethodcode"
,ChildAccounts: "ChildAccounts"
,contactquickform: "contactquickform"
,Contacts: "Contacts"
,creditlimit: "creditlimit"
,creditonhold: "creditonhold"
,description: "description"
,donotbulkemail: "donotbulkemail"
,donotemail: "donotemail"
,donotfax: "donotfax"
,donotphone: "donotphone"
,donotpostalmail: "donotpostalmail"
,donotsendmm: "donotsendmm"
,fax: "fax"
,header_numberofemployees: "header_numberofemployees"
,header_ownerid: "header_ownerid"
,header_revenue: "header_revenue"
,industrycode: "industrycode"
,lastusedincampaign: "lastusedincampaign"
,mapcontrol: "mapcontrol"
,name: "name"
,notescontrol: "notescontrol"
,originatingleadid: "originatingleadid"
,ownershipcode: "ownershipcode"
,parentaccountid: "parentaccountid"
,paymenttermscode: "paymenttermscode"
,preferredcontactmethodcode: "preferredcontactmethodcode"
,primarycontactid: "primarycontactid"
,sic: "sic"
,subgrid_Entitlement: "subgrid_Entitlement"
,telephone1: "telephone1"
,tickersymbol: "tickersymbol"
,transactioncurrencyid: "transactioncurrencyid"
,websiteurl: "websiteurl"
};

var pageData = {
"Event": "none",
"SaveMode": 1,
"EventSource": null,
"AuthenticationHeader": "",
"CurrentTheme": "Default",
"OrgLcid":  1033,
"OrgUniqueName": "",
"QueryStringParameters": { "_gridType": "1", "etc": "1", "id": "", "pagemode": "iframe", "preloadcache": "1344548892170", "rskey": "141637534" },
"ServerUrl": "",
"UserId": "",
"UserLcid":  1033,
"UserRoles":  [""],
"isOutlookClient":  false,
"isOutlookOnline":  true,
"DataXml": "",
"EntityName": "account",
"Id": "",
"IsDirty":  false,
"CurrentControl": "",
"CurrentForm":  null,
"Forms":  [],
"FormType":  2,
"ViewPortHeight":  558,
"ViewPortWidth":  1231,
"Attributes":  [
{ "Name": "address1_composite", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : false}, "MaxLength" : 1000, "Controls": [{ "Name": "address1_composite" }] }, 
{ "Name": "address1_freighttermscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "FOB", "value": 1 }, { "text" : "No Charge", "value": 2 }], "SelectedOption" : { "option" : "FOB", "value": 1 }, "Text": "FOB", "Controls": [{ "Name": "address1_freighttermscode" }] }, 
{ "Name": "address1_shippingmethodcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Airborne", "value": 1 }, { "text" : "DHL", "value": 2 }, { "text" : "FedEx", "value": 3 }, { "text" : "UPS", "value": 4 }, { "text" : "Postal Mail", "value": 5 }, { "text" : "Full Load", "value": 6 }, { "text" : "Will Call", "value": 7 }], "SelectedOption" : { "option" : "Airborne", "value": 1 }, "Text": "Airborne", "Controls": [{ "Name": "address1_shippingmethodcode" }] }, 
{ "Name": "creditlimit", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "creditlimit" }] }, 
{ "Name": "creditonhold", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "creditonhold" }] }, 
{ "Name": "description", "Value": "", "Type" : "memo", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 2000, "Controls": [{ "Name": "description" }] }, 
{ "Name": "donotbulkemail", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotbulkemail" }] }, 
{ "Name": "donotemail", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotemail" }] }, 
{ "Name": "donotfax", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotfax" }] }, 
{ "Name": "donotphone", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotphone" }] }, 
{ "Name": "donotpostalmail", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotpostalmail" }] }, 
{ "Name": "donotsendmm", "Value": null, "Type" : "boolean", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : null, "Controls": [{ "Name": "donotsendmm" }] }, 
{ "Name": "fax", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "fax" }] }, 
{ "Name": "industrycode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Accounting", "value": 1 }, { "text" : "Agriculture and Non-petrol Natural Resource Extraction", "value": 2 }, { "text" : "Broadcasting Printing and Publishing", "value": 3 }, { "text" : "Brokers", "value": 4 }, { "text" : "Building Supply Retail", "value": 5 }, { "text" : "Business Services", "value": 6 }, { "text" : "Consulting", "value": 7 }, { "text" : "Consumer Services", "value": 8 }, { "text" : "Design, Direction and Creative Management", "value": 9 }, { "text" : "Distributors, Dispatchers and Processors", "value": 10 }, { "text" : "Doctor&#39;s Offices and Clinics", "value": 11 }, { "text" : "Durable Manufacturing", "value": 12 }, { "text" : "Eating and Drinking Places", "value": 13 }, { "text" : "Entertainment Retail", "value": 14 }, { "text" : "Equipment Rental and Leasing", "value": 15 }, { "text" : "Financial", "value": 16 }, { "text" : "Food and Tobacco Processing", "value": 17 }, { "text" : "Inbound Capital Intensive Processing", "value": 18 }, { "text" : "Inbound Repair and Services", "value": 19 }, { "text" : "Insurance", "value": 20 }, { "text" : "Legal Services", "value": 21 }, { "text" : "Non-Durable Merchandise Retail", "value": 22 }, { "text" : "Outbound Consumer Service", "value": 23 }, { "text" : "Petrochemical Extraction and Distribution", "value": 24 }, { "text" : "Service Retail", "value": 25 }, { "text" : "SIG Affiliations", "value": 26 }, { "text" : "Social Services", "value": 27 }, { "text" : "Special Outbound Trade Contractors", "value": 28 }, { "text" : "Specialty Realty", "value": 29 }, { "text" : "Transportation", "value": 30 }, { "text" : "Utility Creation and Distribution", "value": 31 }, { "text" : "Vehicle Retail", "value": 32 }, { "text" : "Wholesale", "value": 33 }], "SelectedOption" : { "option" : "Accounting", "value": 1 }, "Text": "Accounting", "Controls": [{ "Name": "industrycode" }] }, 
{ "Name": "lastusedincampaign", "Value": null, "Type" : "datetime", "Format": "date", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : false}, "Controls": [{ "Name": "lastusedincampaign" }] }, 
{ "Name": "name", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 160, "Controls": [{ "Name": "name" }] }, 
{ "Name": "numberofemployees", "Value": null, "Type" : "integer", "Format": "none", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 1000000000, "Min" : 0, "Precision" : 0, "Controls": [{ "Name": "header_numberofemployees" }] }, 
{ "Name": "originatingleadid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : false, "canCreate" : true}, "Controls": [{ "Name": "originatingleadid" }] }, 
{ "Name": "ownerid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "header_ownerid" }] }, 
{ "Name": "ownershipcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Public", "value": 1 }, { "text" : "Private", "value": 2 }, { "text" : "Subsidiary", "value": 3 }, { "text" : "Other", "value": 4 }], "SelectedOption" : { "option" : "Public", "value": 1 }, "Text": "Public", "Controls": [{ "Name": "ownershipcode" }] }, 
{ "Name": "parentaccountid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "parentaccountid" }] }, 
{ "Name": "paymenttermscode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Net 30", "value": 1 }, { "text" : "2% 10, Net 30", "value": 2 }, { "text" : "Net 45", "value": 3 }, { "text" : "Net 60", "value": 4 }], "SelectedOption" : { "option" : "Net 30", "value": 1 }, "Text": "Net 30", "Controls": [{ "Name": "paymenttermscode" }] }, 
{ "Name": "preferredcontactmethodcode", "Value": null, "Type" : "optionset", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "InitialValue" : 930650000, "Options" : [{ "text" : "Any", "value": 1 }, { "text" : "Email", "value": 2 }, { "text" : "Phone", "value": 3 }, { "text" : "Fax", "value": 4 }, { "text" : "Mail", "value": 5 }], "SelectedOption" : { "option" : "Any", "value": 1 }, "Text": "Any", "Controls": [{ "Name": "preferredcontactmethodcode" }] }, 
{ "Name": "primarycontactid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "contactquickform" }, { "Name": "primarycontactid" }] }, 
{ "Name": "revenue", "Value": null, "Type" : "money", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Max" : 100000000000000, "Min" : 0, "Precision" : 2, "Controls": [{ "Name": "header_revenue" }] }, 
{ "Name": "sic", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 20, "Controls": [{ "Name": "sic" }] }, 
{ "Name": "telephone1", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 50, "Controls": [{ "Name": "telephone1" }] }, 
{ "Name": "tickersymbol", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 10, "Controls": [{ "Name": "tickersymbol" }] }, 
{ "Name": "transactioncurrencyid", "Value": [{ "entityType": "Unknown", "id": "{27ACAE0A-5D79-E111-BBD3-2657AEB3167B}", "name": "Temp"}], "Type" : "lookup", "Format" : null, "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "Controls": [{ "Name": "transactioncurrencyid" }] }, 
{ "Name": "websiteurl", "Value": "", "Type" : "string", "Format": "text", "IsDirty" : false, "RequiredLevel" : "none", "SubmitMode" : "dirty", "UserPrivilege": { "canRead" : true, "canUpdate" : true, "canCreate" : true}, "MaxLength" : 200, "Controls": [{ "Name": "websiteurl" }] }]
, "AttributesLength": 30, 
"Controls": [
, 
{ "Name": "address1_composite", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Address 1", "Attribute": "address1_composite" }, 
{ "Name": "address1_freighttermscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Freight Terms", "Attribute": "address1_freighttermscode" }, 
{ "Name": "address1_shippingmethodcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Shipping Method", "Attribute": "address1_shippingmethodcode" }, 
{ "Name": "contactquickform", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Primary Contact", "Attribute": "primarycontactid" }, 
{ "Name": "creditlimit", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Credit Limit", "Attribute": "creditlimit" }, 
{ "Name": "creditonhold", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Credit Hold", "Attribute": "creditonhold" }, 
{ "Name": "description", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Description", "Attribute": "description" }, 
{ "Name": "donotbulkemail", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Bulk Email", "Attribute": "donotbulkemail" }, 
{ "Name": "donotemail", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Email", "Attribute": "donotemail" }, 
{ "Name": "donotfax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Fax", "Attribute": "donotfax" }, 
{ "Name": "donotphone", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Phone", "Attribute": "donotphone" }, 
{ "Name": "donotpostalmail", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Mail", "Attribute": "donotpostalmail" }, 
{ "Name": "donotsendmm", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Marketing Materials", "Attribute": "donotsendmm" }, 
{ "Name": "fax", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Fax", "Attribute": "fax" }, 
{ "Name": "header_numberofemployees", "Type": "standard", "Disabled": false, "Visible": true, "Label": "No. of Employees", "Attribute": "numberofemployees" }, 
{ "Name": "header_ownerid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Owner", "Attribute": "ownerid" }, 
{ "Name": "header_revenue", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Annual Revenue", "Attribute": "revenue" }, 
{ "Name": "industrycode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Industry", "Attribute": "industrycode" }, 
{ "Name": "lastusedincampaign", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Last Campaign Date", "Attribute": "lastusedincampaign" }, 
{ "Name": "name", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Account Name", "Attribute": "name" }, 
{ "Name": "originatingleadid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Originating Lead", "Attribute": "originatingleadid" }, 
{ "Name": "ownershipcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Ownership", "Attribute": "ownershipcode" }, 
{ "Name": "parentaccountid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Parent Account", "Attribute": "parentaccountid" }, 
{ "Name": "paymenttermscode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Payment Terms", "Attribute": "paymenttermscode" }, 
{ "Name": "preferredcontactmethodcode", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Contact Method", "Attribute": "preferredcontactmethodcode" }, 
{ "Name": "primarycontactid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Primary Contact", "Attribute": "primarycontactid" }, 
{ "Name": "sic", "Type": "standard", "Disabled": false, "Visible": true, "Label": "SIC Code", "Attribute": "sic" }, 
{ "Name": "telephone1", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Phone", "Attribute": "telephone1" }, 
{ "Name": "tickersymbol", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Ticker Symbol", "Attribute": "tickersymbol" }, 
{ "Name": "transactioncurrencyid", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Currency", "Attribute": "transactioncurrencyid" }, 
{ "Name": "websiteurl", "Type": "standard", "Disabled": false, "Visible": true, "Label": "Website", "Attribute": "websiteurl" }], 
"ControlsLength": 31, 
"Navigation": [
{"Id": "navAddresses", "Key": "navAddresses", "Label": "", "Visible": true }, 
{"Id": "navSubAccts", "Key": "navSubAccts", "Label": "", "Visible": true }, 
{"Id": "navRelationships", "Key": "navRelationships", "Label": "", "Visible": true }, 
{"Id": "navQuotes", "Key": "navQuotes", "Label": "", "Visible": true }, 
{"Id": "navOrders", "Key": "navOrders", "Label": "", "Visible": true }, 
{"Id": "navInvoices", "Key": "navInvoices", "Label": "", "Visible": true }, 
{"Id": "navContracts", "Key": "navContracts", "Label": "", "Visible": true }, 
{"Id": "navCampaignsInSFA", "Key": "navCampaignsInSFA", "Label": "", "Visible": true }, 
{"Id": "navProcessSessions", "Key": "navProcessSessions", "Label": "", "Visible": true }, 
{"Id": "navAsyncOperations", "Key": "navAsyncOperations", "Label": "", "Visible": true }], 
"Tabs": [
{ "Label": "Summary", "Name": "SUMMARY_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "ACCOUNT INFORMATION", "Name": "ACCOUNT_INFORMATION", "Visible": true, "Controls": [
{ "Name": "name" }, 
{ "Name": "telephone1" }, 
{ "Name": "fax" }, 
{ "Name": "websiteurl" }, 
{ "Name": "parentaccountid" }, 
{ "Name": "tickersymbol" }]}, 
{ "Label": "ADDRESS", "Name": "ADDRESS", "Visible": true, "Controls": [
{ "Name": "address1_composite" }]}, 
{ "Label": "", "Name": "MapSection", "Visible": true, "Controls": [
{ "Name": "mapcontrol" }]}, 
{ "Label": "SOCIAL PANE", "Name": "SOCIAL_PANE_TAB", "Visible": true, "Controls": [
{ "Name": "notescontrol" }]}, 
{ "Label": "Section", "Name": "SUMMARY_TAB_section_6", "Visible": true, "Controls": [
{ "Name": "primarycontactid" }, 
{ "Name": "contactquickform" }, 
{ "Name": "Contacts" }, 
{ "Name": "accountopportunitiesgrid" }, 
{ "Name": "accountcasessgrid" }, 
{ "Name": "subgrid_Entitlement" }]}]}, 
{ "Label": "Details", "Name": "DETAILS_TAB", "DisplayState": "expanded", "Visible": true, "Sections": [
{ "Label": "COMPANY PROFILE", "Name": "COMPANY_PROFILE", "Visible": true, "Controls": [
{ "Name": "industrycode" }, 
{ "Name": "sic" }, 
{ "Name": "ownershipcode" }]}, 
{ "Label": "Description", "Name": "DETAILS_TAB_section_6", "Visible": true, "Controls": [
{ "Name": "description" }]}, 
{ "Label": "MARKETING", "Name": "MARKETING", "Visible": true, "Controls": [
{ "Name": "originatingleadid" }, 
{ "Name": "lastusedincampaign" }, 
{ "Name": "donotsendmm" }]}, 
{ "Label": "CONTACT PREFERENCES", "Name": "CONTACT_PREFERENCES", "Visible": true, "Controls": [
{ "Name": "preferredcontactmethodcode" }, 
{ "Name": "donotemail" }, 
{ "Name": "donotbulkemail" }, 
{ "Name": "donotphone" }, 
{ "Name": "donotfax" }, 
{ "Name": "donotpostalmail" }]}, 
{ "Label": "BILLING", "Name": "BILLING", "Visible": true, "Controls": [
{ "Name": "transactioncurrencyid" }, 
{ "Name": "creditlimit" }, 
{ "Name": "creditonhold" }, 
{ "Name": "paymenttermscode" }]}, 
{ "Label": "SHIPPING", "Name": "SHIPPING", "Visible": true, "Controls": [
{ "Name": "address1_shippingmethodcode" }, 
{ "Name": "address1_freighttermscode" }]}, 
{ "Label": "CHILD ACCOUNTS", "Name": "ChildAccounts", "Visible": true, "Controls": [
{ "Name": "ChildAccounts" }]}]}]
};

var Xrm = new _xrm(pageData);
