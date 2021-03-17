"use strict";
exports.__esModule = true;
var scene_1 = require("./scene");
var userinterface_1 = require("./userinterface");
function Game() {
    userinterface_1.firstLevel();
    userinterface_1.firstLevelOptions();
    if (userinterface_1.firstLevelOption == 3) {
        scene_1.result();
        return;
    }
    userinterface_1.secondLevel();
    userinterface_1.secondLevelOptions();
    userinterface_1.thirdLevel();
    userinterface_1.thirdLevelOptions();
    scene_1.result();
}
;
Game();
