const myNums=[1,2,3]
const myTotal=myNums.reduce((acc,current)=>{
    console.log(`acc:${acc} and current:${current}`)
    return acc+current
},0)
console.log(myTotal)

const course=[
    {
        courseName:"Js course",
        price:3999
    },
    {
        courseName:"Py course",
        price:999
    },
    {
        courseName:"MObile dev course",
        price:12999
    }
]
const TotalPrice=course.reduce((acc,item)=>acc+item.price,0)
console.log(TotalPrice)