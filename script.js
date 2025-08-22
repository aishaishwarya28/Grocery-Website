// Set active link on navbar click
const navLinks = document.querySelectorAll('.nav-links li a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

let currentSlide = 0;
const wrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(nextSlide, 3000);

// Get the dropdown button and content
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle dropdown visibility when clicking on "Categories"
dropdown.addEventListener('click', function () {
    dropdownContent.classList.toggle('show');
});

// Close dropdown when clicking outside of the dropdown
document.addEventListener('click', function (event) {
    if (!dropdown.contains(event.target)) {
        dropdownContent.classList.remove('show');
    }
});



