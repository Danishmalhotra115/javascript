console.log(this)                 //here this will point to empty object but in case of browser it points to window 


/* user={
    username:"Danish",
    welcome:function(){
        return `welcome ${this.username}`
    }
}
console.log(user.welcome())*/




/*const user=function(){
    username="Danish"
    return `welcome ${this.username}`
}
console.log(user())*/



/*function user(){
    username="Danish"
    return `welcome ${this.username}`
}
console.log(user())*/



/*const user=()=>{
    username="Danish"
    return `welcome ${this.username}`                   //this will function as usual ain all the above cases but in arraw function it will give undefined because this does not work in arraow function 
}
console.log(user())*/



//const sum=()=> 2+3

//const sum=()=> (2+3)                               we can also return any statemnt without using return statemnet like this without curly brackets but if we use curly brackets then we have to use return statement

//const returnObject=()=> ({username:"Danish"})      



console.log(returnObject())

