// active shadow on navbar when on scroll
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');

  if (window.scrollY > 0) {
      navbar.classList.add('navbar-shadow');
  } else {
      navbar.classList.remove('navbar-shadow');
  }
});

// side menu for mobile devices
const openMenuButton = document.getElementById("menuBtn");
const closeMenuButton = document.getElementById("closeBtn");
const sideMenu = document.querySelector(".sidenav");

openMenuButton.addEventListener("click", () => {
  sideMenu.style.display = "flex";
  setTimeout(() => {
    sideMenu.style.opacity = "1";
  }, 20);
});

closeMenuButton.addEventListener("click", () => {
  closeSideMenu();
});

const sideMenuLinks = document.querySelectorAll(".sidenav a");

sideMenuLinks.forEach(link => {
  link.addEventListener("click", () => {
    closeSideMenu();
  });
});

function closeSideMenu() {
  sideMenu.style.opacity = "0";
  setTimeout(() => {
    sideMenu.style.display = "none";
  }, 300);
}

// scroll back to top of the page
const backButton = document.getElementById("backTopBtn");
  
backButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});