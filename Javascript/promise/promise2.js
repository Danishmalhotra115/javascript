/*let promise=new Promise((resolve,reject)=>{
const x='geeksforgeeks'
const y="geesforgeeks"

if(x==y){
    resolve()
}
else{
    reject()
}
})
.then(()=>{
    console.log("You are a geek")
})
.catch(()=>{
    console.log("Something went wrong")
})*/



/*let promise=new Promise((resolve,reject)=>{
resolve("geeks for geeks");

})
promise.then((successMessage)=>{
    console.log(successMessage)
},(errorMessage)=>{
    console.log(errorMessage)
})*/



let promise=new Promise((resolve,reject)=>{
reject("Promise Rejected")
})

promise.then((sucessMessage)=>{
    console.log(sucessMessage)
}).catch((errorMessage)=>{
console.log(errorMessage)
})