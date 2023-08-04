let info = [];
let editText;
function myFunction() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  console.log(name);
  console.log(email);
  console.log(phone);

  if (name == "") {
    document.getElementById("name_err").innerHTML = "name required";
  } else {
    document.getElementById("name_err").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("email_err").innerHTML = "email required";
  } else {
    document.getElementById("email_err").innerHTML = "";
  }

  if (phone == "") {
    document.getElementById("phone_err").innerHTML = "number required";
  } else {
    document.getElementById("phone_err").innerHTML = "";
  }

  if (name == "" || email == "" || phone == "") {
    return false;
  }
  insertTable();
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function addTable() {
  var v = "";
  editText = undefined;
  info = JSON.parse(localStorage.getItem("array"));
  console.log(info);
  for (i = 0; i < info.length; i++) {
    v += "<tr>";
    v += "<td>" + info[i].name + "</td>";
    v += "<td>" + info[i].email + "</td>";
    v += "<td>" + info[i].phone + "</td>";
    v +=
      '<td><button class="btn btn-danger" onclick="Edit(' +
      i +
      ')">Edit</button><button class="btn btn-primary" onclick="Delete(' +
      i +
      ')">Delete</button></td>';
  }

  document.getElementById("displayArea").innerHTML = v;
}

function insertTable() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  let details = { name, email, phone };
  console.log(details);

  if (editText != undefined) {
    info[editText].name = name;
    info[editText].email = email;
    info[editText].phone = phone;
  } else {
    info.push(details);
  }
  let string = JSON.stringify(info);
  localStorage.setItem("array", string);
  console.log(localStorage.getItem("array"));
  addTable();

  console.log(info);
  addTable();
}

function Delete(id) {
  info.splice(id, 1);
  addTable();
}

function Edit(id) {
  editText = id;
  console.log(editText);
  //   info.splice(id, 1);
  document.getElementById("name").value = info[id].name;
  document.getElementById("email").value = info[id].email;
  document.getElementById("phone").value = info[id].phone;
}
