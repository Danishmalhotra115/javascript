const course ={
    courseName:'Js in hindi',
    courseFee:999,
    courseInstructor:"Danish"
}

    
//destrcuturing of objects
console.log(course.courseFee)

const {courseName}=course

console.log(courseName)

const {courseName : Name}=course
console.log(Name)