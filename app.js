const titleDiv = document.getElementById("title");

const titleElement = (
  <div className="title-wrapper">
    <h1 className="first-name" id="first-name-1">
      Krishiv
    </h1>
    <h1 className="last-name outline" id="last-name-1">
      Khambhayata
    </h1>
  </div>
);

ReactDOM.createRoot(titleDiv).render(titleElement);

/* const maximizeFontSize = () => {
  const titleWrapper = document.querySelector(".title-wrapper");
  const firstName = document.getElementById("first-name-1");
  const lastName = document.getElementById("last-name-1");

  if (firstName && lastName && titleWrapper) {
    const allNames = document.querySelectorAll(".first-name, .last-name");
    allNames.forEach((el) => {
      el.style.fontSize = "20vw";
    });

    const firstNameWidth = firstName.getBoundingClientRect().width;
    const lastNameWidth = lastName.getBoundingClientRect().width;
    const availableWidth = titleWrapper.offsetWidth - 25;

    if (firstNameWidth + lastNameWidth > availableWidth) {
      let currentSize = 20;
      const step = 0.1;

      while (
        firstNameWidth + lastNameWidth > availableWidth &&
        currentSize > 5
      ) {
        currentSize -= step;
        allNames.forEach((el) => {
          el.style.fontSize = `${currentSize}vw`;
        });

        const newFirstNameWidth = firstName.getBoundingClientRect().width;
        const newLastNameWidth = lastName.getBoundingClientRect().width;

        if (newFirstNameWidth + newLastNameWidth < availableWidth) {
          break;
        }
      }
    }
  }
  firstName.style.display = "block";
  lastName.style.display = "block";
}; */

const maximizeFontSize = async () => {
  const titleWrapper = document.querySelector(".title-wrapper");
  const firstName = document.getElementById("first-name-1");
  const lastName = document.getElementById("last-name-1");

  if (firstName && lastName && titleWrapper) {
    const allNames = document.querySelectorAll(".first-name, .last-name");
    allNames.forEach((el) => (el.style.fontSize = "20vw"));

    let firstNameWidth = firstName.getBoundingClientRect().width;
    let lastNameWidth = lastName.getBoundingClientRect().width;
    const availableWidth = titleWrapper.offsetWidth - 25;

    if (firstNameWidth + lastNameWidth > availableWidth) {
      let currentSize = 20;
      const step = 0.1;

      while (
        firstNameWidth + lastNameWidth > availableWidth &&
        currentSize > 5
      ) {
        currentSize -= step;
        allNames.forEach((el) => (el.style.fontSize = `${currentSize}vw`));

        // await new Promise((res) => requestAnimationFrame(res));

        firstNameWidth = firstName.getBoundingClientRect().width;
        lastNameWidth = lastName.getBoundingClientRect().width;
      }
    }
  }

  firstName.style.display = "block";
  lastName.style.display = "block";
};

const adjustNavSection = () => {
  let height = document.querySelector(".nav-content").offsetHeight;
  let width = document.querySelector(".nav-content").offsetWidth;
  let nav_left_width = width - height;
  document.querySelector(".nav-right").style.width = height + "px";
  document.querySelector(".nav-left").style.maxWidth = nav_left_width + "px";
};

setTimeout(() => {
  document.getElementById("title").style.height = "30vh";
  document.getElementById("nav-section").style.display = "block";
  document.getElementById("about").style.display = "block";
  document.getElementById("projects").style.display = "block";
  document.getElementById("contact").style.display = "block";
  document.getElementById("journey").style.display = "block";
  document.getElementById("navbar").style.display = "flex";

  adjustNavSection();
}, 1400);

setTimeout(() => {
  document.getElementById("navbar").style.opacity = "1";
  document.getElementById("navbar").style.transform = "translateY(-40px)";
}, 1700);

setTimeout(() => {
  document.getElementById("gradhat").style.opacity = "1";
  document.getElementById("gradhat").style.transform = "translateY(0)";
}, 2000);

window.addEventListener("resize", async () => {
  adjustNavSection();
  await maximizeFontSize();
});

window.addEventListener("load", async () => {
  await maximizeFontSize();
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

/* gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".project-right img").forEach((img) => {
  ScrollTrigger.create({
    trigger: img,
    start: "top 50%", // Adjust based on when you want the effect to happen
    onEnter: () => img.classList.add("straightenImage"),
    // once: true,
  });
}); */
