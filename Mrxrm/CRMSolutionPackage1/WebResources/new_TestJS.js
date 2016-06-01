console.log();

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