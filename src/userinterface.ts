const customConsole = require('prompt-sync')();
import { levelOneOptions, levelTwoOptions, levelThreeOptions, mainInterface }  from "./levels";

export let firstLevelOption: number = 1;
export let secondLevelOption: number = 1;
export let thirdLevelOption: number = 1;
export let progress:number = 0;

export function firstLevel(){
   return console.log(mainInterface.level1);
};

export function firstLevelOptions(){
    
    firstLevelOption = customConsole(`
    ${levelOneOptions.option1}
    ${levelOneOptions.option2}
    ${levelOneOptions.option3}
    
    Please enter the option number and press "Enter"
     
     `);

    while ( firstLevelOption > 3 || firstLevelOption < 1) {
        firstLevelOption = customConsole(`"The number of the option suppose to be between 1 and 3. Please, enter the correct number of option and press "Enter"
    `)};

    if(firstLevelOption == 1){
        progress +=3
    }else if(firstLevelOption == 2){
        progress +=5
    };
};
export function secondLevel(){
    return console.log(mainInterface.level2)
 };

export function secondLevelOptions(){
        
     secondLevelOption = customConsole(`
     ${levelTwoOptions.option1}
     ${levelTwoOptions.option2}
     ${levelTwoOptions.option3}

     Please enter the option number and press "Enter"
      
      `);

    while ( secondLevelOption > 3 || secondLevelOption < 1) {
        secondLevelOption = customConsole(`"The number of the option suppose to be between 1 and 3. Please, enter the correct number of option and press "Enter"
     `)};

    if(secondLevelOption == 1){
        progress +=4
    }else if(secondLevelOption == 2){
        progress +=5
    }else if(secondLevelOption == 3){
        progress  += 3
    };
};


export function thirdLevel(){
    return console.log(mainInterface.level3)
 };
export function thirdLevelOptions(){
        
    thirdLevelOption = customConsole(`
     ${levelThreeOptions.option1}
     ${levelThreeOptions.option2}
     ${levelThreeOptions.option3}

     Please enter the option number and press "Enter"
      
      `);

    while ( thirdLevelOption > 3 || thirdLevelOption < 1) {
        thirdLevelOption = customConsole(`"The number of the option suppose to be between 1 and 3. Please, enter the correct number of option and press "Enter"
     `)};
    
     if(thirdLevelOption == 1){
        progress +=5
    }else if(thirdLevelOption == 2){
        progress +=3
    }else if(thirdLevelOption == 3){
        progress  += 0
    };
};