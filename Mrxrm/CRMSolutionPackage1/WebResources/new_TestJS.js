if (typeof(mrxrm) == typeof(undefined) || !mrxrm)
    mrxrm = { __namespace: true };

if (typeof (mrxrm.common) == typeof (undefined) || !mrxrm.common)
{
    mrxrm.Common = function () { }; // A Class
    mrxrm.sendEmail = function () { // A static method. See the case difference?
        // Send email
    }
}

mrxrm.Common.prototype.add = function (num1, num2) {
        return num1 + num2;
};

var commonObj = new mrxrm.Common();
var result = commonObj.add(2, 3);

console.log(result);

// A use of Clousure
(function emailRouterWrapper() {
    var emailServer = "email.myserver.com";

    function EmailRouter() { };

    EmailRouter.prototype = function sendEmail() {
        var emailRequest = {
            server: emailServer, // <--
            sender: "myemail@myserver.com",
            emailBody: "Content"
        }
    }
})(); // Execute itself automatically on loading.

var router = new EmailRouter();
router.sendEmail();