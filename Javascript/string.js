// const name="Danish"
// const repoCount=59;

// console.log(`My name is ${name} and I have ${repoCount} repo`);


const gameName =new String("GTA");
console.log(gameName); // String is not an array it is basically an object 
                       //which stores data in key value form like shown below
                       /*
                       0:'G';
                       1:'T'
                       2:'A'
                       */

console.log(gameName[0]);

console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('T'));



console.log(gameName.substring(0,1));

console.log(gameName.slice(0,2));


const newString="     Danish    ";
console.log(newString);
console.log(newString.trim());

const url="https://danish.com/danish%20malhotra"
console.log(url.replace('%20','-'));

console.log(url.includes("danish"));

const name="Danish-Malhotra-15"
console.log(name.split('-'));
                