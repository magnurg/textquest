const color = require('colors');
import { progress } from "./userinterface"

let win:string = "Congratulation! You are employed again!"
let loose:string = "You lazy piece of junk. To be homeless is your destiny"
export function result(){
    if(progress > 9){
        console.log(color.bold.green(win))
    }else{
        console.log(color.red(loose));
        return;
    };
    
};