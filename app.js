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

//const divA = document.getElementById('title');
//const divB = document.getElementById('navbar');
//const divAHeight = 0.8 * divA.offsetHeight;
//divB.style.marginTop = divAHeight + 'px';

const form = document.getElementById('contact-form');
const statusMessage = document.getElementById('form-status');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent default form submit
  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/xdkgkbll', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: formData
    });

    if (response.ok) {
      statusMessage.innerHTML = "✅ Thank you! Your message has been sent.";
      form.reset();
    } else {
      statusMessage.innerHTML = "❌ Oops! Something went wrong.";
    }
  } catch (error) {
    statusMessage.innerHTML = "❌ Error! Unable to send message.";
  }
});