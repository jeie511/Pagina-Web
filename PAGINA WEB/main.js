document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initVideoCarousel();
  initScrollEffects();
  initCardAnimations();
  initStagePreview();
  initInteractiveSections();
  initFighterCards();
  initFighterDetailPage();
  checkCookieStatus();
});

function closeCookieModal() {
  const modal = document.getElementById('cookie-modal');
  if (!modal) return;

  modal.classList.add('hidden');
  localStorage.setItem('cookiesAccepted', 'true');
}

function checkCookieStatus() {
  const modal = document.getElementById('cookie-modal');
  if (!modal) return;

  if (localStorage.getItem('cookiesAccepted')) {
    modal.classList.add('hidden');
  }
}

window.closeCookieModal = closeCookieModal;

function initHeroSlider() {
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  if (slides.length <= 1) return;

  let currentSlide = 0;

  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 5000);
}

let currentVideo = 0;
const videoData = [
  {
    title: 'Super Smash Bros. Ultimate - La ultima llave (Nintendo Switch)',
    image: 'https://ext.same-assets.com/874503100/2811278779.jpeg',
    page: 'videos.html#ultima-llave'
  },
  {
    title: 'Presentacion de Sora en Super Smash Bros. Ultimate',
    image: 'https://ext.same-assets.com/874503100/1407326753.jpeg',
    page: 'videos.html#sora'
  },
  {
    title: 'Presentacion de Kazuya Mishima',
    image: 'https://ext.same-assets.com/874503100/365008754.jpeg',
    page: 'videos.html#kazuya'
  },
  {
    title: 'Todos los luchadores reunidos',
    image: 'https://ext.same-assets.com/874503100/3817851282.jpeg',
    page: 'videos.html#plantel'
  },
  {
    title: 'Escenarios y combate local',
    image: 'https://ext.same-assets.com/874503100/46067910.jpeg',
    page: 'videos.html#escenarios'
  },
  {
    title: 'Trailer general de Super Smash Bros. Ultimate',
    image: 'https://ext.same-assets.com/874503100/279105398.jpeg',
    page: 'videos.html#trailer-general'
  }
];

function updateVideo(index) {
  const videoImg = document.querySelector('.main-video img');
  const videoTitle = document.querySelector('.video-title');
  const videoLink = document.querySelector('.main-video-link');
  const dots = Array.from(document.querySelectorAll('.dot'));
  const nextIndex = ((index % videoData.length) + videoData.length) % videoData.length;
  const selectedVideo = videoData[nextIndex];

  if (!videoImg || !videoTitle) return;

  currentVideo = nextIndex;
  videoImg.src = selectedVideo.image;
  videoImg.alt = selectedVideo.title;
  videoTitle.textContent = selectedVideo.title;

  if (videoLink) {
    videoLink.href = selectedVideo.page;
  }

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === currentVideo);
    dot.setAttribute('aria-selected', dotIndex === currentVideo ? 'true' : 'false');
  });
}

function changeVideo(direction) {
  updateVideo(currentVideo + direction);
}

window.changeVideo = changeVideo;

function initVideoCarousel() {
  const dots = Array.from(document.querySelectorAll('.dot'));
  if (!dots.length) return;

  dots.forEach((dot, index) => {
    dot.setAttribute('role', 'button');
    dot.setAttribute('tabindex', '0');
    dot.addEventListener('click', () => updateVideo(index));
    dot.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        updateVideo(index);
      }
    });
  });

  updateVideo(0);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.scrollToTop = scrollToTop;

function initScrollEffects() {
  const backToTopBtn = document.querySelector('.back-to-top');

  if (backToTopBtn) {
    backToTopBtn.style.display = 'none';
  }

  window.addEventListener('scroll', () => {
    if (backToTopBtn) {
      backToTopBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
    }

    const hero = document.querySelector('.hero');
    if (!hero || window.scrollY >= window.innerHeight) return;

    document.querySelectorAll('.hero-slide').forEach((slide) => {
      slide.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    });
  });
}

function initCardAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.blog-post, .pass-card, .video-card, .info-card, .simple-card').forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
  });

  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
      this.style.transition = 'transform 0.2s ease';
    });

    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

function initStagePreview() {
  const modal = document.getElementById('stageModal');
  const modalImg = document.getElementById('imgFull');
  const caption = document.getElementById('caption');
  const cards = document.querySelectorAll('.stage-card');

  if (!modal || !modalImg || !caption || !cards.length) return;

  cards.forEach((card) => {
    const image = card.querySelector('img');
    const info = card.querySelector('.stage-info');
    if (!image || !info) return;

    card.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = image.src;
      modalImg.alt = info.textContent.trim();
      caption.textContent = info.textContent.trim();
      document.body.style.overflow = 'hidden';
    });
  });

  const closeButton = modal.querySelector('.close-modal');
  if (closeButton) {
    closeButton.addEventListener('click', (event) => {
      event.stopPropagation();
      closePreview();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
      closePreview();
    }
  });
}

function closePreview() {
  const modal = document.getElementById('stageModal');
  if (!modal) return;

  modal.style.display = 'none';
  document.body.style.overflow = '';
}

window.closePreview = closePreview;

function initInteractiveSections() {
  const clickTargets = [
    { selector: '.fighter-banner', url: 'videos.html#presentaciones' },
    { selector: '.main-video-link', url: videoData[0].page },
    { selector: '.switch-logo', url: 'compras.html' }
  ];

  clickTargets.forEach(({ selector, url }) => {
    const element = document.querySelector(selector);
    if (!element) return;

    if (!element.getAttribute('href')) {
      element.setAttribute('role', 'link');
      element.setAttribute('tabindex', '0');
      element.addEventListener('click', () => {
        window.location.href = url;
      });
      element.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          window.location.href = url;
        }
      });
    }
  });
}

function initFighterCards() {
  const fighterGrid = document.querySelector('.fighters-grid');
  if (!fighterGrid) return;

  fighterGrid.querySelectorAll('.fighter-card').forEach((card) => {
    if (card.closest('.fighter-card-link')) return;

    const name = card.querySelector('.fighter-name')?.textContent?.trim();
    const number = card.querySelector('.fighter-number')?.textContent?.trim();
    const image = card.querySelector('img')?.getAttribute('src');
    if (!name || !number || !image) return;

    card.style.cursor = 'pointer';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');

    const target = `fighter-detail.html?name=${encodeURIComponent(name)}&number=${encodeURIComponent(number)}&image=${encodeURIComponent(image)}`;

    const goToDetail = () => {
      window.location.href = target;
    };

    card.addEventListener('click', goToDetail);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        goToDetail();
      }
    });
  });
}

function initFighterDetailPage() {
  const page = document.querySelector('[data-fighter-detail]');
  if (!page) return;

  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || 'Luchador';
  const number = params.get('number') || '--';
  const image = params.get('image');

  const nameTarget = page.querySelector('[data-name]');
  const numberTargets = page.querySelectorAll('[data-number]');
  const imageTarget = page.querySelector('[data-image]');
  const seriesTarget = page.querySelector('[data-series]');
  const debutTarget = page.querySelector('[data-debut]');

  if (nameTarget) {
    nameTarget.textContent = name.toUpperCase();
  }

  numberTargets.forEach((target) => {
    target.textContent = number;
  });

  if (imageTarget && image) {
    imageTarget.src = image;
    imageTarget.alt = name;
  }

  if (seriesTarget) {
    seriesTarget.textContent = inferSeries(name);
  }

  if (debutTarget) {
    debutTarget.textContent = 'Disponible en Super Smash Bros. Ultimate';
  }
}

function inferSeries(name) {
  const seriesMap = [
    { match: ['Mario', 'Luigi', 'Peach', 'Bowser', 'Dr. Mario', 'Daisy', 'Rosalina', 'Bowsy'], series: 'Serie Super Mario' },
    { match: ['Link', 'Zelda', 'Sheik', 'Ganondorf', 'Young Link', 'Toon Link'], series: 'Serie The Legend of Zelda' },
    { match: ['Samus', 'Samus Oscura', 'Ridley'], series: 'Serie Metroid' },
    { match: ['Kirby', 'Meta Knight', 'Rey Dedede'], series: 'Serie Kirby' },
    { match: ['Fox', 'Falco', 'Wolf'], series: 'Serie Star Fox' },
    { match: ['Pikachu', 'Pichu', 'Mewtwo', 'Greninja', 'Lucario', 'Incineroar', 'Pokemon Stadium', 'Entrenador Pokemon'], series: 'Serie Pokemon' },
    { match: ['Marth', 'Lucina', 'Roy', 'Chrom', 'Ike', 'Daraen', 'Corrin'], series: 'Serie Fire Emblem' },
    { match: ['Donkey Kong', 'Diddy Kong', 'King K. Rool'], series: 'Serie Donkey Kong' },
    { match: ['Pit', 'Pit Sombrio', 'Palutena'], series: 'Serie Kid Icarus' },
    { match: ['Captain Falcon'], series: 'Serie F-Zero' },
    { match: ['Ness', 'Lucas'], series: 'Serie EarthBound' },
    { match: ['Ice Climbers'], series: 'Serie Ice Climber' },
    { match: ['Jigglypuff'], series: 'Serie Pokemon' },
    { match: ['Yoshi'], series: 'Serie Yoshi' },
    { match: ['Wario'], series: 'Serie WarioWare' },
    { match: ['Snake'], series: 'Serie Metal Gear' },
    { match: ['Sonic'], series: 'Serie Sonic the Hedgehog' },
    { match: ['Olimar'], series: 'Serie Pikmin' },
    { match: ['R.O.B.'], series: 'Serie Nintendo' },
    { match: ['Aldeano', 'Canela'], series: 'Serie Animal Crossing' },
    { match: ['Mega Man'], series: 'Serie Mega Man' },
    { match: ['Wii Fit'], series: 'Serie Wii Fit' },
    { match: ['Little Mac'], series: 'Serie Punch-Out!!' },
    { match: ['Luchador Mii'], series: 'Serie Mii' },
    { match: ['PAC-MAN'], series: 'Serie PAC-MAN' },
    { match: ['Shulk'], series: 'Serie Xenoblade Chronicles' },
    { match: ['Duo Duck Hunt'], series: 'Serie Duck Hunt' },
    { match: ['Ryu', 'Ken'], series: 'Serie Street Fighter' },
    { match: ['Cloud'], series: 'Serie Final Fantasy' },
    { match: ['Bayonetta'], series: 'Serie Bayonetta' },
    { match: ['Inkling'], series: 'Serie Splatoon' },
    { match: ['Simon', 'Richter'], series: 'Serie Castlevania' }
  ];

  const found = seriesMap.find((entry) => entry.match.some((label) => name.includes(label)));
  return found ? found.series : 'Universo Super Smash Bros.';
}
