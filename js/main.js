"use strict";

const openMenuBtn = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".nav");

const toggleMenu = () => {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    openMenuBtn.setAttribute("src", "images/icon-close.svg");
  } else {
    openMenuBtn.setAttribute("src", "images/icon-hamburger.svg");
  }
};

openMenuBtn.addEventListener("click", toggleMenu);
