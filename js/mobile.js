export default function initMobile() {
  const btnMenu = document.querySelector('#checkbox-menu');
  const menuMobile = document.querySelector('.header-menu');
  function openMenu() {
    menuMobile.classList.toggle('active');
  }
  btnMenu.addEventListener('click', openMenu)


  function animationMenu() {
    menuMobile.classList.toggle('hidden');
  }
  btnMenu.addEventListener('click', animationMenu);
}


