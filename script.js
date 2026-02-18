// TASK 1 — Easy Visit Counter
let visitCount = localStorage.getItem("visitCount");
if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = Number(visitCount) + 1;
}
localStorage.setItem("visitCount", visitCount);
document.getElementById("messagetext").textContent = 
    "You visited the page " + visitCount + " times.";

// TASK 2 — Medium: Remember Form Draft Automatically
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn");

const FORM_STORAGE_KEY = "savedFormData";

window.addEventListener("DOMContentLoaded", function () {
    const savedData = localStorage.getItem(FORM_STORAGE_KEY);
    if (savedData) {
        const data = JSON.parse(savedData);
        nameInput.value = data.name || "";
        emailInput.value = data.email || "";
        messageInput.value = data.message || "";
    }
});

function saveFormData() {
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    };
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
}

nameInput.addEventListener("input", saveFormData);
emailInput.addEventListener("input", saveFormData);
messageInput.addEventListener("input", saveFormData);

clearBtn.addEventListener("click", function () {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    localStorage.removeItem(FORM_STORAGE_KEY);
});

// TASK 3 — User Profile System
const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const addUserBtn = document.getElementById("addUserBtn");
const userList = document.getElementById("userList");

const USERS_STORAGE_KEY = "usersData";

function getUsers() {
    const data = localStorage.getItem(USERS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveUsers(users) {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
}

function renderUsers() {
    userList.innerHTML = "";
    const users = getUsers();

    users.forEach((user, index) => {
        const card = document.createElement("


document.addEventListener("DOMContentLoaded", renderUsers);

addUserBtn.addEventListener("click", addUser);
=======
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
>>>>>>> eafbe6ef1a93d51a1914b63be58c0dbc50a03b8a
