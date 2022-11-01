const navToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
  } else {
    nav.setAttribute("data-visible", false);
  }

  const expanded = navToggle.getAttribute("aria-expanded");
  if (expanded === "false") {
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navToggle.setAttribute("aria-expanded", false);
  }
});


