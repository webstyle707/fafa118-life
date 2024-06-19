function toggleClassOnScroll() {
  const menu = document.querySelector(".menu");
  const navbar = document.querySelector(".navbar");
  //   const scrollThreshold = 100; // Adjust this value as needed

  if (window.scrollY > 70) {
    menu.classList.add("fixedStyle");
    navbar.classList.add("fixedStyle");
  } else {
    menu.classList.remove("fixedStyle");
    navbar.classList.remove("fixedStyle");
  }
}

// Add event listener to window scroll
window.addEventListener("scroll", toggleClassOnScroll);

const clickShow = () => {
  const togglSideNav = document.querySelector(".togglSideNav");
  const animationSlow = document.querySelector(".animationSlow");
  const menuAnimation = document.querySelector(".menuAnimation");

  menuAnimation.style.transition = "all 0.5s ease";
  menuAnimation.style.transform = "translateX(-100%)";
  togglSideNav.style.transition = "all 0.5s ease";
  togglSideNav.style.left = "0%";
  animationSlow.style.transition = "all 0.8s ease";
  animationSlow.style.width = "100%";
};



const clickHide = () => {
  const togglSideNav = document.querySelector(".togglSideNav");
  const animationSlow = document.querySelector(".animationSlow");
  const menuAnimation = document.querySelector(".menuAnimation");

  
  togglSideNav.style.transition = "all 0.5s ease";
  togglSideNav.style.left = "-100%";
  animationSlow.style.transition = "all 0.8s ease";
  animationSlow.style.width = "0%";
  menuAnimation.style.transition = "all 1s ease";
  menuAnimation.style.transform = "translateX(0%)";
};