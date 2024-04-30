
import {
    nombrePrincipal, emailPrincipal, pagina, redSocial, phone, rubro,
    Productos_1, Productos_2, Productos_3, Canal_1, canal_2, canal_3
  } from './formulario.js';
  
  import {
    nombrePopup, emailPopup, paginaWebPopup, redSocialPopup, phonePopup, rubroPopup,
    productosPopup, productosModal, marketingPopUp, marketingPopUp_1, marketingPopUp_2
  } from './popUp.js';
  
  export const btnAbrirModal = document.querySelector("#btn-abrir-modal");
  export const btnCerrarModal = document.querySelector("#btn-cerrar-modal");
  export const modal = document.querySelector("#modal");


  
  export function abrirModal() {
    marketingPopUp_2.value = canal_3.value;
    marketingPopUp_1.value = canal_2.value;
    marketingPopUp.value = Canal_1.value;
    productosModal.value = Productos_3.value;
    productosPopup.value = Productos_2.value;
    ProductosWebPopup.value = Productos_1.value;
    nombrePopup.value = nombrePrincipal.value;
    emailPopup.value = emailPrincipal.value;
    paginaWebPopup.value = pagina.value;
    redSocialPopup.value = redSocial.value;
    phonePopup.value = phone.value;
    rubroPopup.value = rubro.value;
    modal.showModal();
  }
  
  export function cerrarModal() {
    canal_3.value = marketingPopUp_2.value;
    canal_2.value = marketingPopUp_1.value;
    Canal_1.value = marketingPopUp.value;
    Productos_3.value = productosModal.value;
    Productos_2.value = productosPopup.value;
    Productos_1.value = ProductosWebPopup.value;
    nombrePrincipal.value = nombrePopup.value;
    emailPrincipal.value = emailPopup.value;
    pagina.value = paginaWebPopup.value;
    redSocial.value = redSocialPopup.value;
    phone.value = phonePopup.value;
    rubro.value = rubroPopup.value;
    modal.close();
  }
  
  // Añade los event listeners para los botones
  btnAbrirModal.addEventListener("click", abrirModal);
  btnCerrarModal.addEventListener("click", cerrarModal);



