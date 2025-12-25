const viewer = document.getElementById("carModel");
const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const modelSrc = dot.dataset.model;

    viewer.style.opacity = "0";

    setTimeout(() => {
      viewer.src = modelSrc;
      viewer.style.opacity = "1";
    }, 200);
  });
});


  const section = document.getElementById("performance");
  const cards = document.querySelectorAll(".card");

  let animated = false;

  section.addEventListener("mouseenter", () => {
    if (animated) return;
    animated = true;

    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150);
    });
  });


  
const luxurySection = document.getElementById("luxurySection");
const luxuryCards = document.querySelectorAll("#luxurySection .luxury-card");
let luxuryAnimated = false;

luxurySection?.addEventListener("mouseenter", () => {
  if (luxuryAnimated) return;
  luxuryAnimated = true;

  luxuryCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("show");
    }, index * 150);
  });
});


  document.querySelectorAll('.feature-box').forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.transition = 'all 0.4s ease';
    });
  });


const luxuryArea = document.getElementById("luxury");

luxuryArea.addEventListener("mouseenter", () => {
  luxuryArea.classList.add("active");
});


const button = document.getElementById("toggleCard");
const card = document.getElementById("priceCard");

button.addEventListener("click", () => {
  card.style.display = "block";
});



document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log(`${btn.innerText} clicked`);
  });
});



const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  burger.classList.toggle('active');
});