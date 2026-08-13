import { Modal } from "./Modal.js"

const modalVariableReg = new Modal('#modalWindow', '#overlay', 'registration-button')

const modalVariableAuth = new Modal('#authModal', '#authOverlay', 'auth-button')


  modalVariableReg.initCloseOverlay(true)

  modalVariableAuth.initCloseOverlay(false)



setInterval(() => {
  console.log(modalVariableReg.isOpen())
}, 3000)

setInterval(() => {
  console.log(modalVariableAuth.isOpen())
}, 3000)

