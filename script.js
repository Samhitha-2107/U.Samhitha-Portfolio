// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll animation (optional)
const links = document.querySelectorAll('.nav-links a');
for (const link of links) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
}
