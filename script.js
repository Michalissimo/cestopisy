// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Close mobile menu after clicking
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    });
});

// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Scroll to top when clicking logo
document.querySelector('.nav-logo').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Aktuální rok/čas v zápatí
function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('current-time').textContent = `${year} • ${hours}:${minutes}:${seconds}`;
}
updateTime(); // Spustí hned při načtení
setInterval(updateTime, 1000);// Aktualizuje každou minutu

// === Restart animace při návratu na začátek stránky ===
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-content h1");

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) {
      // reset animace
      heroTitle.style.animation = "none";

      // vynutí reflow (nutné pro restart animace)
      heroTitle.offsetHeight;

      // znovu nastav obě animace
      heroTitle.style.animation = `
        focus-in-contract 3s cubic-bezier(0.250, 0.460, 0.450, 0.940),
        text-shadow-drop-center 1s ease-in 2s both
      `;
    }
  });
});
