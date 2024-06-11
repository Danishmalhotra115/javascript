/*function addTwoNumber(number1,number2){
    return number1+number2
}
console.log(addTwoNumber(3,4))*/

const { userInfo } = require("os")
const { callbackify } = require("util")




/*
function addTwoNumber(number1,number2){
    console.log(number1+number2)
}                                            //This code snippet will give undefined result because function is not returning any value
const result=addTwoNumber(3,4)
console.log(result)*/






/*function enterUsername(username="Virat"){
    return `${username} Logged in`
}
console.log(enterUsername("Danish"))*/



//function with unknown number of parametersz
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(500,600,300))
//... here is called rest operator and is used to return parameters with unknown amount





//passing object in function 
/*const user={
    name:"Danish",
    post:"Founder",
    companyName:"Quality Leather Crafts"
}

function UserInformation(object1){
    return `${object1.name} is the ${object1.post} at ${object1.companyName}`
}
console.log(UserInformation(user))*/





//passing array in function
/*const array1=[1,4,5,2,3]

function returnSecondElement(array){
    console.log(array[1])
}
returnSecondElement(array1)*/


console.log(addOne(3))
function addOne(num1){
    return num1+1;
}
console

