// ===== CMS: Load content from localStorage =====
(function loadCmsContent() {
  const STORAGE_KEY = 'tranquility_cms';
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return;

  try {
    const d = JSON.parse(stored);

    // Helper: set text content safely
    const setText = (sel, val) => {
      const el = document.querySelector(sel);
      if (el && val !== undefined) el.textContent = val;
    };
    const setHtml = (sel, val) => {
      const el = document.querySelector(sel);
      if (el && val !== undefined) el.innerHTML = val;
    };
    const setAttr = (sel, attr, val) => {
      const el = document.querySelector(sel);
      if (el && val !== undefined) el.setAttribute(attr, val);
    };

    // SEO
    if (d.seo) {
      if (d.seo.title) document.title = d.seo.title;
      if (d.seo.description) {
        const meta = document.querySelector('meta[name="description"]');
        if (meta) meta.setAttribute('content', d.seo.description);
      }
      if (d.seo.logoText) {
        document.querySelectorAll('.logo-text').forEach(el => el.textContent = d.seo.logoText);
      }
      if (d.seo.footerText) setText('.footer-about p:not(.logo *)', d.seo.footerText);
      if (d.seo.copyright) {
        const fb = document.querySelector('.footer-bottom p');
        if (fb) fb.innerHTML = `&copy; ${d.seo.copyright} Tranquility Rehab Centre. All rights reserved.`;
      }
    }

    // Hero
    if (d.hero) {
      setText('.hero-badge', d.hero.badge);
      if (d.hero.heading) {
        const h1 = document.querySelector('.hero h1');
        if (h1) {
          h1.innerHTML = d.hero.heading.replace(/\*([^*]+)\*/g, '<span class="highlight">$1</span>');
        }
      }
      setText('.hero-subtitle', d.hero.subtitle);
      const btns = document.querySelectorAll('.hero-buttons .btn');
      if (btns[0] && d.hero.btnPrimary) btns[0].textContent = d.hero.btnPrimary;
      if (btns[1] && d.hero.btnPhone) btns[1].textContent = d.hero.btnPhone;
      if (btns[1] && d.hero.phone) btns[1].setAttribute('href', 'tel:' + d.hero.phone.replace(/\s/g, ''));

      const stats = document.querySelectorAll('.stat');
      if (stats[0]) { setText('.stat:nth-child(1) .stat-number', d.hero.stat1Num); setText('.stat:nth-child(1) .stat-label', d.hero.stat1Label); }
      if (stats[1]) { setText('.stat:nth-child(2) .stat-number', d.hero.stat2Num); setText('.stat:nth-child(2) .stat-label', d.hero.stat2Label); }
      if (stats[2]) { setText('.stat:nth-child(3) .stat-number', d.hero.stat3Num); setText('.stat:nth-child(3) .stat-label', d.hero.stat3Label); }
    }

    // About
    if (d.about) {
      const aboutSec = document.getElementById('about');
      if (aboutSec) {
        const tag = aboutSec.querySelector('.section-tag');
        const h2 = aboutSec.querySelector('h2');
        const intro = aboutSec.querySelector('.section-intro');
        if (tag) tag.textContent = d.about.tag;
        if (h2) h2.textContent = d.about.heading;
        if (intro) intro.textContent = d.about.intro;

        const cards = aboutSec.querySelectorAll('.about-card');
        if (cards[0]) { cards[0].querySelector('h3').textContent = d.about.card1Title; cards[0].querySelector('p').textContent = d.about.card1Text; }
        if (cards[1]) { cards[1].querySelector('h3').textContent = d.about.card2Title; cards[1].querySelector('p').textContent = d.about.card2Text; }
        if (cards[2]) { cards[2].querySelector('h3').textContent = d.about.card3Title; cards[2].querySelector('p').textContent = d.about.card3Text; }
      }
    }

    // Programs
    if (d.programs) {
      const sec = document.getElementById('programs');
      if (sec) {
        const tag = sec.querySelector('.section-tag');
        const h2 = sec.querySelector('h2');
        const intro = sec.querySelector('.section-intro');
        if (tag) tag.textContent = d.programs.tag;
        if (h2) h2.textContent = d.programs.heading;
        if (intro) intro.textContent = d.programs.intro;

        if (d.programs.items) {
          const grid = sec.querySelector('.programs-grid');
          if (grid) {
            grid.innerHTML = d.programs.items.map(item => `
              <div class="program-card">
                <div class="program-icon">${item.icon}</div>
                <h3>${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.desc)}</p>
                <ul class="program-features">
                  ${item.features.split(',').map(f => `<li>${escapeHtml(f.trim())}</li>`).join('')}
                </ul>
              </div>
            `).join('');
          }
        }
      }
    }

    // Why Us
    if (d.whyus) {
      const sec = document.getElementById('why-us');
      if (sec) {
        const tag = sec.querySelector('.section-tag');
        const h2 = sec.querySelector('h2');
        if (tag) tag.textContent = d.whyus.tag;
        if (h2) h2.textContent = d.whyus.heading;

        if (d.whyus.items) {
          const grid = sec.querySelector('.why-grid');
          if (grid) {
            grid.innerHTML = d.whyus.items.map((item, i) => `
              <div class="why-item">
                <div class="why-number">${String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.text)}</p>
                </div>
              </div>
            `).join('');
          }
        }
      }
    }

    // Team
    if (d.team) {
      const sec = document.getElementById('team');
      if (sec) {
        const tag = sec.querySelector('.section-tag');
        const h2 = sec.querySelector('h2');
        const intro = sec.querySelector('.section-intro');
        if (tag) tag.textContent = d.team.tag;
        if (h2) h2.textContent = d.team.heading;
        if (intro) intro.textContent = d.team.intro;

        if (d.team.members) {
          const grid = sec.querySelector('.team-grid');
          if (grid) {
            grid.innerHTML = d.team.members.map(m => `
              <div class="team-card">
                <div class="team-avatar">${escapeHtml(m.initials)}</div>
                <h3>${escapeHtml(m.name)}</h3>
                <span class="team-role">${escapeHtml(m.role)}</span>
                <p>${escapeHtml(m.bio)}</p>
              </div>
            `).join('');
          }
        }
      }
    }

    // Testimonials
    if (d.testimonials) {
      const sec = document.getElementById('testimonials');
      if (sec) {
        const tag = sec.querySelector('.section-tag');
        const h2 = sec.querySelector('h2');
        if (tag) tag.textContent = d.testimonials.tag;
        if (h2) h2.textContent = d.testimonials.heading;

        if (d.testimonials.items) {
          const grid = sec.querySelector('.testimonials-grid');
          if (grid) {
            grid.innerHTML = d.testimonials.items.map(item => `
              <div class="testimonial-card">
                <div class="testimonial-quote">&ldquo;</div>
                <p>${escapeHtml(item.text)}</p>
                <div class="testimonial-author">
                  <strong>${escapeHtml(item.author)}</strong>
                  <span>${escapeHtml(item.label)}</span>
                </div>
              </div>
            `).join('');
          }
        }
      }
    }

    // Contact
    if (d.contact) {
      const sec = document.getElementById('contact');
      if (sec) {
        const items = sec.querySelectorAll('.contact-item');
        // Location
        if (items[0]) {
          const p = items[0].querySelector('p');
          if (p) p.innerHTML = `${escapeHtml(d.contact.location1)}<br>${escapeHtml(d.contact.location2)}<br>${escapeHtml(d.contact.location3)}`;
        }
        // Phones
        if (items[1]) {
          const div = items[1].querySelector('div:last-child');
          if (div) {
            const phone1Clean = d.contact.phone1.replace(/\s/g, '');
            const phone2Clean = d.contact.phone2.replace(/\s/g, '');
            const person = d.contact.person || 'Monica Sawe';
            div.innerHTML = `<h4>Phone (24/7 Helpline)</h4><p><strong class="contact-person">${escapeHtml(person)}</strong></p><p><a href="tel:${phone1Clean}">${escapeHtml(d.contact.phone1)}</a></p><p><a href="tel:${phone2Clean}">${escapeHtml(d.contact.phone2)}</a></p>`;
          }
        }
        // Email
        if (items[2]) {
          const div = items[2].querySelector('div:last-child');
          if (div) div.innerHTML = `<h4>Email</h4><p><a href="mailto:${escapeHtml(d.contact.email)}">${escapeHtml(d.contact.email)}</a></p>`;
        }
        // Hours
        if (items[3]) {
          const div = items[3].querySelector('div:last-child');
          if (div) div.innerHTML = `<h4>Visiting Hours</h4><p>${d.contact.hours.replace(/\n/g, '<br>')}</p>`;
        }
      }
      // CTA
      if (d.contact.ctaHeading) setText('.cta-content h2', d.contact.ctaHeading);
      if (d.contact.ctaText) setText('.cta-content p', d.contact.ctaText);
    }

    // Images
    if (d.images) {
      if (d.images.heroBg) setAttr('.hero-bg-img', 'src', d.images.heroBg);
      const bannerItems = document.querySelectorAll('.image-banner-item');
      if (bannerItems[0]) { if (d.images.about1) bannerItems[0].querySelector('img').src = d.images.about1; if (d.images.about1Cap) bannerItems[0].querySelector('.image-caption').textContent = d.images.about1Cap; }
      if (bannerItems[1]) { if (d.images.about2) bannerItems[1].querySelector('img').src = d.images.about2; if (d.images.about2Cap) bannerItems[1].querySelector('.image-caption').textContent = d.images.about2Cap; }
      if (bannerItems[2]) { if (d.images.about3) bannerItems[2].querySelector('img').src = d.images.about3; if (d.images.about3Cap) bannerItems[2].querySelector('.image-caption').textContent = d.images.about3Cap; }
      const stripImgs = document.querySelectorAll('.nature-strip-inner img');
      if (stripImgs[0] && d.images.strip1) stripImgs[0].src = d.images.strip1;
      if (stripImgs[1] && d.images.strip2) stripImgs[1].src = d.images.strip2;
      if (stripImgs[2] && d.images.strip3) stripImgs[2].src = d.images.strip3;
      if (stripImgs[3] && d.images.strip4) stripImgs[3].src = d.images.strip4;
    }

    // Re-observe new elements for scroll animations
    document.querySelectorAll('.program-card, .why-item, .team-card, .testimonial-card').forEach(el => {
      el.classList.add('fade-in');
      if (window._cmsObserver) window._cmsObserver.observe(el);
    });

  } catch (e) {
    console.warn('CMS load error:', e);
  }

  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
})();

// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Store observer globally for CMS dynamic elements
window._cmsObserver = observer;

// Add fade-in class to animatable elements
document.querySelectorAll(
  '.about-card, .program-card, .why-item, .team-card, .testimonial-card, .contact-item, .section-header'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});


// ===== Animated Stat Counters =====
window.addEventListener('load', function() {
  document.querySelectorAll('.stat-number').forEach(function(el) {
    var text = el.textContent.trim();
    var match = text.match(/^(\d+)(.*)$/);
    if (!match) return;

    var target = parseInt(match[1]);
    var suffix = match[2];
    var done = false;

    var sObserver = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting && !done) {
        done = true;
        sObserver.disconnect();

        var duration = 1500;
        var start = Date.now();
        el.textContent = '0' + suffix;

        var timer = setInterval(function() {
          var elapsed = Date.now() - start;
          var progress = Math.min(elapsed / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target) + suffix;
          if (progress >= 1) {
            clearInterval(timer);
            el.textContent = target + suffix;
          }
        }, 16);
      }
    }, { threshold: 0.3 });

    sObserver.observe(el);
  });
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');

if (contactForm) contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Basic validation
  if (!data.name || !data.phone) {
    showFormMessage('Please fill in all required fields.', 'error');
    return;
  }

  // Simulate form submission
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    showFormMessage(
      'Thank you for reaching out. Our team will contact you within 24 hours.',
      'success'
    );
    contactForm.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
});

function showFormMessage(message, type) {
  if (!contactForm) return;
  // Remove existing message
  const existing = contactForm.querySelector('.form-message');
  if (existing) existing.remove();

  const msgEl = document.createElement('div');
  msgEl.className = `form-message form-message-${type}`;
  msgEl.textContent = message;
  msgEl.style.cssText = `
    padding: 14px 20px;
    border-radius: 8px;
    margin-top: 16px;
    font-size: 0.9rem;
    text-align: center;
    background: ${type === 'success' ? '#e8f5ef' : '#fde8e8'};
    color: ${type === 'success' ? '#1e5c45' : '#c53030'};
    border: 1px solid ${type === 'success' ? '#2a7d5f' : '#c53030'}20;
  `;

  contactForm.appendChild(msgEl);

  setTimeout(() => msgEl.remove(), 6000);
}

// ===== Active Navigation Highlight =====
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.querySelectorAll('a').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active-link');
        }
      });
    }
  });
});
