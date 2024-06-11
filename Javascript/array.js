//It is a common practice to declare arrays with the const keyword.

//Declaration

const cars = ["opel", "Volvo", "BMW"];


/*
const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";


const cars = new Array("Saab", "Volvo", "BMW");*/

console.log(cars.toString())
console.log(typeof(cars))
console.log(cars.length)

/*for(let i=0;i<3;i++){
    console.log(cars[i])
}*/

/********************************foreach function***************************/

cars.forEach((s)=>{
    console.log(s)
})
console.log(Array.isArray(cars))