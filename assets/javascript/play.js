// testing = [1, 2, 3, 5, 7, 8, 8, 9, 9];
testing = "Madonna";

var x = 5;

var emptyArray = [];
for (i = 0; i < testing.length; i++) {
  emptyArray = testing.split("");
  console.log(emptyArray);
}

//Split the array using empty string .split('')

months.splice(4, 1, "May");
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

function doSomething() {
  if (testing.indexOf(x)) {
    var results = testing.splice(testing.indexOf(x));
    console.log(results);
  }
}

doSomething();

list.splice(list.indexOf("foo"), 1);

// Check if X exists in the array testing.Check
// if  x exists more than once remove all values of x..

// if not continue with Program

// var arrayLength = testing.length;
// console.log(arrayLength);

// function parent() {
//     for(x=0 ; x<=arrayLength; x++ )
//   if (arrayLength > 0) {
//     doSomething();
//     arrayLength--;
//     console.log(x);
//   }
// }
// parent();

// x = 9;
// function parent2() {
//   if (x > 0) {
//     x--;
//     console.log(x);
//   }
//   else {
//       console.log("DONE")
//   }
// }
// parent2()

// computerOptions();
// console.log(computerGeneratedOption);
// for (x=0; x<= computerGeneratedOption.length ; x++){

// }

// ===============

var months = [
  "Jan",
  "March",
  "Jan",
  "April",
  "Jan",
  "April",
  "December",
  "Jan",
  "Nov"
];

console.log("Original Months:", months);
var x = "Jan";

// Problem: Remove all occurances of "Jan" in months list

// Solution 1:
// I can hardcode by eyeballing where Jan is in the list

// months.splice(0, 1)
// months.splice(3, 1)

// This fails when Jan is not positioned in the same spot of the array.
// Also the ordering of which index we delete matters. We'd have to
// start our deletion starting from the end of the array rather then the
// begining

// Solution 2:
// Each time we want to delete an item, just find the next index of "Jan" and delete it

// This fails when there are more than two occurences of Jan in the array.
// In other words I would have to make a new call to array.splice for each
// ocurrance of Jan. If the number of Jan occurances is dynamic, this will be hard to do.

// months.splice(months.indexOf("Jan"), 1)
// months.splice(months.indexOf("Jan"), 1)

// Lets find a better Solution:
// SOlution 3:
// Lets talk about the problem:
/*

We need to find each index of Jan
After, we delete Jan in each of those indeces

that mean we need to keep track of Jan's locations
*/

// var janLocations = []
// for (let i = 0; i < months.length; i++){
//   if(months[i] === "Jan") {
//     janLocations.push(i)

//   }
// }

// console.log("Jan Locations:", janLocations)

// // now we know all the locations of Jan
// // let's remove Jan
// for (let i = janLocations.length - 1; i >= 0; i--){
//   months.splice(janLocations[i], 1)
// }

// console.log("Spliced Months:", months)

/* 
okay this works. But i'm doing two loops. Imagine having to loop through an array of 1 million
months, TWICE. Is there any way to avoid the last loop? hmm...

So in the first loop, I'm tracking Jan's locations. THe second loop, I'm delete Jan in each
of its locations. Why couldnt i just delete Jan when i found it in the first loop?

*/

//for (let i = 0; i < months.length; i++) {
//  if (months[i] === "Jan") {
//    months.splice(i, 1);
//  }
//}

/*
This doesnt completely work. If Jan is located in the array consecutively, then only the first instance
of the consecutive pair will be deleted. For ex: 
['Jan', 'Jan', 'March', 'Jan', 'April', 'Jan', 'April', "December", "Jan", "Nov"]
will result in 
["Jan", "March", "April", "April", "December", "Nov"]

We seem to have that problem from the first solution, where order of the deletions mattered.
Lets try deleting from the end of the array first and working our way backwards.
*/

// Solution:

for (let i = months.length - 1; i >= 0; i--) {
  if (months[i] === "Jan") {
    months.splice(i, 1);
  }
}

/*
This Works!
ex: ['Jan', 'Jan', 'March', 'Jan', 'April', 'Jan', 'April', "December", "Jan", "Nov"]
will result in 
[March", "April", "April", "December", "Nov"]

Great. 
Is There is still a performance concern for very large array?
How does splice work?
Does it iterate through the array each time its called?

Any, the problem is solved. lets move on.!
*/

//for (i =0; i < months.length ;i ++){
//  var numberofMonths= months.indexOf(x)   // 0 ,4
//  months.splice(0 , numberofMonths)
//
//}

//months.splice(1,1);
// replaces 1 element at 4th index
//console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']
