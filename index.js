var buttn = document.getElementById("submit");
var body = document.querySelector("body");

buttn.addEventListener("click", addinfo);

function addinfo() {
  // name
  var name = document.getElementById("Name");
  var infoname = document.createElement("li");
  var info1text = document.createElement("li");
  infoname.appendChild(document.createTextNode(name.value + "    "));
  info1text.appendChild(document.createTextNode(name.value));
  name.value = " ";
  body.appendChild(infoname);

  // Email
  var email = document.getElementById("Email");
  var infoemail = document.createElement("span");
  infoemail.appendChild(document.createTextNode(email.value));
  email.value = " ";
  infoname.appendChild(infoemail);

  // phonenumber
  var phonenumber = document.getElementById("Phonenumber");
  var infophonenumber = document.createElement("span");
  infophonenumber.appendChild(
    document.createTextNode("    " + phonenumber.value)
  );
  phonenumber.value = " ";
  infoname.appendChild(infophonenumber);

  // delete button
  var del = document.createElement("button");
  del.textContent = "Delete";
  del.className = "button";
  infoname.appendChild(del);
  del.addEventListener("click", delitem);

  // Edit button
  var edit = document.createElement("button");
  edit.textContent = " " + "Edit";
  edit.className = "button";
  infoname.appendChild(edit);
  edit.addEventListener("click", edits);

  // create objext
  var newinfo = {
    name: info1text.textContent,
    Email: infoemail.textContent,
    phonenumber: infophonenumber.textContent,
  };

  // stores in local storage
  // var infodata = JSON.stringify(newinfo);
  // localStorage.setItem("user " + infoemail.textContent, infodata);

  // store into srever
  axios
    .post(
      "https://crudcrud.com/api/ec0795e50a984e9ca57933dc14e98c29/AppointmentData",
      newinfo
    )
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

  // edit function on click
  function edits() {
    name.value = info1text.textContent;
    email.value = infoemail.textContent;
    phonenumber.value = infophonenumber.textContent;
    infoname.remove();
    // localStorage.removeItem("user " + infoemail.textContent);
  }

  // delete function on click
  function delitem() {
    alert("Are You Sure!");
    infoname.remove();
    // localStorage.removeItem("user " + infoemail.textContent);
  }
}
window.addEventListener("DOMContentLoaded", () => {
  axios.get;
  "https://crudcrud.com/api/ec0795e50a984e9ca57933dc14e98c29/AppointmentData"()
    .then((re) => {
      console.log(re);
      for (var i = 0; i < re.data.length; i++) {
        console.log(re.data[i]);
      }
    })
    .catch((error) => console.log(error));
});
