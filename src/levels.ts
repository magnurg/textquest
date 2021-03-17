
export class Levels {
        level1: string;
        level2: string;
        level3: string;

         constructor(one: string, two: string, three: string,) {
                this.level1 = one;
                this.level2 = two;
                this.level3 = three;   
        };
};
export const mainInterface = new Levels("You wake up in a strange place and figured that you lost the job, what are you gonna do?",
                                        "How are you going to find a job?",
                                        "You found a place to work, but to get employed you have to pass test tasks,2 and the employer let you a week of time to do that. When you will start to work on the test task")

export class LevelOne {
        option1: string;
        option2: string;
        option3: string;

         constructor(one: string, two: string, three: string,) {
                this.option1 = one;
                this.option2 = two;
                this.option3 = three;   
        };
};
export const levelOneOptions = new LevelOne("1: Find the similar job", "2: Try to get a better job, where you have no experience", "3: Become homeless");

export class LevelTwo {
        option1: string;
        option2: string;
        option3: string;

         constructor(one: string, two: string, three: string,) {
                this.option1 = one;
                this.option2 = two;
                this.option3 = three;   
        };
};
export const levelTwoOptions = new LevelTwo("1: Ask friends", "2: Search on internet", "3: Stop by and ask if they need workers");

export class LevelThree {
        option1: string;
        option2: string;
        option3: string;

         constructor(one: string, two: string, three: string,) {
                this.option1 = one;
                this.option2 = two;
                this.option3 = three;   
        };
};
export const levelThreeOptions = new LevelThree("1: Right away", "2: In the middle of the week when you will have time for it", "3: In the evening of the last day of the week");