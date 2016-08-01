if (typeof (Mrxrm) == typeof (undefined) || !Mrxrm)
    Mrxrm = { __namespace: true };

Mrxrm.PhoneNumberValidation = (function () {
    //Private properties & methods

    //var x = 0;
    //var _privateMethod = function() {
    //    return x++;
    //};

    //Public 
    return {
        OnFormLoad: function () {
            var phoneNumbers = [
          { formattedNumber: '+64 6 4528700' },
          { formattedNumber: '+64 5 28700' },
          { formattedNumber: '06 4528700' },
          { formattedNumber: '64528700' },
            ];

            var keyPressFcn = function (ext) {
                try {
                    var userInput = Xrm.Page.getControl("telephone1").getValue();
                    resultSet = {
                        results: new Array(),
                        commands: {
                            id: "sp_commands",
                            label: "",
                            action: function () {
                                // Specify what you want to do when the user
                                // clicks the "Learn More" link at the bottom
                                // of the auto-completion list.
                                // For this sample, we are just opening a page
                                // that provides information on working with
                                // accounts in CRM.
                                //window.open("http://www.microsoft.com/en-us/dynamics/crm-customer-center/create-or-edit-an-account.aspx");
                            }
                        }
                    };

                    var userInputLowerCase = userInput.toLowerCase();
                    for (i = 0; i < phoneNumbers.length; i++) {
                        // todo: calculate phone number in different format here.                        
                        resultSet.results.push({
                            id: i,
                            fields: [phoneNumbers[i].formattedNumber]
                        });
                        
                        if (resultSet.results.length >= 10) break;
                    }

                    if (resultSet.results.length > 0) {
                        ext.getEventSource().showAutoComplete(resultSet);
                    } else {
                        ext.getEventSource().hideAutoComplete();
                    }
                } catch (e) {
                    // Handle any exceptions. In the sample code,
                    // we are just displaying the exception, if any.
                    console.log(e);
                }
            };

            Xrm.Page.getControl("telephone1").addOnKeyPress(keyPressFcn);    
        }
    };
})();