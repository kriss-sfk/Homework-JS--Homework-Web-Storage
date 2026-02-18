/*Task 1 — Easy Visit Counter Create a page that counts 
how many times the user has visited it. Every time the page 
loads, increase the counter by one and display something like 
“You have visited this page 7 times.” Store the counter in 
localStorage. If the user has never visited before, the counter 
should start at 1. Make sure the number increases correctly after 
every refresh. Do not use global variables to track visits — it 
must rely on storage.*/

let visitCount = localStorage.getItem ("visitcount");
if (visitCount === null) {
    visitCount = +1;
} else {
    visitCount = Number(viwiwtCount)+1;

}

localStorage.setItem("visitCount", visitCount)
document.getElementById("messagetext").textContent "youvisited the page"
+visitCount+"times";

//TASK 2
//Task 2 — Medium
/*Remember Form Draft Automatically
Create a small form with at least three fields: name, email, and message. As the user types, automatically save the form data into localStorage without needing to click a save button.
If the user refreshes the page, the form should automatically repopulate with the saved values. Add a “Clear Form” button that clears both the inputs and the stored data.
This task forces you to think about structured data storage using JSON.stringify() and JSON.parse().*/

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const clearBtn = document.getElementById("clearBtn");

const STORAGE_KEY = "savedFormData";
window.addEventListener("DOMContentLoaded", function () {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const data = JSON.parse(savedData);

    nameInput.value = data.name || "";
    emailInput.value = data.email || "";
    messageInput.value = data.message || "";
  }
});

function saveData() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

nameInput.addEventListener("input", saveData);
emailInput.addEventListener("input", saveData);
messageInput.addEventListener("input", saveData);

clearBtn.addEventListener("click", function () {
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";

  localStorage.removeItem(STORAGE_KEY);
});

//TASK 3

const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const addUserBtn = document.getElementById("addUserBtn");
const userList = document.getElementById("userList");

const STORAGE_KEY = "usersData";

function getUsers() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

function saveUsers(users) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

function renderUsers() {
    userList.innerHTML = ""; 

    const users = getUsers();

    users.forEach((user, index) => {
        const card = document.createElement("div");
        card.classList.add("user-card");

        const info = document.createElement("div");
        info.innerHTML = `<strong>${user.username}</strong><br>Age: ${user.age}`;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", () => {
            deleteUser(index);
        });

        card.appendChild(info);
        card.appendChild(deleteBtn);

        userList.appendChild(card);
    });
}

function addUser() {
    const username = usernameInput.value.trim();
    const age = ageInput.value.trim();

    if (username === "" || age === "") {
        alert("Please fill in all fields");
        return;
    }

    const users = getUsers();

    const newUser = {
        username: username,
        age: age
    };

    users.push(newUser);
    saveUsers(users);

    usernameInput.value = "";
    ageInput.value = "";

    renderUsers();
}

function deleteUser(index) {
    const users = getUsers();
    users.splice(index, 1);
    saveUsers(users);
    renderUsers();
}

document.addEventListener("DOMContentLoaded", renderUsers);

addUserBtn.addEventListener("click", addUser);