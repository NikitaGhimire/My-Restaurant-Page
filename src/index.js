import { loadContactPage } from "./contact-page";
import { loadMenuPage } from "./menu-page";
import { loadHomePage } from "./home-page";
import { loadReservationPage } from "./reservation-page";

document.addEventListener('DOMContentLoaded', () => {
  loadHomePage();

  const homeTab = document.getElementById('home-tab');
  const menuTab = document.getElementById('menu-tab');
  const reservationTab = document.getElementById('reservation-tab');
  const contactTab = document.getElementById('contact-tab');

  homeTab.addEventListener('click', () => {
    clearContent();
    loadHomePage();
  });

  menuTab.addEventListener('click', () => {
    clearContent();
    loadMenuPage();
  });

  reservationTab.addEventListener('click', () => {
    clearContent();
    loadReservationPage();
  });

  contactTab.addEventListener('click', () => {
    clearContent();
    loadContactPage();
  });

  function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  }
});