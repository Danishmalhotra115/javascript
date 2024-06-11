//const myNums=[6,2,3,4,5,6,7,8,9,10]
/*const newNums=myNums.filter((num)=> num>4)
console.log(newNums)*/


/*const newNums=myNums.filter((num)=>{
    return num>4
})
console.log(newNums)*/

//map Keyword
/*const myNums=[1,2,3,4,5,6,7,8,9]
const my=myNums.map((num)=>num+10)
console.log(my)*/


//chaining 
const myNumbers=[1,2,3,4,5,6,7,8,9]
const newNums=myNumbers
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40)

console.log(newNums)


