// main.js
import { nombrePrincipal, emailPrincipal } from './formulario.js';
import { nombrePopup, emailPopup } from './popUp.js';
import { abrirModal, cerrarModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
 
  const userInputModal = document.getElementById('user');
  const businessDescriptionTextarea = document.getElementById('descripcionText');
  userInputModal.addEventListener('input', () => {
    businessDescriptionTextarea.value = userInputModal.value;
  });


  document.querySelector("#btn-abrir-modal").addEventListener("click", abrirModal);
  document.querySelector("#btn-cerrar-modal").addEventListener("click", cerrarModal);
});






