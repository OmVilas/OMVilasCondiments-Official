// Initialize AOS animation
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Back to top button
window.addEventListener('scroll', function () {
  var backToTop = document.getElementById('backToTop');
  if (window.pageYOffset > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

document.getElementById('backToTop').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar shrink on scroll
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    document.querySelector('header').classList.add('shrink');
  } else {
    document.querySelector('header').classList.remove('shrink');
  }
});

  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 150) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  });
const dealerSection = document.querySelector(".dealer-section");
const dealerTitle = document.getElementById("dealerTitle");
const dealerDesc = document.getElementById("dealerDesc");

const dealers = [
  {
    title: "Rukhi Foods",
    desc: "Rukhi Foods is a trusted distributor of Om Vilas Condiments, ensuring authentic taste reaches customers with freshness and care.",
    image: "https://images.unsplash.com/photo-1604908177522-4320d97cfa60"
  },
  {
    title: "Rukhi Foods – Distribution Unit",
    desc: "With a strong supply network, Rukhi Foods supports retailers and wholesalers across regions with timely delivery.",
    image: "https://images.unsplash.com/photo-1581093588401-22a2b8f0c71f"
  },
  {
    title: "Rukhi Foods – Quality Partner",
    desc: "Sharing the same values of purity and tradition, Rukhi Foods helps maintain Om Vilas quality standards.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  }
];

let dealerIndex = 0;

function updateDealer() {
  dealerSection.style.backgroundImage = `url('${dealers[dealerIndex].image}')`;
  dealerTitle.textContent = dealers[dealerIndex].title;
  dealerDesc.textContent = dealers[dealerIndex].desc;
}

function nextDealer() {
  dealerIndex = (dealerIndex + 1) % dealers.length;
  updateDealer();
}

function prevDealer() {
  dealerIndex = (dealerIndex - 1 + dealers.length) % dealers.length;
  updateDealer();
}

/* Auto slide slowly */
setInterval(nextDealer, 7000);

/* Initial load */
updateDealer();
