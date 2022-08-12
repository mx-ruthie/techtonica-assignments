form.addEventListener("submit", (event) =>{
  event.preventDefault();
  let nameEntry = document.getElementById("name-entry").value;
  let emailEntry = document.getElementById("email-entry").value;
  let phoneEntry = document.getElementById("phone-entry").value;
  //const pError = document.createElement("p");
  console.log(nameEntry);
  console.log(emailEntry);
  console.log(phoneEntry);
});