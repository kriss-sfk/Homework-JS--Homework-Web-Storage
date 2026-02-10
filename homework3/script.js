//Homework
//1. Convert Minutes to Seconds
//Write a function named minutesToSeconds that takes a single 
//parameter representing a number of minutes. 
// The function should calculate how many seconds 
// are in that many minutes and return the result. 
// For example, if the input is 5, the function should return 300. 
// Make sure the function handles any positive number input.

function minutesToSeconds ( minutes) {
    return minutes * 60;

}

// TESTING:
console.log(minutesToSeconds(1));   // print 60
console.log(minutesToSeconds(5));   // print 300
console.log(minutesToSeconds(10));  // print 600

//2. Greeting by Name
//Write a function named greetPerson that takes one 
// parameter called name. The function should return a 
// string that greets the person by name, for example, 
// "Hello, Maria!" if the input is "Maria".

function greetPerson(name) {
  return "hello" + " " + name + "!";
}
console.log(greetPerson("Maria")); // hello Maria!
console.log(greetPerson("Marko")); // hello Marko!
console.log(greetPerson("Ana"));   // hello Ana!

//3. Find the Larger Number
//Write a function named maxNumber that takes two parameters, 
// a and b, which are numbers. The function should compare 
// the two numbers and return the larger one. If both numbers 
// are equal, it can return either one. For example, 
// maxNumber(7, 10) should return 10.

function maxNumber(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maxNumber(7, 10)); // 10
console.log(maxNumber(12, 5)); // 12
console.log(maxNumber(8, 8));  // 8

//4.4. Delayed Action Logger
//Imagine you are building a notification system that 
//needs to perform an action after logging an event. 
// Write a function named logAndRun that takes a single 
// parameter called callback, which is a function. 
// Inside logAndRun, first log a message like "Event recorded,
//  executing next step..." to the console, then immediately 
// call the callback function. This simulates real-world 
// scenarios where logging or auditing happens before 
// triggering another process.

function logAndRun(callback) {
  console.log("Event recorded, executing next step...");
  callback();
}

//5.Function That Spawns Another Function
//Write a function called createLogger that doesn’t take 
//any parameters but returns a new function. When you call 
// the returned function, it should print a fun message to 
// the console, like "Hey! The inner function just ran!". 
// This exercise will let you play with functions that 
// produce other functions and give you a hands-on feel 
// for closures.

function createLogger() {
  return function () {
    console.log("hey! inner function just ran!");
  };
}