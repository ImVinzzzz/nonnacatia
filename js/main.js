/* ============================================================
   Le Ricette di Nonna Catia — Script Principale
   ============================================================ */

'use strict';

// ── Dati del sito ──────────────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'antipasti',
    name: 'Antipasti',
    icon: 'fa-solid fa-cheese',
    active: false,
    count: 0
  },
  {
    id: 'primi',
    name: 'Primi Piatti',
    icon: 'fa-solid fa-bowl-food',
    active: true,
    count: 1
  },
  {
    id: 'secondi',
    name: 'Secondi Piatti',
    icon: 'fa-solid fa-drumstick-bite',
    active: false,
    count: 0
  },
  {
    id: 'dolci',
    name: 'Dolci',
    icon: 'fa-solid fa-cake-candles',
    active: true,
    count: 11
  },
  {
    id: 'conserve',
    name: 'Conserve e Marmellate',
    icon: 'fa-solid fa-jar',
    active: false,
    count: 0
  },
   {
    id: 'speciali',
    name: 'Occasioni Speciali',
    icon: 'fa-solid fa-star',
    active: false,
    count: 0
  },
  {
    id: 'piatti-unici',
    name: 'Piatti Unici',
    icon: 'fa-solid fa-fire-burner',
    active: false,
    count: 0
  },
  {
    id: 'pizza-focacce',
    name: 'Pizza e Focacce',
    icon: 'fa-solid fa-pizza-slice',
    active: false,
    count: 0
  }
];

// ── Navbar ─────────────────────────────────────────────────────────────────────
function renderNavbar() {
  const navEl = document.getElementById('navbar');
  if (!navEl) return;

  const dropdownItems = CATEGORIES.map(cat => `
    <a href="${cat.active ? cat.id + '.html' : '#'}"
       class="dropdown-item${!cat.active ? ' dropdown-item--disabled' : ''}"
       ${!cat.active ? 'aria-disabled="true"' : ''}>
      <i class="${cat.icon}" aria-hidden="true"></i>
      <span>${cat.name}</span>
      ${!cat.active ? '<span class="coming-soon-badge">Presto</span>' : ''}
    </a>
  `).join('');

  navEl.innerHTML = `
    <nav class="navbar" role="navigation" aria-label="Navigazione principale">
      <div class="container nav-container">

        <a href="index.html" class="nav-brand" aria-label="Torna alla home">
          <i class="fa-solid fa-book-open-reader" aria-hidden="true"></i>
          <span class="nav-brand-text">Le Ricette di <em>Nonna Catia</em></span>
        </a>

        <button class="nav-toggle" id="navToggle"
                aria-label="Apri menu di navigazione"
                aria-expanded="false"
                aria-controls="navMenu">
          <span class="toggle-bar"></span>
          <span class="toggle-bar"></span>
          <span class="toggle-bar"></span>
        </button>

        <div class="nav-menu" id="navMenu" role="menubar">
          <a href="index.html" class="nav-link" role="menuitem">
            <i class="fa-solid fa-house" aria-hidden="true"></i> Home
          </a>
          <div class="nav-dropdown" id="navDropdown">
            <button class="nav-link nav-dropdown-toggle"
                    id="dropdownToggle"
                    aria-expanded="false"
                    aria-haspopup="true"
                    aria-controls="dropdownMenu">
              Categorie
              <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="nav-dropdown-menu" id="dropdownMenu" role="menu">
              ${dropdownItems}
            </div>
          </div>
        </div>

      </div>
    </nav>
  `;

  _initNavEvents();
}

function _initNavEvents() {
  const toggle       = document.getElementById('navToggle');
  const menu         = document.getElementById('navMenu');
  const dropToggle   = document.getElementById('dropdownToggle');
  const dropMenu     = document.getElementById('dropdownMenu');

  // Hamburger
  toggle?.addEventListener('click', () => {
    const open = menu.classList.toggle('nav-menu--open');
    toggle.setAttribute('aria-expanded', open);
    toggle.classList.toggle('nav-toggle--open', open);
  });

  // Dropdown
  dropToggle?.addEventListener('click', e => {
    e.stopPropagation();
    const open = dropMenu.classList.toggle('nav-dropdown-menu--open');
    dropToggle.setAttribute('aria-expanded', open);
  });

  // Chiudi dropdown cliccando fuori
  document.addEventListener('click', () => {
    dropMenu?.classList.remove('nav-dropdown-menu--open');
    dropToggle?.setAttribute('aria-expanded', 'false');
  });

  // Chiudi menu mobile cliccando sui link
  menu?.querySelectorAll('a.dropdown-item:not(.dropdown-item--disabled)').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('nav-menu--open');
      toggle?.classList.remove('nav-toggle--open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Effetto scroll
  window.addEventListener('scroll', () => {
    document.querySelector('.navbar')
      ?.classList.toggle('navbar--scrolled', window.scrollY > 50);
  }, { passive: true });
}

// ── Footer ─────────────────────────────────────────────────────────────────────
function renderFooter() {
  const footerEl = document.getElementById('footer');
  if (!footerEl) return;

  const catLinks = CATEGORIES.map(cat => `
    <li>
      <a href="${cat.active ? cat.id + '.html' : '#'}"
         class="${!cat.active ? 'footer-link--disabled' : ''}">
        <i class="${cat.icon}" aria-hidden="true"></i>
        ${cat.name}
      </a>
    </li>
  `).join('');

  footerEl.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">

          <div class="footer-brand-col">
            <div class="footer-brand">
              <i class="fa-solid fa-book-open-reader" aria-hidden="true"></i>
              <h3>Le Ricette di<br><em>Nonna Catia</em></h3>
            </div>
            <p class="footer-tagline">
              Una collezione di sapori autentici, tramandati con pazienza e amore
              di generazione in generazione.
            </p>
            <p class="footer-heart">
              <i class="fa-solid fa-heart" aria-hidden="true"></i>
              Fatto con amore in cucina
            </p>
          </div>

          <div class="footer-links-col">
            <h4 class="footer-heading">Categorie</h4>
            <ul class="footer-cat-list">${catLinks}</ul>
          </div>

          <div class="footer-info-col">
            <h4 class="footer-heading">Il Ricettario</h4>
            <p>
              Anni di tradizione raccolti in queste pagine: dalle domeniche
              in famiglia ai segreti più gelosamente custoditi, ogni ricetta
              racconta una storia.
            </p>
            <div class="footer-deco-icons" aria-hidden="true">
              <i class="fa-solid fa-seedling" title="Ingredienti freschi"></i>
              <i class="fa-solid fa-fire-flame-curved" title="Ricette del cuore"></i>
              <i class="fa-solid fa-star" title="Le preferite"></i>
              <i class="fa-solid fa-leaf" title="Stagionale"></i>
            </div>
          </div>

        </div>

        <div class="footer-bottom">
          <p>
            <i class="fa-solid fa-heart" aria-hidden="true"></i>
            Le Ricette di Nonna Catia &mdash; Con tutto l'amore della cucina di casa
            <i class="fa-solid fa-heart" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </footer>
  `;
}

// ── Griglia categorie (Homepage) ───────────────────────────────────────────────
function initCategoryGrid() {
  const grid = document.getElementById('categoryGrid');
  if (!grid) return;

  grid.innerHTML = CATEGORIES.map((cat, i) => {
    const isActive = cat.active;
    return `
      <article class="cat-card${!isActive ? ' cat-card--inactive' : ''} animate-on-scroll"
               style="--delay: ${i * 0.08}s"
               role="${isActive ? 'button' : 'article'}"
               ${isActive ? `tabindex="0" onclick="location.href='${cat.id}.html'"` : ''}
               aria-label="${cat.name}${!isActive ? ' — prossimamente' : ''}">
        ${!isActive ? `
          <div class="cat-card-badge">
            <span>Prossimamente</span>
          </div>
        ` : ''}
        <i class="${cat.icon} cat-card-icon" aria-hidden="true"></i>
        <h3 class="cat-card-name">${cat.name}</h3>
        <span class="cat-card-cta">
          ${isActive
            ? `Sfoglia le ricette <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>`
            : `<i class="fa-solid fa-lock" aria-hidden="true"></i> In arrivo`
          }
        </span>
      </article>
    `;
  }).join('');

  // Attiva animazioni
  requestAnimationFrame(() => {
    document.querySelectorAll('.cat-card.animate-on-scroll').forEach(el => {
      el.classList.add('visible');
    });
  });

  // Accessibilità: Enter su cat-card focusabili
  grid.querySelectorAll('.cat-card[tabindex]').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// ── Checklist ingredienti (Pagina Ricetta) ─────────────────────────────────────
function initIngredientChecklist() {
  const items = document.querySelectorAll('.ingredient-item');
  if (!items.length) return;

  // Ripristina stato da sessionStorage
  items.forEach(item => {
    const id = item.dataset.ingredient;
    if (id && sessionStorage.getItem('checked_' + id) === '1') {
      item.classList.add('ingredient-item--checked');
    }
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('ingredient-item--checked');
      const id = item.dataset.ingredient;
      if (id) {
        const checked = item.classList.contains('ingredient-item--checked');
        sessionStorage.setItem('checked_' + id, checked ? '1' : '0');
      }
    });
  });

  // Pulsante reset checklist
  const resetBtn = document.getElementById('resetChecklist');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      items.forEach(item => {
        item.classList.remove('ingredient-item--checked');
        const id = item.dataset.ingredient;
        if (id) sessionStorage.removeItem('checked_' + id);
      });
    });
  }
}

// ── Animazioni scroll ──────────────────────────────────────────────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ── Breadcrumb ─────────────────────────────────────────────────────────────────
function renderBreadcrumb(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const crumbs = items.map((item, i) => {
    const isLast = i === items.length - 1;
    return isLast
      ? `<span>${item.label}</span>`
      : `<a href="${item.href}">${item.label}</a>
         <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>`;
  }).join('');

  el.innerHTML = `<nav class="breadcrumb" aria-label="Breadcrumb">${crumbs}</nav>`;
}

// ── Back to top ────────────────────────────────────────────────────────────────
function initBackToTop() {
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '<i class="fa-solid fa-chevron-up" aria-hidden="true"></i>';
  btn.setAttribute('aria-label', 'Torna in cima alla pagina');
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  document.body.appendChild(btn);

  window.addEventListener('scroll', () => {
    btn.classList.toggle('back-to-top--visible', window.scrollY > 380);
  }, { passive: true });
}

// ── Init ───────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
  initCategoryGrid();
  initScrollAnimations();
  initIngredientChecklist();
  initBackToTop();
});
