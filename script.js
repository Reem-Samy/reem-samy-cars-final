window.addEventListener("load", () => {
  const leftElements = document.querySelectorAll(".animate-left");
  const car = document.querySelector(".car");

  leftElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, index * 200);
  });


  setTimeout(() => {
    car.classList.add("show");
  }, leftElements.length * 200 + 400);
});




const cards = document.querySelectorAll(".car-card");
const cardsPerRow = 3;

cards.forEach((card, index) => {
  const rowIndex = Math.floor(index / cardsPerRow);

  setTimeout(() => {
    card.classList.add("show");
  }, rowIndex * 300);
});



const techSection = document.querySelector('.tech-section');

let techTimeout;

techSection.addEventListener('mouseenter', () => {
  techTimeout = setTimeout(() => {
    techSection.classList.add('active');
  }, 600);
});



const experienceSection = document.querySelector('.experience-section');

experienceSection.addEventListener('mouseenter', () => {
  experienceSection.classList.add('active');
});



  const section = document.querySelector(".sustainable-section");
  const cards4 = document.querySelectorAll(".card4");
  let started = false;

  section.addEventListener("mouseenter", () => {
    if (started) return;
    started = true;

    cards4.forEach(card4 => {
      const numberEl = card4.querySelector(".number");
      const target = parseInt(card4.dataset.target);
      let current = 0;

      const speed = 20;

      const counter = setInterval(() => {
        if (current >= target) {
          clearInterval(counter);
          numberEl.textContent =
            target + (target !== 0 ? "%" : "");
        } else {
          current++;
          numberEl.textContent =
            current + (target !== 0 ? "%" : "");
        }
      }, speed);
    });
  });

const ownerStoriesSection = document.getElementById("ownerStories");
const storyBoxes = document.querySelectorAll(".story-box");
let ownerStoriesAnimated = false;

ownerStoriesSection.addEventListener("mouseenter", () => {
  if (ownerStoriesAnimated) return;
  ownerStoriesAnimated = true;

  storyBoxes.forEach((box, index) => {
    setTimeout(() => {
      box.style.opacity = "1";
      box.style.transform = "translateX(0)";
    }, index * 250); 
  });
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});


document.querySelectorAll(".car-card").forEach(card => {
  card.style.cursor = 'pointer'; 
  card.addEventListener("click", () => {
    window.location.href = card.dataset.link;
  });
});