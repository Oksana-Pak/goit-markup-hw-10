(() => {
  const refs = {
    openMenuBtn: document.querySelector('.mobile-menu__open'),
    closeMenuBtn: document.querySelector('.mobile-menu__close'),
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
