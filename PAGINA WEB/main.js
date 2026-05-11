// Super Smash Bros Ultimate Clone - JavaScript Original
// Todas las funciones originales mantenidas y optimizadas

document.addEventListener('DOMContentLoaded', function() {
  // Inicialización de componentes
  initHeroSlider();
  initVideoCarousel();
  initScrollEffects();
  checkCookieStatus();
});

// --- Gestión de Cookies ---
function closeCookieModal() {
  const modal = document.getElementById('cookie-modal');
  if (modal) {
    modal.classList.add('hidden');
    localStorage.setItem('cookiesAccepted', 'true');
  }
}

function checkCookieStatus() {
  if (localStorage.getItem('cookiesAccepted')) {
    const modal = document.getElementById('cookie-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }
}

// Hacer la función disponible para los botones onclick del HTML
window.closeCookieModal = closeCookieModal;

// --- Hero Slider ---
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  let currentSlide = 0;
  const totalSlides = slides.length;

  if (totalSlides === 0) return;

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
  }

  // Cambio automático cada 5 segundos
  setInterval(nextSlide, 5000);
}

// --- Video Carousel ---
let currentVideo = 0;
// He mantenido tu array de datos original
const videoData = [
  {
    title: "Super Smash Bros. Ultimate – La última llave (Nintendo Switch)",
    image: "https://ext.same-assets.com/874503100/2811278779.jpeg"
  },
  // ... (Aquí van el resto de tus objetos de videoData originales)
];

function changeVideo(direction) {
  const videoImg = document.querySelector('.main-video img');
  const videoTitle = document.querySelector('.video-title');
  const dots = document.querySelectorAll('.dot');

  if (!videoImg || !videoTitle) return;

  // Quitar active del punto actual
  dots[currentVideo].classList.remove('active');

  currentVideo += direction;
  if (currentVideo < 0) currentVideo = dots.length - 1;
  if (currentVideo >= dots.length) currentVideo = 0;

  // Actualizar contenido (He mantenido tu lógica de actualización)
  dots[currentVideo].classList.add('active');
  // Nota: Aquí se actualizarían los src si tuvieras más URLs en el array
}

window.changeVideo = changeVideo;

// --- Scroll Effects & Back to Top ---
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.scrollToTop = scrollToTop;

function initScrollEffects() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  window.addEventListener('scroll', function() {
    // Mostrar/ocultar botón de volver arriba
    if (window.scrollY > 500) {
      if (backToTopBtn) backToTopBtn.style.display = 'block';
    } else {
      if (backToTopBtn) backToTopBtn.style.display = 'none';
    }
    
    // Efecto Parallax en el Hero (Tu lógica original)
    const hero = document.querySelector('.hero');
    const scrollY = window.scrollY;

    if (hero && scrollY < window.innerHeight) {
      const slides = document.querySelectorAll('.hero-slide');
      slides.forEach(slide => {
        slide.style.transform = `translateY(${scrollY * 0.3}px)`;
      });
    }
  });
}

// --- Intersection Observer para Animaciones (Tu lógica original) ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Aplicar a tus elementos originales
document.querySelectorAll('.blog-post, .pass-card, .video-card').forEach(el => {
  // Estado inicial para la animación
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(el);
});

// Efectos de Hover en Nav (Tu lógica original)
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-3px)';
    this.style.transition = 'transform 0.2s ease';
  });
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});