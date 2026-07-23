const form = document.querySelector("#form");

function formToObject(form) {
  return Object.fromEntries(new FormData(form));
}

form.addEventListener("submit", (event) => {
  event.preventDefault(); // чтобы страница не перезагружалась
  console.log(formToObject(form));
})



//5
const openBtn = document.querySelector(".button-registration");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");

openBtn.addEventListener("click", () => {
  overlay.classList.add("open");
  modal.classList.add("showed");
})

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open");
  modal.classList.remove("showed");
})


//
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password-confirm");
const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", (event) => {

  if (!registerForm.checkValidity()) {
    event.preventDefault();
    message.textContent = "Регистрация не пройдена";
    registerForm.reportValidity();
    return;
  }

  if (password.value !== confirmPassword.value) {
    event.preventDefault();
    message.textContent = "Пароли не совпадают";
    return;
  }

  event.preventDefault(); // пока не отправляем форму на сервер

  const data = formToObject(registerForm);
  const user = { ...data, createdOn: new Date () };
  console.log(user);
  
  modal.classList.remove("showed");
  overlay.classList.remove("open");
})




