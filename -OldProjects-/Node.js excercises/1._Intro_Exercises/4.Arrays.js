// --------------------------------------
// Arrays, for loops
// --------------------------------------
// Exercise 1 - Array Positioning

const letters = ["a","b","c"];
// show b in the console 




// --------------------------------------
// Exercise 2 - Array Positioning

const friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

const bob = {"Name": "Silent Bob","Number": "69"}

const jay = {"Name": "jay","Number": "420"}
 
const saints = {"Name": "Boondock","Number": "101"}

friends.push(bob,jay,saints);
// --------------------------------------
// Exercise 3 - Get the index of first occurance of that value. 

const significantMathNumbers = [0, 2.718, 3.14159, 1729];

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

let position = significantMathNumbers.indexOf(1729)

// --------------------------------------
// Exercise 4 - Inserting elements

const diet = ["tomato", "cucumber", "rocket"];

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements cucumber and rocket

diet.splice(2, 0, "hamburger","soda","pizza");

// newDiet contains the deleted elements in this case nothing was deleted

// --------------------------------------
// Exercise 5 - Remove element

// Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop();

// --------------------------------------
// Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend. 

//reference
//const dinnerTray = diet
//reference
//const dinnerTray = [...diet];

dinnerTray = diet.map((x) => x);

//From solution
//const dinnerTrayOne = diet.slice();
//const dinnerTrayTwo = [...diet]; // ... - the spread operator


// --------------------------------------
// Exercise 7 - For loop

const lettersExpanded = ["a", "b", "c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for(i = 0; i<lettersExpanded.length; i++){
}



// --------------------------------------
// Exercise 8 - For loop and if statement

const numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

const discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for(i = 0; i<numbers.length; i++){
    if(numbers[i] < 0 || numbers[i]> 6 )
    console.log(numbers[i]);
else{
discardedNumbers.push([i]);
}}


console.log(discardedNumbers);
// --------------------------------------
