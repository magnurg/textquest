"use strict";
exports.__esModule = true;
exports.levelThreeOptions = exports.LevelThree = exports.levelTwoOptions = exports.LevelTwo = exports.levelOneOptions = exports.LevelOne = exports.mainInterface = exports.Levels = void 0;
var Levels = /** @class */ (function () {
    function Levels(one, two, three) {
        this.level1 = one;
        this.level2 = two;
        this.level3 = three;
    }
    ;
    return Levels;
}());
exports.Levels = Levels;
;
exports.mainInterface = new Levels("You wake up in a strange place and figured that you lost the job, what are you gonna do?", "How are you going to find a job?", "You found a place to work, but to get employed you have to pass test tasks,2 and the employer let you a week of time to do that. When you will start to work on the test task");
var LevelOne = /** @class */ (function () {
    function LevelOne(one, two, three) {
        this.option1 = one;
        this.option2 = two;
        this.option3 = three;
    }
    ;
    return LevelOne;
}());
exports.LevelOne = LevelOne;
;
exports.levelOneOptions = new LevelOne("1: Find the similar job", "2: Try to get a better job, where you have no experience", "3: Become homeless");
var LevelTwo = /** @class */ (function () {
    function LevelTwo(one, two, three) {
        this.option1 = one;
        this.option2 = two;
        this.option3 = three;
    }
    ;
    return LevelTwo;
}());
exports.LevelTwo = LevelTwo;
;
exports.levelTwoOptions = new LevelTwo("1: Ask friends", "2: Search on internet", "3: Stop by and ask if they need workers");
var LevelThree = /** @class */ (function () {
    function LevelThree(one, two, three) {
        this.option1 = one;
        this.option2 = two;
        this.option3 = three;
    }
    ;
    return LevelThree;
}());
exports.LevelThree = LevelThree;
;
exports.levelThreeOptions = new LevelThree("1: Right away", "2: In the middle of the week when you will have time for it", "3: In the evening of the last day of the week");
