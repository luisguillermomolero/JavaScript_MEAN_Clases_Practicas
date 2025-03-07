interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
}

let users: User[] = [];
let currentId = 1;

const userForm = document.getElementById("userForm") as HTMLFormElement;
const nameInput = document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const addressInput = document.getElementById("address") as HTMLInputElement;
const dobInput = document.getElementById("dob") as HTMLInputElement;
const userTableBody = document.getElementById(
  "userTableBody"
) as HTMLTableSectionElement;
const userIdInput = document.getElementById("userId") as HTMLInputElement;

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = userIdInput.value ? parseInt(userIdInput.value) : currentId++;
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const address = addressInput.value;
  const dob = dobInput.value;

  if (userIdInput.value) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users[i] = { id, name, email, phone, address, dob };
        break;
      }
    }
  } else {
    users.push({ id, name, email, phone, address, dob });
  }

  userForm.reset();
  userIdInput.value = "";
  renderUsers();
});

function renderUsers() {
  userTableBody.innerHTML = "";
  users.forEach((user) => {
    const row = document.createElement("tr");

    row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.address}</td>
          <td>${user.dob}</td>
          <td>
              <button onclick="editUser(${user.id})">Editar</button>
              <button onclick="deleteUser(${user.id})">Eliminar</button>
          </td>
      `;

    userTableBody.appendChild(row);
  });
}

function editUser(id: number) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      const user = users[i];
      nameInput.value = user.name;
      emailInput.value = user.email;
      phoneInput.value = user.phone;
      addressInput.value = user.address;
      dobInput.value = user.dob;
      userIdInput.value = String(user.id);
      break;
    }
  }
}

function deleteUser(id: number) {
  users = users.filter((user) => user.id !== id);
  renderUsers();
}
