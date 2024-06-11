const { error } = require("console");
const { resolveEnvPrefix } = require("vite");

/*const promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async task is completed")
        resolve('Task completed');
    },1000)
})
promiseOne.then((sucessMessage)=>{
    console.log(sucessMessage)
}).catch((errorMEssage)=>{
    console.log(errorMEssage)
})*/

/*const promise3=new Promise((resolve,reject)=>{
    setInterval(()=>{
        resolve({"username":"Danish","id":"dishu.malhotra15@gmail.com"})
    },1000)
})
promise3.then((user)=>{
    console.log(user)
})*/


/*const promise4=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({"username":"Danish","password":"12345"})
        }
        else{
            reject("Error:something went wrong")
        }
    },1000)
})
promise4
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
console.log(username)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})*/ 









const promise5=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({"username":"Danish","password":"12344"})
        }
        else{
            reject("Something Went wrong")
        }
    },1000)


})
async function consumePromiseFive(){
    try{
    const response =await promise5
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()


/*async function getAllUsers(){
   try{
   const response =await fetch("https://jsonplaceholder.typicode.com/users")
   const data= await response.json()
   console.log(data)
   }
   catch(error){
    console.log("E:",error)
   }
}
getAllUsers()*/




/*fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
console.log(data)
})
.catch((error)=>{
    console.log(error)
})*/

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("Error:",error)
})

