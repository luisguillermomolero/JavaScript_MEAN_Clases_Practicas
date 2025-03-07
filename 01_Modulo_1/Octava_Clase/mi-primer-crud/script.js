var users = [];
var currentId = 1;
var userForm = document.getElementById("userForm");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var addressInput = document.getElementById("address");
var dobInput = document.getElementById("dob");
var userTableBody = document.getElementById("userTableBody");
var userIdInput = document.getElementById("userId");
userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var id = userIdInput.value ? parseInt(userIdInput.value) : currentId++;
  var name = nameInput.value;
  var email = emailInput.value;
  var phone = phoneInput.value;
  var address = addressInput.value;
  var dob = dobInput.value;
  if (userIdInput.value) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users[i] = {
          id: id,
          name: name,
          email: email,
          phone: phone,
          address: address,
          dob: dob,
        };
        break;
      }
    }
  } else {
    users.push({
      id: id,
      name: name,
      email: email,
      phone: phone,
      address: address,
      dob: dob,
    });
  }
  userForm.reset();
  userIdInput.value = "";
  renderUsers();
});
function renderUsers() {
  userTableBody.innerHTML = "";
  users.forEach(function (user) {
    var row = document.createElement("tr");
    row.innerHTML = "\n          <td>"
      .concat(user.name, "</td>\n          <td>")
      .concat(user.email, "</td>\n          <td>")
      .concat(user.phone, "</td>\n          <td>")
      .concat(user.address, "</td>\n          <td>")
      .concat(
        user.dob,
        '</td>\n          <td>\n              <button onclick="editUser('
      )
      .concat(
        user.id,
        ')">Editar</button>\n              <button onclick="deleteUser('
      )
      .concat(user.id, ')">Eliminar</button>\n          </td>\n      ');
    userTableBody.appendChild(row);
  });
}
function editUser(id) {
  for (var i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      var user = users[i];
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
function deleteUser(id) {
  users = users.filter(function (user) {
    return user.id !== id;
  });
  renderUsers();
}
