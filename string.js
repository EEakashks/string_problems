// let str = "my name";
// let str1 = 'my place';
// let str2 =`home`;
// str.length;
// console.log(str2[0]);

// let str = 'Entri elevate Online program online platform';
// let str2 = 'this is it';
// let res = str.slice(6,13);
// console.log(res);
// let res = str.substring(6,13);
// console.log(res);
// let res = str.replace(/online/ig,'offline');
// console.log(res);
// let res = str.replaceAll(/online/gi,'offline');
// console.log(res);
// let res = str.toUpperCase();
// // console.log(res);
// let res = str.toLowerCase();
// console.log(res);
// let res = str.concat(" ",str2);
// console.log(res);
// let res = str.trim();
// console.log(res);
// let res = str.trimStart();
// console.log(res);
// let res = str.trimEnd();
// console.log(res);
// let text ="5";
// let res = text.padEnd(3,"p");
// console.log(res);
// let res = text.padStart(3,"p");
// console.log(res);
// let res = str.charAt(0);
// console.log(res);
// let nameStr = 'Entri,elevate,Online,program,online,platform';
// let res = nameStr.split(",");
// console.log(res);
// let r = require('readline-sync');
// Dynamically accept your name as input and convert it to upper case
// let name = r.question('Enter your name ');
// let res = name.toUpperCase();
// console.log(res);

// Dynamically accept your name as input and convert it to lower case
// let dynamicName = r.question('Enter your name ');
// let res = dynamicName.toLowerCase();
// console.log(res);

// Print how many times each repeating each character in this string
// var text = "ABCDAAB";
// var repeated = {};
// text.split('').forEach((ele)=> {
//   repeated[ele] = repeated[ele] ? repeated[ele] + 1 : 1;
// });
// console.log(repeated);
// let str = "Entri elevate program";
// let res = str.indexOf("elevate",10)
// console.log(res);
// let str = "Entri elevate program elevate";
// let res = str.lastIndexOf("elevate",)
// console.log(res);
// let res =  str.match(/elevate/g);
// console.log(res);
// let res = str.matchAll('elevate')
// console.log(res);
// let res = 

//REst parameter

// function rest(a,b,...args){
//   console.log(args);
// }
// rest(1,2,3,4,5)
// function rest(){
//   console.log(arguments[2]);
// }
// rest(1,2,3,4,5)

//spread operator

// let arr = [10,20,60,30,40];
// let res = Math.max(...arr);
// console.log(res);
// let arr1 =[10,120,30,40,50,60];
// let arr2 = [100,1200,300,400];
// let res = [...arr1,1,2,...arr2];
// console.log(res);
// let newArray = [...arr1];

// let str = "India is my country, I love India";

// //Find the index of the first word 'India' in the above string
// let res = str.indexOf('India')
// console.log(res);

// //Find the index of the last word 'India' in the above string
// let res = str.lastIndexOf('India');
// console.log(res);

// //Find the index of the first word 'india' in the above string
// let res = str.search(/india/i);
// console.log(res);

// //Find the all the matches of the word 'india' in the above string
// let res = str.match(/india/gi);
// console.log(res);

// //Check the word 'India' included in the above string
// let res = str.includes('India');
// console.log(res);

// //Check above string start with the word 'India'
// let res = str.startsWith('India');
// console.log(res);

// //Check the above string end with the word 'India'
// let res = str.endsWith('India');
// console.log(res);

// //Define a function to find the sum of any number of arguments we pass to it.
// function sum() {
//     let total = 0;
//     for (let arg of arguments) {
//       total += arg;
//     }
//     console.log(total);
//   }
//   sum(1,2,3,4,5,6,4)
  

// //Merge 2 arrays using spread operator
// let arr1 = [1,2,3,4,2];
// let arr2 = [3,5,7,9];
// let res = [...arr1,...arr2];
// console.log(res);

// //Create a deep clone of an array
// let arr = [1,2,3,4,5,3,1]
// let newArray = [...arr];
// newArray[0] = 99;
// console.log(arr);
// console.log(newArray);

