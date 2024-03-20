"use strict";
//DAY 19 
//TASK 1 (double number in an array)
//start with the list of numbers
let numbers = [1, 2, 3, 4, 5];
let doublednumbers = numbers.map(number => number * 2); //doubles each number 
console.log(doublednumbers);
//output:[2,,4,6,8,10]
//this line takes each number , doubles it, and puts it in a new list.
//TASK 2 (keep only strings)
//A Mixed bag of items
let mixedarray = [1, "Mango", 2, "Strawberry", true, "potato"];
let stringarray = mixedarray.filter(item => typeof item === "string"); //Picks out only the words
console.log(stringarray);
//output:["mango","strawberry","potato"];
//this line checks each item: if its a word , it goes into the new one
//TASK 3 (find the average Grade)
//A List of Grades
let grades = [22, 45, 67, 80];
let averageGrade = grades.reduce((total, grade) => total + grade, 0) / grades.length; //calculate the average grade
console.log(averageGrade); //first we are adding all the grades. Then , we divide by how many grades there are to get the average.
