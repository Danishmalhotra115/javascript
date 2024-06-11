//for of loop

/*
array specific loop


const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
    
}



const str="Hello World"
for (const greet of str) {
    if(greet==" ")
        {
            continue
        }
        else{

            console.log(greet)
        }
    
}*/



//MAPS

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

//console.log(map)

/*for (const [key,value ] of map) {
    console.log(key,":-", value)
    
}*/


/*const myObject={
    game1:'NFS',
    game2:'Spiderman'                        >NOt iiterable in this loop
}

for(const [key,value] of myObject){
    console.log(key,":- ",value)
}*/




/*const myObject={
    js:'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'Swift by Apple'
}
for (const key in myObject) {
    console.log(myObject[key])
}
for (const key in myObject) {
    console.log(key)
}

for (const key in myObject) {
    console.log(`${key} shortcut if for ${myObject[key]}`)
}
*/


/*const programming =["js","rb","py","java","cpp"]
for(const key in programming) {
    console.log(key);
}

for(const key in programming) {
    console.log(programming[key]);
}
*/



//FOr Each Loop

const coding =["js","rb","py","java","cpp"]
/*coding.forEach(function (item) {
    console.log(item);
})

coding.forEach((val)=>{
    console.log(val)
});


function printMe(item){
    console.log(item)
}
coding.forEach(printMe)*/


/*coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})*/

const myCoding =[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

myCoding.forEach((val)=>{
    console.log(val.languageFileName)
})
