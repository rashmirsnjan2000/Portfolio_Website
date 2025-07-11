// hero section start============================
TweenMax.staggerFrom(
  ".hero_container .head_div .head1",
  1.5,
  {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
    delay: 0.5,
  },
  0.09
);
TweenMax.staggerFrom(
  ".hero_container .head_div .head2 span",
  1,
  {
    opacity: 0,
    x: -30,
    ease: Expo.easeInOut,
    delay: 0,
  },
  0.09
);
TweenMax.staggerFrom(
  ".hero_section .circle1,.hero_section .circle2",
  2.5,
  {
    opacity: 0,
    scale: 0.5,
    ease: Expo.easeOut,
    delay: 0.2,
  },
  0.09
);
// hero section end===============================
// ==================================================================
// about section start============================
document.addEventListener("mousemove", function (e) {
  updateCursorPosition(e.clientX, e.clientY);
});

document.addEventListener("scroll", function () {
  updateCursorPosition(lastMouseX, lastMouseY);
});

var lastMouseX = 0;
var lastMouseY = 0;

function updateCursorPosition(mouseX, mouseY) {
  lastMouseX = mouseX;
  lastMouseY = mouseY;

  gsap.to(".maskington", {
    duration: 0,
    left: mouseX + window.pageXOffset,
    top: mouseY + window.pageYOffset - (100 * window.innerHeight) / 100 - 5,
    ease: "power2.out",
  });

  gsap.to(".maskington .module", {
    duration: 0,
    x: -(mouseX + window.pageXOffset),
    y: -(mouseY + window.pageYOffset - (100 * window.innerHeight) / 100 - 5),
    ease: "power2.out",
  });
}
// about section end============================
// ==================================================================
// service section end============================
// gsap.from(".alldiv",{
//   // x:300,
//   opacity:0,
//   scrollTrigger:{
//     trigger:".service_section",
//     scroller:"body",
//     markers:true,
//     start:"top 50%"
//   }
// })
// service section end============================
// ==================================================================
// split text start=========================
gsap.registerPlugin(SplitText);
let split = SplitText.create(".split", {
  type: "words",
});
gsap.from(split.words, {
  duration: 1,
  y: 100,
  autoAlpha: 0,
  stagger:0.05,
  scrollTrigger: {
    trigger:".about_section",
    scroller:"body",
    // markers:true,
    start:"top 50%"
  },
});
// split text end=========================
// ==================================================================
// contact section start==========================
function initContactHover() {
    const contactContainer = document.querySelector(".contact_container");
    if (!contactContainer) return;

    const imgBox = contactContainer.querySelector(".img_box");
    if (!imgBox) return;

    let containerRect = contactContainer.getBoundingClientRect();
    function updateContainerRect() {
      containerRect = contactContainer.getBoundingClientRect();
    }
    updateContainerRect();
    window.addEventListener("resize", updateContainerRect);
    window.addEventListener("scroll", updateContainerRect);

    document.body.addEventListener("mousemove", (e) => {
      const x = e.clientX - containerRect.left + 145;
      const y = e.clientY - containerRect.top - 30;
      imgBox.style.top = y + "px";
      imgBox.style.left = x + "px";
    });

    contactContainer.querySelectorAll(".contacts").forEach((contact) => {
      contact.addEventListener("mouseenter", () => {
        imgBox.src = contact.getAttribute("data-src");
      });
    });
  }
  window.addEventListener("load", initContactHover);
// contact section end============================
// ==================================================================
// button section start==========================
var main_section = document.getElementById("main_section");
var theme_btn1 = document.querySelector(".theme_btn1");
var theme_btn2 = document.querySelector(".theme_btn2");
var theme_btn3 = document.querySelector(".theme_btn3");
var all_waves = document.querySelectorAll(".wave");

function setTheme(theme, waveId) {
  main_section.className = theme;
  all_waves.forEach((wave) => {
    wave.id = waveId;
  });
}

theme_btn1.addEventListener("click", () => {
  setTheme("theme1", "wave1");
});

theme_btn2.addEventListener("click", () => {
  setTheme("theme2", "wave2");
});

// theme_btn3.addEventListener("click", () => {
//   setTheme("theme3", "wave3");
// });

// button section end============================
