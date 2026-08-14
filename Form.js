
import { registerForm, message, password, confirmPassword, overlay, openBtn } from "./homework-11.js"
/* import { modalWindow } from "./Modal.js" */
const modalWindow = document.getElementById('modalWindow')

class Form {
  constructor(form) {
    this.form = form;
  }

  getValues(event) {
    return this.form;
  }

  isValid(event) {
    event.preventDefault()
    if (!this.form.checkValidity()) {
      message.textContent = "Регистрация не пройдена";
      this.form.reportValidity();
      console.log(this.form.checkValidity())
      return;      
    }

    if (password.value !== confirmPassword.value) {
      message.textContent = "Пароли не совпадают";
      console.log(password.value === confirmPassword.value)
      return;
    }

    modalWindow.style.display = 'none';
    overlay.classList.remove("overlay-showed");
    console.log(this.form.checkValidity())
  }

  reset(event) {
    const confirmReset = prompt('Вы уверены, что хотите стереть данные?')
    if (!confirmReset) {
      event.preventDefault(); // Отменяет сброс, если пользователь передумал
    }
  } 
}

const formValidator = new Form(registerForm)

openBtn.addEventListener("click", (event) => formValidator.getValues(event))
registerForm.addEventListener("submit", (event) => formValidator.isValid(event))
registerForm.addEventListener("reset", (event) => formValidator.reset(event))