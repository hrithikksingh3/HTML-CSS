console.log("This is 51st file in this folder");

function greet(name,greettext = "greetings from javascript ") {
    let name1 = "name11";    //does not work because scope is local(within the block)
    console.log(greettext + ' ' + name);
    console.log(name + " is a good boy");
    // greetings from javascript is default value for greettext 
}

let name = "hrithik";
let name1 = "shubham";
let name2 = "saurabh";
let name3 = "rohan";
let name4 = "shiven";
let greetTexts = " Good morning "

// this is how we have to write if we dont use function 
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");

// calling the function 
greet(name , greetTexts);
greet(name1 , greetTexts);
greet(name2 , greetTexts);
greet(name3 , greetTexts);
greet(name4); //default value of greettext will appear here.

// here greetTexts and greettext are different but working because in function its just like (x,y) does not depent if its same or not 

// but this function is not returning anything 
// so the returning function is created below 

function sum(a,b,c){
    let d = a + b + c;
    return d;
    console.log("function is returned ") // this line will never execute because after return statement no line will be executable. (unreachable code).
}

let returnVal = sum(1,2,3);
console.log(returnVal);