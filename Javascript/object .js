const song1={
    link:`https://google.com`,
    name:"Cold Mess",
    date:2005,
    start:function(){
        console.log("Song started")
    },
    fullname:function(){
        return this.name+" By Prateek Kuhad "
    }
}

console.log(`song name is ${song1.name} relesed in year of ${song1.date} and the link for the samew is ${song1.link}`)
console.log(song1["link"])
song1.start()
console.log(song1.fullname())

//this keyword
//if this keyword is used in an object than this will indicate that object;
//if this is used in any function not belonging to any object than this will go for global object that is window

const person1={
    firstName:"john",
    secondName:"Doe",
    fullname:function(){
        return this.firstName+" "+this.secondName;
    }
}
console.log(person1.fullname())

function globalObject(){
    console.log(this);
}
globalObject()

const video={
    title:'a',
    tags:['a','b','c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this,tag);
        },this);
    }
}
video.showTags()