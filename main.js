const fighterProfiles = {
  Mario: {
    series: 'Serie Super Mario',
    debut: 'Super Smash Bros. (1999)',
    tagline: 'Equilibrado, versatil y siempre fiable en cualquier formato.',
    description: 'Mario representa el estilo clasico de Smash: buenas herramientas de neutral, combos consistentes y opciones claras para aprender fundamentos.',
    accent: '#e60012',
    background: 'radial-gradient(circle at 75%, #4a4a4a 0%, #000 82%)'
  },
  'Donkey Kong': {
    series: 'Serie Donkey Kong',
    debut: 'Super Smash Bros. (1999)',
    tagline: 'Potencia bruta, agarres temibles y castigos devastadores.',
    description: 'Donkey Kong convierte cada lectura correcta en mucho dano. Su juego gira alrededor de control espacial, agarres y presion vertical.',
    accent: '#9b4d22',
    background: 'radial-gradient(circle at 75%, #4b2d18 0%, #000 84%)'
  },
  Marth: {
    series: 'Serie Fire Emblem',
    debut: 'Super Smash Bros. Melee (2001)',
    tagline: 'Precision, alcance y control fino del espacio.',
    description: 'Marth recompensa la distancia exacta y el uso inteligente de la punta de su espada. Es un luchador tecnico y elegante.',
    accent: '#2160d8',
    background: 'radial-gradient(circle at 75%, #22375f 0%, #000 82%)'
  },
  Lucina: {
    series: 'Serie Fire Emblem',
    debut: 'Super Smash Bros. for Nintendo 3DS / Wii U (2014)',
    tagline: 'Consistencia, velocidad y espada sin complicaciones.',
    description: 'Lucina mantiene el alcance y movilidad de la saga Fire Emblem, pero con una distribucion de dano uniforme muy estable.',
    accent: '#4c82ff',
    background: 'radial-gradient(circle at 75%, #2b3b6b 0%, #000 82%)'
  },
  Link: {
    series: 'Serie The Legend of Zelda',
    debut: 'Super Smash Bros. (1999)',
    tagline: 'Espada, proyectiles y control total del ritmo.',
    description: 'Link mezcla combate a media distancia con herramientas de zonning y castigos pesados. Muy fuerte cuando marca el tempo.',
    accent: '#1e8d72',
    background: 'radial-gradient(circle at 75%, #21483e 0%, #000 82%)'
  },
  Zelda: {
    series: 'Serie The Legend of Zelda',
    debut: 'Super Smash Bros. Melee (2001)',
    tagline: 'Magia explosiva y castigos contundentes.',
    description: 'Zelda destaca por sus herramientas defensivas, trampas espaciales y golpes con mucha recompensa.',
    accent: '#c08cff',
    background: 'radial-gradient(circle at 75%, #4b3568 0%, #000 82%)'
  },
  Kirby: {
    series: 'Serie Kirby',
    debut: 'Super Smash Bros. (1999)',
    tagline: 'Ligero, creativo y sorprendentemente flexible.',
    description: 'Kirby castiga errores con cadenas cortas y edgeguards muy peligrosos, especialmente cerca de los bordes.',
    accent: '#ff77b7',
    background: 'radial-gradient(circle at 75%, #603249 0%, #000 82%)'
  },
  Pikachu: {
    series: 'Serie Pokemon',
    debut: 'Super Smash Bros. (1999)',
    tagline: 'Movilidad electrica y presion constante.',
    description: 'Pikachu combina velocidad, recuperacion excelente y una ventaja continua que no deja respirar al rival.',
    accent: '#f3c300',
    background: 'radial-gradient(circle at 75%, #665118 0%, #000 82%)'
  },
  'Captain Falcon': {
    series: 'Serie F-Zero',
    debut: 'Super Smash Bros. (1999)',
    tagline: 'Velocidad, explosividad y lectura agresiva.',
    description: 'Captain Falcon convierte cada hueco en una oportunidad para castigar con fuerza. Muy espectacular y muy directo.',
    accent: '#1d66ff',
    background: 'radial-gradient(circle at 75%, #18305b 0%, #000 82%)'
  },
  Ness: {
    series: 'Serie EarthBound',
    debut: 'Super Smash Bros. (1999)',
    tagline: 'Presion aerea, trampas y mucha personalidad.',
    description: 'Ness mezcla proyectiles utiles, combos sencillos y edgeguards molestos para dominar intercambios largos.',
    accent: '#ff6b3d',
    background: 'radial-gradient(circle at 75%, #5e311d 0%, #000 82%)'
  },
  Fox: {
    series: 'Serie Star Fox',
    debut: 'Super Smash Bros. (1999)',
    tagline: 'Velocidad pura y castigos rapidos.',
    description: 'Fox acelera el combate con movilidad, presion y confirmaciones muy veloces. Ideal para un estilo agresivo.',
    accent: '#6ec5ff',
    background: 'radial-gradient(circle at 75%, #22435a 0%, #000 82%)'
  },
  Samus: {
    series: 'Serie Metroid',
    debut: 'Super Smash Bros. (1999)',
    tagline: 'Control de espacio y potencia a distancia.',
    description: 'Samus castiga con proyectiles, trampas y ataques cargados. Muy buena para marcar distancias y administrar ritmo.',
    accent: '#ff9c1a',
    background: 'radial-gradient(circle at 75%, #61401c 0%, #000 82%)'
  },
  'Samus Oscura': {
    series: 'Serie Metroid',
    debut: 'Super Smash Bros. Ultimate (2018)',
    tagline: 'Presencia intimidante con herramientas familiares.',
    description: 'Samus Oscura conserva el arquetipo de zonning pesado de Samus con identidad visual propia y postura mas fria.',
    accent: '#6f83ff',
    background: 'radial-gradient(circle at 75%, #2d3166 0%, #000 82%)'
  },
  default: {
    series: 'Universo Super Smash Bros.',
    debut: 'Disponible en Super Smash Bros. Ultimate',
    tagline: 'Parte del plantel historico de Ultimate.',
    description: 'Cada luchador del roster aporta herramientas, ritmos y matchups distintos, reforzando la variedad que define a Ultimate.',
    accent: '#e60012',
    background: 'radial-gradient(circle at 75%, #333 0%, #000 82%)'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initVideoCarousel();
  initScrollEffects();
  initCardAnimations();
  initStagePreview();
  initInteractiveSections();
  initFighterCards();
  initFighterDetailPage();
  initFighterFilters();
  initStageFilters();
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

  document.querySelectorAll('.blog-post, .pass-card, .video-card, .info-card, .simple-card, .video-entry, .stage-card').forEach((element) => {
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
  const profile = fighterProfiles[name] || fighterProfiles.default;

  const nameTarget = page.querySelector('[data-name]');
  const numberTargets = page.querySelectorAll('[data-number]');
  const imageTarget = page.querySelector('[data-image]');
  const seriesTarget = page.querySelector('[data-series]');
  const debutTarget = page.querySelector('[data-debut]');
  const taglineTarget = page.querySelector('[data-tagline]');
  const descriptionTarget = page.querySelector('[data-description]');
  const accentTargets = page.querySelectorAll('[data-accent]');

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
    seriesTarget.textContent = profile.series;
  }

  if (debutTarget) {
    debutTarget.textContent = profile.debut;
  }

  if (taglineTarget) {
    taglineTarget.textContent = profile.tagline;
  }

  if (descriptionTarget) {
    descriptionTarget.textContent = profile.description;
  }

  if (page && profile.background) {
    page.style.background = profile.background;
  }

  accentTargets.forEach((target) => {
    target.style.setProperty('--fighter-accent', profile.accent);
  });
}

function initFighterFilters() {
  const grid = document.querySelector('.fighters-grid');
  const searchInput = document.querySelector('[data-fighter-search]');
  const countTarget = document.querySelector('[data-fighter-count]');
  if (!grid || !searchInput || !countTarget) return;

  const cards = Array.from(grid.children);

  const applyFilter = () => {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach((entry) => {
      const card = entry.classList.contains('fighter-card') ? entry : entry.querySelector('.fighter-card');
      const name = card?.querySelector('.fighter-name')?.textContent?.toLowerCase() || '';
      const number = card?.querySelector('.fighter-number')?.textContent?.toLowerCase() || '';
      const matches = !query || name.includes(query) || number.includes(query);

      entry.style.display = matches ? '' : 'none';
      if (matches) {
        visible += 1;
      }
    });

    countTarget.textContent = `${visible} luchadores visibles`;
  };

  searchInput.addEventListener('input', applyFilter);
  applyFilter();
}

function initStageFilters() {
  const grid = document.getElementById('mainGrid');
  const searchInput = document.querySelector('[data-stage-search]');
  const countTarget = document.querySelector('[data-stage-count]');
  if (!grid || !searchInput || !countTarget) return;

  const applyFilter = () => {
    const query = searchInput.value.trim().toLowerCase();
    const cards = Array.from(grid.querySelectorAll('.stage-card'));
    let visible = 0;

    cards.forEach((card) => {
      const stageName = card.querySelector('.stage-info')?.textContent?.toLowerCase() || '';
      const stageNumber = card.querySelector('.stage-number')?.textContent?.toLowerCase() || '';
      const matches = !query || stageName.includes(query) || stageNumber.includes(query);

      card.style.display = matches ? '' : 'none';
      if (matches) {
        visible += 1;
      }
    });

    countTarget.textContent = `${visible} escenarios visibles`;
  };

  searchInput.addEventListener('input', applyFilter);
  applyFilter();
}
