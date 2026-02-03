// Homework

let book = {
  title: "The Trial",
  author: "Franz Kafka",
  pages: 240
};
let book = {
  title: "The Trial",
  author: "Franz Kafka",
  pages: 240
};

console.log(book.title);

book.year = 1925;

console.log(book);
//TASK 3

let student = {
  name: "Maya",
  grades: [14, 16, 18, 15]
};

student.grades.push(17);
student.grades.shift();

console.log(student.grades);
console.log(student);

//PART 2 

// TASK 1

let numbers = [3, 10, 25, 7, 18, 2];

let filteredNumbers = numbers.filter(num => num > 10);

console.log(filteredNumbers);

//TASK 2
let prices = [5, 12, 20, 8];

let increasedPrices = prices.map(price => price * 1.2);

console.log(increasedPrices);

//Task 3 
let users = [
  { name: "Nina", age: 32 },
  { name: "Alex", age: 19 },
  { name: "Tom", age: 25 },
  { name: "Eva", age: 41 }
];

let foundUser = users.find(user => user.name === "Tom");

console.log(foundUser);
users.sort((a, b) => a.age - b.age);

console.log(users);