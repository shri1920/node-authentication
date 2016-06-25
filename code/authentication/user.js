/*jslint node:true*/
var User = function () {
    "use strict";
    var findUser, login, crypto = require('crypto');
    // Function to check whether the user is in the system or not
    findUser = function (callback) {
        /*
            code to check whether user is available or not.
        */
        if (callback && typeof callback === "function") {
            callback(undefined, true);
        }
    };
    // Function to set the session for user
    login = function (callback) {
        var tokenLength = 32;
        crypto.randomBytes(tokenLength, function (error, token) {
            if (error) {
                if (callback && typeof callback === "function") {
                    callback(error, undefined);
                }
            }
            console.log(token.toString('hex'));
        });
    };
    return {
        findUser : findUser,
        login    : login
    };
};
module.exports = new User();