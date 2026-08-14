/* import { closeBtn, openBtn } from "./homework-11.js" */

export class Modal {
  constructor(modalId, buttonId, shouldOverlayClose) {
    this.modal = document.querySelector(modalId);
    this.overlay = document.querySelector('.overlay');
    this.shouldOverlayClose = shouldOverlayClose;

    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);

    this.initOpen(buttonId);
  }

  open() {
    this.overlay.classList.add('overlay-showed');
    this.modal.classList.add('modal-showed');

    this.initClose();

    console.log('Окно открыто');
  }

  initOpen(buttonId) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', () => {
      this.open();
    });
  }

  initClose() {
    const closeButton = this.modal.querySelector('#close-btn');

    closeButton.addEventListener('click', this.handleCloseButton);

    if (this.shouldOverlayClose) {
      this.overlay.addEventListener('click', this.handleOverlayClick);
    }
  }

  handleCloseButton() {
    this.close();
  }

  handleOverlayClick(event) {
    if (event.target === this.overlay) {
      this.close();
      console.log('Давай до свидания');
    }
  }

  close() {
    const closeButton = this.modal.querySelector('#close-btn');

    closeButton.removeEventListener('click', this.handleCloseButton);

    this.overlay.removeEventListener('click', this.handleOverlayClick);

    this.overlay.classList.remove('overlay-showed');
    this.modal.classList.remove('modal-showed');

    console.log('Окно закрыто');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }
}