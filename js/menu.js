// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//     menuBtnRef.classList.toggle('is-open');
//     menuBtnRef.setAttribute('aria-expanded', !expanded);

//     mobileMenuRef.classList.toggle('is-open');
//   });
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu__open'),
    closeMenuBtn: document.querySelector('.mobile-menu__cross'),
    menu: document.querySelector('.mobile-menu'),
    // body: document.querySelector('[data-body]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
    // refs.body.classList.toggle('no-scroll');
  }
})();
