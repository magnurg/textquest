const customConsole = require('prompt-sync')();
// 1. �������� �������� � ������ �����
let operationsArgs: string[] = ['1: addition','2: subtraction','3: dividing','4: multiplying'];
// 2. ���� FOR
for (let i = 0; i < operationsArgs.length; i++) {
        console.log(operationsArgs[i]);
    };
let operation: number = 0;
// 3. WHILE
while ( operation > 4 || operation < 1) {
    operation = customConsole(`"The number of the operation suppose to be between 1 and 4. Please, enter the number of operation and press "Enter"
    `)};
let number1: number = customConsole(`Please enter the first number and press "Enter"
    `);
let number2: number = customConsole(`Please enter the second number and press "Enter"
    `);
let resultNames: string[] = ['addition','subtraction','dividing','multiplying'];
let resultName: string = resultNames[operation-1];
// 4. �������, 4 ��.
function addition() {
    return +number1 + +number2
    };
function subtraction() {
    return number1 - number2
    };
function dividing() {
    return number1 / number2
    };
function multiplying() {
    return number1 * number2
    };
let result: number
// 5. ������� IF
if(operation == 1){
    result = addition();
}else if(operation == 2){
    result = subtraction();
}else if(operation == 3){
    result = dividing();
}else if(operation == 4){
    result = multiplying();
}
    
console.log(`The result of the ${resultName} is ${result}`);
operation = 0;
