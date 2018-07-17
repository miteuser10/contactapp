var contacts = [
    {"name": "Ganesh", "email": "ganeshshettigar@gmail.com", "mobile" : "29383929"},
    {"name": "Lola", "email": "lolakshishettigar@gmail.com", "mobile" : "29383933"},
    {"name": "Prapthi", "email": "prapthishettigar@gmail.com", "mobile" : "2938392"}
    
];
var tempIndex = -1;

function addContact() {
    contact = getContact();
    contacts.push(contact);
    clearFormData();
    viewData();
    
}

function viewData() {
    var data = "";
    data += "<table>";
    for (i = 0; i < contacts.length; i++) {
        data += "<tr>";
        data += "<td>" + contacts[i].name + "</td>";
        data += "<td>" + contacts[i].email + "</td>";
        data += "<td>" + contacts[i].mobile + "</td>";
        data += "<td>" +"<button onclick=editContact("+ i +")>Edit</button>"+ "</td>"
        data += "<td>" +"<button onclick=deleteContact("+ i +")>Delete</button>"+ "</td>"
        data += "</tr>";
    }
    data += "</table";
    document.getElementById("content").innerHTML = data;
}

viewData();

function editContact(index) {
    contact = contacts[index];
    tempIndex = index;
    document.getElementById('cname').value = contact.name;
    document.getElementById('email').value = contact.email;
    document.getElementById('mobile').value = contact.mobile;
    
    document.getElementById('add').style.display="none";
    document.getElementById('update').style.display="block";
    
}

function deleteContact(index) {
   contacts.splice(index,1);
    viewData();
}

function updateContact() {
    contact = getContact();
    contacts.splice(tempIndex,1,contact);
    clearFormData();
    document.getElementById("add").style.display="block";
    document.getElementById("update").style.display="none";
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
        "name" : cname,
        "email" : email,
        "mobile" : mobile
    }
    return contact;
}