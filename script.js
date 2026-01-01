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
