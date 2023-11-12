const form = document.querySelector("form");
const newsSummit = document.querySelector("#newsLetter");
const dispalySub = document.querySelector("#subscribtion");
const submit_email = document.querySelector("#dismiss_btn");
const errorMail = document.querySelector("#mailErr");
const boxerror = document.querySelector("input")

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", onSummit);

form.querySelector("#email").addEventListener("keyup", () => {
  if (!errorMail.classList.contains("hidden")) {
    errorMail.classList.add("hidden");
    boxerror.style.border="1px solid gray";

    
  }
});

submit_email.addEventListener("click", () => {
  newsSummit.classList.remove("hidden");
  newsSummit.classList.add("flex");
  dispalySub.classList.remove("flex");
  dispalySub.classList.add("hidden");
});

function onSummit(e) {
  e.preventDefault();
  const email = form.querySelector("#email").value;
  if (email.match(validRegex)) {
    document.querySelector("#userEmail").textContent = email;
    newsSummit.classList.remove("flex");
    newsSummit.classList.add("hidden");
    dispalySub.classList.remove("hidden");
    dispalySub.classList.add("flex");

    form.querySelector("#email").value = "";
  } else {
    errorMail.classList.remove("hidden");
    boxerror.style.border="1px solid red";
    
    
    // errorMail.classList.add("hidden")
  }

}
console.log(errorMail);
