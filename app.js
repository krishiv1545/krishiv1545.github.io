const titleDiv = document.getElementById("title");

const titleElement = (
  <div className="title-wrapper">
    <h1 className="first-name" id="first-name-1">
      Krishiv
    </h1>
    <h1 className="first-name" id="first-name-2">
      Krishiv
    </h1>
    <h1 className="first-name" id="first-name-3">
      Krishiv
    </h1>
    <h1 className="first-name" id="first-name-4">
      Krishiv
    </h1>

    <h1 className="last-name outline" id="last-name-1">
      Khambhayata
    </h1>
    <h1 className="last-name outline" id="last-name-2">
      Khambhayata
    </h1>
    <h1 className="last-name outline" id="last-name-3">
      Khambhayata
    </h1>
    <h1 className="last-name outline" id="last-name-4">
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

const animateNames = (index) => {
  const firstNameOut = document.getElementById(`first-name-${index}`);
  const firstNameIn = document.getElementById(`first-name-${index + 1}`);
  const lastNameOut = document.getElementById(`last-name-${index}`);
  const lastNameIn = document.getElementById(`last-name-${index + 1}`);

  if (firstNameOut && firstNameIn) {
    firstNameOut.style.transform = "translateY(-100%)";
    firstNameOut.style.opacity = "0";
    firstNameIn.style.transform = "translateY(0)";
    firstNameIn.style.opacity = "1";
  }

  if (lastNameOut && lastNameIn) {
    lastNameOut.style.transform = "translateY(100%)";
    lastNameOut.style.opacity = "0";
    lastNameIn.style.transform = "translateY(0)";
    lastNameIn.style.opacity = "1";
  }
};

[1, 2, 3].forEach((index) => {
  setTimeout(() => animateNames(index), index * 300);
});
setTimeout(() => {
  document.getElementById("first-name-1").style.display = "none";
  document.getElementById("last-name-1").style.display = "none";
  document.getElementById("first-name-2").style.display = "none";
  document.getElementById("last-name-2").style.display = "none";
  document.getElementById("first-name-3").style.display = "none";
  document.getElementById("last-name-3").style.display = "none";

  const four1 = document.getElementById("first-name-4");
  const four2 = document.getElementById("last-name-4");
  four1.style.transform = "translateY(0)";
  four1.style.opacity = "1";
  four2.style.transform = "translateY(0)";
  four2.style.opacity = "1";
}, 1400);

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
      gsap.to(window, {
        duration: 1, // Smooth scroll duration
        scrollTo: target,
        ease: "power2.inOut", // Light smooth easing
      });
    }
  });
});
