if (localStorage.getItem("contacts") == null)
    localStorage.setItem("contacts", JSON.stringify([]));
var tempIndex = -1;

function addContact() {
    var contact = getContact();
    var contacts = getDataFromLocalstorage();
    contacts.push(contact);
    updateDataToLocalStorage(contacts);
    clearFormData();
    viewData();

}

function viewData() {
    var contacts = getDataFromLocalstorage();
    var data = "";
    if (contacts.length == 0)
        data = "Contacts are not yet added!";
    else{
    data += "<table>";
    for (i = 0; i < contacts.length; i++) {
        data += "<tr>";
        data += "<td>" + contacts[i].name + "</td>";
        data += "<td>" + contacts[i].email + "</td>";
        data += "<td>" + contacts[i].mobile + "</td>";
        data += "<td>" + "<button onclick=editContact(" + i + ")>Edit</button>" + "</td>"
        data += "<td>" + "<button onclick=deleteContact(" + i + ")>Delete</button>" + "</td>"
        data += "</tr>";
    }
    data += "</table";
    }
    document.getElementById("content").innerHTML = data;
}

viewData();

function editContact(index) {
    var contacts = getDataFromLocalstorage();
    tempIndex = index;
    document.getElementById('cname').value = contact.name;
    document.getElementById('email').value = contact.email;
    document.getElementById('mobile').value = contact.mobile;

    document.getElementById('add').style.display = "none";
    document.getElementById('update').style.display = "block";

}

function deleteContact(index) {
     var contacts = getDataFromLocalstorage();
    contacts.splice(index, 1);
     updateDataToLocalStorage(contacts);
    viewData();
}

function updateContact() {
    var contacts = getDataFromLocalstorage();
    contact = getContact();
    
    contacts.splice(tempIndex, 1, contact);
    updateDataToLocalStorage(contacts);
    clearFormData();
    document.getElementById("add").style.display = "block";
    document.getElementById("update").style.display = "none";
    viewData();
}

function clearFormData() {
    document.getElementById("cname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
}

function getContact() {
    var cname = document.getElementById('cname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    contact = {
        "name": cname,
        "email": email,
        "mobile": mobile
    }
    return contact;
}

function getDataFromLocalstorage() {
    contacts = JSON.parse(localStorage.getItem("contacts"));
    return contacts;
}

function updateDataToLocalStorage(updatedData) {
    localStorage.setItem("contacts", JSON.stringify(updatedData));
}
