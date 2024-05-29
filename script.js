// assignment questions

// let city = prompt("Enter to city")
// if (city === "karachi") {
//     alert("welcome to the city of light")
// }
// else{
//     alert("not welcome");
// }


// let gender = prompt("enter your gender")
//  if (gender === "male"){
//     alert("Good morning sir")
//  }
// else if (gender === "female"){
//     alert("Good morning ma am")
// }
// else{
//     alert("other")
// }


// let color = prompt("Input color of road traffic signal")
// if (color === "red"){
//     alert("Must stop")
// }
// else if (color === "yellow"){
//     alert("ready to move")
// }
// else if(color === "green"){
//     alert ("move now")
// }
// else {
//     alert("not requirded")
// }

// CHAP 15 ARRAY when u have amount of collections

// var city0 = "Atlanta";
// var city1 = "Baltimore";
//var city2 = "Chicago"; 
//var city3 = "Denver";
//var city4 = "Los Angeles";
// var city5 = "Seattle";

//    console.log("Welcome to" +"  "+ city3);


//ARRAYS PROPERTY
// array with string 
// let cities = ["Atlanta" , "Baltimore" , "Chicago" ,  "Denver" , "Los Angeles" , "Seattle"]
// console.log(cities[1].length);
// console.log(cities[3].length);


// // array with integers 
// let number = [1, 5 ,78 ,33 ,233 ,55,67 ,8]
// console.log(number[4].length);   


// // array with integers and strings
// let info = ["kainat" , 22 , "laiba" , 221 ,"anoosha" , 33]
// console.log(info[0].length);


// arrays with strings bullian and itegers if bullian and itegers are un commas tahan it consider both in length(count)
// let mixedarray = [1 , "kainat" , true , false , 33, 33 ,5 ,4]
// console.log(mixedarray.length);
// console.log(mixedarray);


// // ARRAYS METHOD CHP 16
// // PUSH () ADD TO END (KOI CHEEZ ADD KRANI HO ARRAY M)
// let citiesS = ["Atlanta" , "Baltimore" , "Chicago" ,  "Denver" , "Los Angeles" , "Seattle"]
// console.log(citiesS.push("Pakistan" , "india"));
// console.log(citiesS);

// // or
// citiesS.push("india")
// console.log(citiesS);


// // pop  which remove  the end one by one delete hogi
// let Cities = ["Atlanta" , "Baltimore" , "Chicago" ,  "Denver" , "Los Angeles" , "Seattle"]
// console.log(Cities.push("Pakistan" , "india"));

// Cities.pop("India")
// console.log(Cities);

// // to string .............convert array into strings
// let Citiess = ["Atlanta" , "Baltimore" , "Chicago" ,  "Denver" , "Los Angeles" , "Seattle" , 1, 2, 3]

// console.log(Citiess);
// console.log(Citiess.toString());

// // concat
// let myGirl = ["laiba","anoosha"];
// let myBoys = ["rafay", "saad", "talha"]
// let myChildren = myGirl.concat(myBoys)
// console.log(myChildren);

// // unshift ... array ki start m add kryga
// let fruits = ["banana", "apple" ,"mango"]
// fruits.unshift("lemon","grapes",67)
// console.log(fruits);

// // shift .. start s delete krwayga opposte of pop
// let animals = ["monkey","cat", "dog"]

// animals.shift()
// console.log(animals);


// console.log(animals.shift());
// console.log(animals);

// // slice.... means piece value.. return a piece of the array
// let Fruits = ["banana", "apple" ,"mango", "lemon","strawbery","orange"]
// console.log(Fruits);
// let piece_Of_Array = Fruits.slice(-1,5) //negative not have the value of 0 it start with opposite side  ..negative m reverse order m aayga
// //  empty strings because bri value positive hoti h
//  console.log(piece_Of_Array);   

// //  splice  .. in original array we remove, add, replace
// let months = ["january", "feb","march","april","may","june","july","aug","sep"] 
// let days = months.splice(2,5, "friday"); //2 is the number we choose and 5 is the counting to reach it .. friday is a replacing value.. firdt start up second remove and third is replace.. agr kch b h delete nh krwana tou 0

// console.log(days);
// console.log(months);



// // activity questions
// let Companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"]
// Companies.shift();
// console.log(Companies);

// var company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM","Netflix"]
// company.splice(2,2,"ola")
// console.log(company);


// 1.Declare an empty array using JS literal notation to store student names in future.
let studentnames = []
    console.log(studentnames);
    
    // Declare and initialize a strings array.
 let cities = ["karachi","lahore","islamabad","peshawar"]
 console.log(cities);   
 
//  2. Declare and initialize a numbers array.
 let number = [1,2,3,4,5,6,7,8]
 console.log(number);

//  3. Declare and initialize a boolean array.
let boolean = [true,false]
console.log(boolean);

// 4. Declare and initialize a mixed array.
let mixedarray = [true,false,"kainat",1,3,"laiba",8]
console.log(mixedarray);

// 5 Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed  qualifications in your browser like:
let qualification = ["SSC","HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"]
console.log(qualification);
document.write("Qualification","<br>",qualification, "<br>","<br>","<br>")



// 6. Write a program to store 3 student names in an array.Takeanother array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
let studentName = ["michael","john","tony"]
let studentScore = [320,230,480]
let total = 500
let percerntege1 = (studentScore[0] / total) * 100;
let percerntege2 = (studentScore[1] / total) * 100;
let percerntege3 = (studentScore[2] / total) * 100;
document.write ("score of  " + studentName[0] + "  is " + studentScore[0] +"." + "percentage  is " + percerntege1 + "%" + "<br>")
document.write ("score of  " + studentName[1] + "  is " + studentScore[1] +"." + "percentage  is " + percerntege2 + "%" + "<br>")
document.write ("score of  " + studentName[2] + "  is " + studentScore[2] +"." + "percentage  is " + percerntege3 + "%" + "<br>")