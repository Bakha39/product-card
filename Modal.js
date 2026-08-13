/* import { closeBtn, openBtn } from "./homework-11.js" */


export class Modal {
  initCloseOverlay(shouldOverlayClose) {
    this.overlay.addEventListener('click', (event) => {
      if(event.target === this.overlay && shouldOverlayClose) {
        this.close();
        console.log('Давай до свидания');
      }
    })
  }

  constructor(modalId, overlayId, buttonId) {
    this.modal = document.querySelector(modalId);
    this.overlay = document.querySelector(overlayId);
    this.#initOpen(buttonId);
    this.#initClose();
  }

  open() {
    this.overlay.classList.add("overlay-showed");
    this.modal.classList.add("modal-showed");
    console.log("Окно открыто");
  }

  close() {
    this.overlay.classList.remove("overlay-showed");
    this.modal.classList.remove("modal-showed");
    console.log("Окно закрыто");
  }  

  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
      this.open();
    })
  }

  #initClose() {
    const closeButton = this.modal.querySelector('#close-btn');
    closeButton.addEventListener('click', () => {
      this.close();
    })
  }
}
