"use strict";

/*Меню бургер*/
const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".header__menu");
if (menuIcon) {
  menuIcon.addEventListener("click", viewMenu);

  function viewMenu(event) {
    document.body.classList.toggle("_lock");
    menuIcon.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  }
}

/*Прокрутка при клике*/
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(event) {
    const menuLink = event.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);

      if (menuIcon.classList.contains("_active")) {
        document.body.classList.remove("_lock");
        menuIcon.classList.remove("_active");
        menuBody.classList.remove("_active");
      }
      gotoBlock.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      event.preventDefault();
    }
  }
}
