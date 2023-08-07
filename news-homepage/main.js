const primaryNav = document.querySelector(".primary-navigation");
const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click', ()=>  {
  primaryNav.hasAttribute("data-visible") 
  ? navToggle.setAttribute('aria-expanded', false)
  : navToggle.setAttribute('aria-expanded', true);
  primaryNav.toggleAttribute('data-visible');
  primaryHeader.toggleAttribute('data-overlay');
});
