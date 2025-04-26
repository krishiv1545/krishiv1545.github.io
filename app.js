window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      const offset = 140;
      const targetPosition = target.offsetTop - offset;

      gsap.to(window, {
        duration: 1.5,
        scrollTo: targetPosition,
        ease: "power2.inOut",
      });
    }
  });
});