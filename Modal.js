import { closeBtn, openBtn } from "./homework-11.js"

export const modalWindow = document.getElementById('modalWindow')

class Modal {
  constructor(modalWindow) {
    this.modalWindow = modalWindow;
  }

  showModal() {
    this.modalWindow.style.display = 'block';
    console.log("Окно открыто")
  }

  closeModal() {
    this.modalWindow.style.display = 'none';
    console.log("Окно закрыто");
  }  

  isOpen() {
    return getComputedStyle(this.modalWindow).display !== "none"
  }
}

const modalVariable = new Modal(modalWindow)

closeBtn.addEventListener("click", () => modalVariable.closeModal());
openBtn.addEventListener("click", () => modalVariable.showModal());
console.log(modalVariable.isOpen())
