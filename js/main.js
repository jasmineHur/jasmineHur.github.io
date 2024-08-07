function toogleMenu() {
  const $navMenu = document.getElementById("nav__menu");
  $navMenu.classList.toggle("show");
}

function handleFloatingButton() {
  // To the top
  const $floatingButton = document.getElementById("floatingButton");
  $floatingButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0
      // behavior: "smooth"
    });
  });
}

function init() {
  const $naveToggle = document.getElementById("nav-toggle");
  $naveToggle.addEventListener("click", () => {
    // Menu toggle
    toogleMenu();
  });

  const $navLinkList = document.querySelectorAll(".nav__link");
  $navLinkList.forEach((el) => el.addEventListener("click", toogleMenu));

  handleFloatingButton();
}

init();

// Menu activation part
const options = {
  threshold: 1
};

const observer = new IntersectionObserver((entreis) => {
  entreis.forEach((entry) => {
    const sectionId = entry.target.id;

    if (entry.isIntersecting) {
      document
        .querySelector(`.nav__link[href*=${sectionId}]`)
        .classList.add(`active-link`);

      const $items = document.querySelectorAll(
        `.nav__link:not([href*=${sectionId}])`
      );
      $items.forEach((el) => el.classList.remove("active-link"));
    }
  });
}, options);

const $sectionList = document.querySelectorAll(".section");
$sectionList.forEach((el) => observer.observe(el));

// Scroll animation
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200
});

scrollReveal.reveal(".home__data, .about__img, .skills__text");
scrollReveal.reveal(".home__img, .about__data, .skills__img", { delay: 400 });
scrollReveal.reveal(".skills__data, .work__link, .contact__input", {
  interval: 200
});

// TypeIt animation
const typeit = new TypeIt("#typeit", {
  speed: 70,
  startDelay: 1300,
  waitUntilVisible: true
});

typeit
  .type("Hello! <br />")
  .type("I'm a ")
  .type('<strong class="home__title-color">Developer <br /></strong>')
  .type('<strong class="home__title-color">Eunyoung</strong>', { delay: 300 })
  .delete(8, { delay: 300 })
  .type('<strong class="home__title-color">Jasmine Hur</strong>')
  .go();
