"use strict";
exports.__esModule = true;
exports.thirdLevelOptions = exports.thirdLevel = exports.secondLevelOptions = exports.secondLevel = exports.firstLevelOptions = exports.firstLevel = exports.progress = exports.thirdLevelOption = exports.secondLevelOption = exports.firstLevelOption = void 0;
var customConsole = require('prompt-sync')();
var levels_1 = require("./levels");
exports.firstLevelOption = 1;
exports.secondLevelOption = 1;
exports.thirdLevelOption = 1;
exports.progress = 0;
function firstLevel() {
    return console.log(levels_1.mainInterface.level1);
}
exports.firstLevel = firstLevel;
;
function firstLevelOptions() {
    exports.firstLevelOption = customConsole("\n    " + levels_1.levelOneOptions.option1 + "\n    " + levels_1.levelOneOptions.option2 + "\n    " + levels_1.levelOneOptions.option3 + "\n    \n    Please enter the option number and press \"Enter\"\n     \n     ");
    while (exports.firstLevelOption > 3 || exports.firstLevelOption < 1) {
        exports.firstLevelOption = customConsole("\"The number of the option suppose to be between 1 and 3. Please, enter the correct number of option and press \"Enter\"\n    ");
    }
    ;
    if (exports.firstLevelOption == 1) {
        exports.progress += 3;
    }
    else if (exports.firstLevelOption == 2) {
        exports.progress += 5;
    }
    ;
}
exports.firstLevelOptions = firstLevelOptions;
;
function secondLevel() {
    return console.log(levels_1.mainInterface.level2);
}
exports.secondLevel = secondLevel;
;
function secondLevelOptions() {
    exports.secondLevelOption = customConsole("\n     " + levels_1.levelTwoOptions.option1 + "\n     " + levels_1.levelTwoOptions.option2 + "\n     " + levels_1.levelTwoOptions.option3 + "\n\n     Please enter the option number and press \"Enter\"\n      \n      ");
    while (exports.secondLevelOption > 3 || exports.secondLevelOption < 1) {
        exports.secondLevelOption = customConsole("\"The number of the option suppose to be between 1 and 3. Please, enter the correct number of option and press \"Enter\"\n     ");
    }
    ;
    if (exports.secondLevelOption == 1) {
        exports.progress += 4;
    }
    else if (exports.secondLevelOption == 2) {
        exports.progress += 5;
    }
    else if (exports.secondLevelOption == 3) {
        exports.progress += 3;
    }
    ;
}
exports.secondLevelOptions = secondLevelOptions;
;
function thirdLevel() {
    return console.log(levels_1.mainInterface.level3);
}
exports.thirdLevel = thirdLevel;
;
function thirdLevelOptions() {
    exports.thirdLevelOption = customConsole("\n     " + levels_1.levelThreeOptions.option1 + "\n     " + levels_1.levelThreeOptions.option2 + "\n     " + levels_1.levelThreeOptions.option3 + "\n\n     Please enter the option number and press \"Enter\"\n      \n      ");
    while (exports.thirdLevelOption > 3 || exports.thirdLevelOption < 1) {
        exports.thirdLevelOption = customConsole("\"The number of the option suppose to be between 1 and 3. Please, enter the correct number of option and press \"Enter\"\n     ");
    }
    ;
    if (exports.thirdLevelOption == 1) {
        exports.progress += 5;
    }
    else if (exports.thirdLevelOption == 2) {
        exports.progress += 3;
    }
    else if (exports.thirdLevelOption == 3) {
        exports.progress += 0;
    }
    ;
}
exports.thirdLevelOptions = thirdLevelOptions;
;
