//logo

const logo = document.querySelector(".logo");
const logoV = document.querySelector(".logo--visible");

logo.addEventListener("mouseover", () => {
  logoV.classList.toggle("invisible");
  logo.classList.toggle("invisible");
});

logoV.addEventListener("mouseout", () => {
  logoV.classList.toggle("invisible");
  logo.classList.toggle("invisible");
});

//search
const search = document.querySelector(".search");
const searchV = document.querySelector(".search--visible");

search.addEventListener("mouseover", () => {
  searchV.classList.toggle("invisible");
  search.classList.toggle("invisible");
});

searchV.addEventListener("mouseout", () => {
  searchV.classList.toggle("invisible");
  search.classList.toggle("invisible");
});

//menu

const menu = document.querySelector(".menu");
const menuV = document.querySelector(".menu--visible");

menu.addEventListener("mouseover", () => {
  menuV.classList.toggle("invisible");
  menu.classList.toggle("invisible");
});

menuV.addEventListener("mouseout", () => {
  menuV.classList.toggle("invisible");
  menu.classList.toggle("invisible");
});

//gallery
const gallery = document.querySelector(".gallery");
const galleryV = document.querySelector(".gallery--visible");

gallery.addEventListener("mouseover", () => {
  galleryV.classList.toggle("invisible");
  gallery.classList.toggle("invisible");
});

galleryV.addEventListener("mouseout", () => {
  galleryV.classList.toggle("invisible");
  gallery.classList.toggle("invisible");
});

//contact
const contact = document.querySelector(".contact");
const contactV = document.querySelector(".contact--visible");

contact.addEventListener("mouseover", () => {
  contactV.classList.toggle("invisible");
  contact.classList.toggle("invisible");
});

contactV.addEventListener("mouseout", () => {
  contactV.classList.toggle("invisible");
  contact.classList.toggle("invisible");
});

//footer
const footer = document.querySelector(".footer");
const footerV = document.querySelector(".footer--visible");

footer.addEventListener("mouseover", () => {
  footerV.classList.toggle("invisible");
  footer.classList.toggle("invisible");
});

footerV.addEventListener("mouseout", () => {
  footerV.classList.toggle("invisible");
  footer.classList.toggle("invisible");
});
