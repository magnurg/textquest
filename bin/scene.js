"use strict";
exports.__esModule = true;
exports.result = void 0;
var color = require('colors');
var userinterface_1 = require("./userinterface");
var win = "Congratulation! You are employed again!";
var loose = "You lazy piece of junk. To be homeless is your destiny";
function result() {
    if (userinterface_1.progress > 9) {
        console.log(color.bold.green(win));
    }
    else {
        console.log(color.red(loose));
        return;
    }
    ;
}
exports.result = result;
;
