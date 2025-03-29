//arthimetic operators
// let a = 5;
// let b = 6;

// console.log("a=",a, " & b=",b);
// console.log("a - b", a - b);
// console.log("a * b", a * b);
// console.log("a + b",a+b )
// console.log("a/b", a/b)
// console.log("a % b", a % b);
// console.log("a ** b", a**b);


// let a = 2
// let b = 5

// console.log("a=",a, "& b=",b);

// // console.log("a=",++a,"& b=",--b);


//assignment operators

// let a = 2;
// let b = 3;

//  a /=4;
//  b /=2;
// console.log("a",a);
// console.log("b",b);


//comparision operator

// let a = 5;
// let b = 4;

// console.log("5 > 4", a > b);

// logical operators
// let a = 3;
// let b = 3;

// let cond1 = 6
// let cond2 = 5

// console.log("!(6>5) = ",!(cond1 === 6) );



//conditional statements

//if statement

/*let age = 16;

if(age >= 18) {
    console.log("you can vote");
}

if(age < 18) {
    console.log("you cannot vote");
}*/

/*let mode ="dark";
let color;
if(mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color="white";
}


console.log(color);*/


//if-else statement

/*let mode = "blue";
let color;
if (mode === "dark"){
    color = "black";

}else{
    color = "white";
}

console.log(color);*/

/*let age = 17;

if(age >= 18){
    console.log("vote")
}else{
    console.log("cannot vote")
}*/

/*let age = 17;

if (age >= 18){
    console.log(" you can vote")
}
if (age < 18){
    console.log("you can't vote")
}*/


//odd or even numbers

/*let num = 7;

if(num % 3 === 0){
    console.log(num, "is even");
}else{
    console.log( num, "is odd");
}*/

//else-if statement

/*let mode = "white";
let color;

if (mode === "dark"){
    color = "black";
}else if (mode === "light"){
    color = "white";
}else if (mode === "blue"){
    color = "blue";
}else {
    color = "green";
}
console.log(color);*/

/*let age = 30;

let result = age >= 18 ? "adult" : "not adult"

console.log(result)*/


//practice

/*let num = prompt( "enter your name:");

if (num % 5 === 0){
    console.log(num, "is multiple of 5");
}else{
    console.log(num, "is not a multiple of 5")
}*/

/*let score = prompt("enter your score (0 - 100)");
let grade;

if (score >= 90 && score <= 100){
      grade = "A";
}else if(score >=70 && score <= 89){
    grade = "B";
}else if(score >= 60 && score <= 69){
    grade = "c";
}else if (score >= 50 && score <= 59 ){
    grade = "D";
}else if (score >= 30 && score <= 39){
    grade = "F";
}

console.log("Acourding to your scores, your grade was: ", grade);*/

//loops in J.S

// for loop

// for(i=1;i<= 5; i++){
//     console.log("apna collage");
// }


//calculate sum of 1 to n

// let sum = 0;
// let n = 5;

// for (i = 1; i <= n ; i++){
//     sum = sum + i;
// }

// console.log("sum=",sum);
// console.log("loop has ended")

// let sum = 0;
// let n = 0;
// for( let i = 1; i <=20; i ++){
//     sum = n + i;
//     console.log("sum = ",sum)
// }

// let a = 0;

// for(a=0; a<= 5; a ++){
//     a = a + a ;
//     console.log("a=",a);
// }

// while loop

// let i = 0;

// while(i<=100){
//     console.log("i=",i)
//     i++;
// }
// let i = 0;

// do{
//     console.log("Deva",i)
//     i++;
// }while(i<=10);


// let i = 0;
// do{
//     console.log("deva",i);
//     i++;
// }while(i<=10);


//for-of loop

// let str= "deva";

// for(let i of str){
//     console.log(i)
// }
// let str = "deva"
// let size = 0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size",size);


//for-in loop

// let student ={
//     name: "Deva",
//     age:20,
//     cgpa: 7.5,
//     ispass: true
// };

// for(let key in student){
//     console.log(key,student[key]);
// }

// let count = 0;
// let n=0
// for(count=1; count <= n ; count++){
//     count=count+count
// }
// console.log("count",count)

// let count = 5;
// let n=100;
//  for(count=1; count <= n; count++){
//     count=count+count;
   
//  }
//  console.log("count",count);

// let sum = 0;
// let n = 5;

// for (i = 1; i <= n ; i++){
//     sum = sum + i;
// }
// console.log("i=",i);

// let i = 0;

// while(i<=100){
//     console.log(i)
//     i++;
// }
// let i = 0;
// while(i<=100){
//     console.log(i)
//     i++;
// }
// // let i = 0;
// // for(i=0; i<= 50; i++){
// //     if(i % 2 ===0 )
// //     console.log(i)
// }

// practice q1 
// let i = 0;

// for(i = 1; i <=100; i ++){
//     if(i % 3 === 0){
//     console.log(i);
//     }
// }
// practice q2

// let gameNum = 25;

// let userNum = prompt("guess the numer:");
// while(userNum != gameNum){
//    userNum = prompt("you entered the wrong number:");
// }
// console.log("congratulations, you entered the right nmber");

// let gameNum = 25;

// let userNum = prompt("guess the game number:");

// while(userNum != gameNum){
//     userNum = prompt("you entered the wrong number:");

// }

// console.log("congratulations you are entered the right number");

// strings in j.s

// let str = "deva";

// console.log(str[3]);

// template literals and string lenght

// let specialstring = `this is a template literals `;
// console.log(specialstring);

// let obj = {
//     item : "pen",
//     price:20,
// };
// let result = `the cost of ${obj.item} is ${obj.price} rupees`
// console.log(result);

// let specialstring = `this is template litterals`;

// console.log(specialstring)

// let object = {
//     item: "pen",
//     price: 10,
// };

// let output = `the cost of ${object.item} is ${object.price} rupees`;
// console.log(output);

// console.log("cost of the ",obj.item, "is ", obj.price);

// let str = "deva\tdeva";

// console.log(str.length)

//string methods in js

//str.Uppercase();

// let str = "deva";
// str = str.toUpperCase();

// console.log(str);

//str.Lowercase();

// let str = "DREAM";
// str = str.toLowerCase();
// console.log(str);

// let str = "    collage       dream    ";
// console.log(str.trim());

//str.slice()

// let str = "deva";
// console.log(str.slice(1,3));

//str.concat(str2);

// let str1 = "deva";
// let str2 = "letha";

// let res = str2.concat(str1);
// console.log(res)

// let str3 = "apna";
// let str4 = "collage";

// let asnr = str3.concat(str4);

// console.log(asnr);

//str.charAt(index);

// let str = "deva";

// str = str.replace("d","g")
// console.log(str);           

// let FullName = prompt("Enter Your Fullname WIthout Spaces")

// let username = "@" + FullName + FullName.length;

// console.log(username);

//arrays in javascript

// let marks = [91,65,69,99,86]

// console.log(marks)

// let cricketteam = ["Dhoni","virat","dhanush","deva"]
// console.log(cricketteam);

// let arry = [12,25,36,95,25,54];
// console.log(arry[2] = 25,arry[5])

// Looping over an Arrays

// let ind= ["Dhoni","virat","dhanush","deva"]
// let i = 0;
// for(let i = 0; i < ind.length;i++ ){
//    console.log(ind[i]);
// }

// let actress = ["bejawada bekakka","madhavi latha","prabhas","allu arjun"]

// let i = 0;
// for(let i = 0; i<actress.length; i++){
//     console.log(actress[i]); 
// }


// let names= ["Dhoni","virat","dhanush","deva"]
// for(let i of names){
//     console.log(i)
// }


// let marks = [25,36,65,25,77]

// let sum = 0;

// for(let val of marks){
//    sum += val;
// }
// let avg  = sum/marks.length;
// console.log('avg marks of the student = ', avg);  

// let count = [25,66,96,58,58];

// let sum = 0;

// for(let val of count){
//     sum += val;
// }
// let  avg = sum/count.length;

// console.log('total count of avarage = ',avg);


// let prices = [250,645,300,900,50];

// for(let i = 0; i < prices.length; i++){
// let offer = prices [i] / 10;
// prices[i] -= offer;
// }

// console.log(prices)

// let product = [250,654,258,693];

// for(let i = 0; i < product.length; i++){
//     let offer = product [i]/ 15;
//     product [i] -= offer; 
// }

// console.log(product);

// let item = [120,150,170,360,888];

// for(let i = 0;i < item.length; i++){
//     let offer = item[i]/15;
//     item[i] -= offer;
// }

// console.log(item)


//Array methis in js

//push() Add to end

// let veggies = ["appale", "orange", "pomogranade", "tomato"]

// veggies.push("deva","rahul");
// console.log(veggies);

//pop(); remove or delete end string value------

// let veggies = ["appale", "orange", "pomogranade", "tomato"]
// console.log(veggies)
// veggies.pop();
// console.log(veggies);
// let deletedveggies = veggies.pop();
// console.log(deletedveggies);

// let cras = ["merchidise","BMW","KIA","honda"]
// console.log(cras)
// let deletecar = cras.pop();
// console.log(deletecar);

// toString(); Converts arrays to strings


// let veggies = ["appale", "orange", "pomogranade", "tomato"]

// console.log(veggies);
// console.log(veggies.toString(veggies));

// concat(); joins multiple arrays & returns the results

// let marvelHeroes = ["thor","iron man","vanda","spiderman"];
// let dcHero = ["batman","superman","wonderwomen"]

// let heroes = marvelHeroes.concat(dcHero);

// console.log(heroes)

// unshift(); Adding at start point ,

// let marvelHeroes = ["thor","iron man","vanda","spiderman"];
// marvelHeroes.unshift("loki");
// console.log(marvelHeroes)

// shift(); to delete in start 

// let marvelHeroes = ["thor","iron man","vanda","spiderman"];

// let val = marvelHeroes.shift();
// console.log("deleted value is ", val);
// console.log(marvelHeroes)

// let cars = ["kia","bmw","audi","marchidise"];

// let val = cars.shift();

// console.log(cars);

// console.log("deleted cra is ",val);

// slice(); return a piece of the array

// let temples = ["ganesh","shiva","durga matha","pedhamma thalli","saraswathi"];

// console.log(temples.slice(1,4));

// splice(); changes orginal array (add, delete, replace)

// let array = [1,2,3,5,6,7];

// array.splice(2,1,143,452);

// console.log(array);

// add element without deliting the acutal index value

// let number = [1,2,3,4,5,6,];

// number.splice(1,0,25);

// console.log(number)

// let age = [25,36,27,55,42,65];

// age.splice(1,1);

// console.log(age)

// practice qstn 1

// let companies = ["bloomerg","microsoft","uber","google","ibm","netflix"];


// companies.shift();
// console.log(companies);

// companies.splice(1,1,"ola");
// console.log(companies)

// companies.unshift("Amazon");
// console.log(companies)

// Functions in js

// function myFunction(){
//     console.log("well come to deva");
//     console.log("we are hering :)");
// }
// myFunction();
// myFunction();

// // function myFunction(msg){ //parameter-> input
// //     console.log(msg);
// }
// myFunction("i love shardha"); //argument

// Function -> 2 numbers, sum

// function Sum(a,b ){
//     console.log(a+b);
// }
// Sum(25,25);
// Sum(252,252);

// function sum(x,y){
//     s = x + y;
//     return s;
// }

// let val = sum(2,3);
// console.log(val);

// Arrow function compact way of writing a function 

//sum function
// function sum(a,b){
//     return a+b;
// }


// const a = 25;
// const b = 25;
// const arrowSum = (a,b) =>{
//     console.log(a+b);
// }
// console.log(a + b);

// //multiplication

// function mul(a,b){
//     return x*y;
// }

// const x = 2;
// const y = 2;
// const arrowmul = (x,y) => {
//     console.log(x * y);
// }

// console.log(arrowmul(5,2));

//practice 

// function countVowels (str) {
//     let count = 0;
//     for(const char of str) {
//         if (
//             char === "a" || 
//             char === "e" || 
//             char === "i" || 
//             char === "o" || 
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     return count;
// }

// const countVow = (str) =>{
//     let count =0;

//     for(const char of str){
//         if (
//             char ===  "a" ||
//             char ===  "e" ||
//             char ===  "i" ||
//             char ===  "o" ||
//             char ===  "u" 
//         ) {
//             count++;
//         }

//     }
//     console.log(count);
// }

// forEach Loop in arrays

// let arr = [1,2,3,4,5,6,];

// arr.forEach(function printval(val){
//     console.log(val);
// })

// let  str = ["delhi", "mumbai", "pune"];

// str.forEach((val, idx,arr) => {
//    console.log(val.toUpperCase(),idx,arr);
// });

// practice qstn

// let nums = [1,2,3,4,5,6];

// let calcSquare = (nums)=>{
//     console.log(nums * nums)
// };

// nums.forEach(calcSquare);

//map function in array

// let count = [25,36,56,86];

// let newArr = count.map((val)=>{
//     return val *2;
// });
// console.log(newArr)

// Filter in array

// let count = [2,6,56,86];

// let evencount = count.filter((val)=>{
//     return val % 2===0;
// });

// console.log(evencount);

// const array = [2,5,2,3,25];

// const  outpu = array.reduce((res,curr)=>{
//      return res + curr;
// });

// console.log(outpu);

// const array = [2,5,2,3,25];

// const  outpu = array.reduce((prev,curr)=>{
//      return prev > curr ? prev : curr;
// });

// console.log(outpu);

// let marks = [87,93,91,36,97,65];

// const output = marks.filter((val)=>{
//     return val > 90;
// });

// console.log(output);

// let n = prompt("enter a numer");

// let arr = [];

// for(let i=1; i<=n; i++){
//     arr[i-1] = i;
// }

// console.log(arr);

// const sum = arr.reduce((res,curr)=>{
//     return res + curr;
// });

// console.log(sum);

// let n = prompt("enter a numer");

// let arr = [];

// for(let i=1; i<=n; i++){
//     arr[i-1] = i;
// }

// console.log(arr);

// const factorial = arr.reduce((res,curr)=>{
//     return res * curr;
// });

// console.log(factorial);




// set prototype in js object 

// const employee = {
//     calTax () {
//         console.log("tax rate is 10%")
//     },
// };

// const lethaDeva = {
//     salary: 50000,
// };
// const lethaDeva1 = {
//     salary: 50000,
// };

// const lethaDeva2 = {
//     salary: 50000,
// };

// const lethaDeva3 = {
//     salary: 50000,
// };


// lethaDeva.__proto__ = employee

// console.log(lethaDeva)





// classes in js

// class toyotaCar {
//     constructor(brand,milage){
//     console.log("creating a new object");
//     this.brand = brand;
//     this.milage  = milage; 
//     }
//     start (){
//     console.log("start");
//     }
//     stop (){
//     console.log("stop");
//     }
   
// }

// let fortuner = new toyotaCar("fortuner",10);

// console.log(fortuner);
// let kia = new toyotaCar("fortuner",20);
// console.log(kia);


// callbacks in js


function sum (a,b){
    console.log(a + b);
}

function calculate(a , b , sumCallback){
    sumCallback(a , b);
}


calculate(2, 5, sum);