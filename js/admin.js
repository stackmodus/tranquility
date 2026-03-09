// ===== Login Gate =====
// ===== Login Gate =====
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'tranquility2026';
const AUTH_KEY = 'tranquility_admin_auth';

function handleLogin(e) {
  e.preventDefault();
  var username = document.getElementById('loginUsername').value;
  var password = document.getElementById('loginPassword').value;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    sessionStorage.setItem(AUTH_KEY, 'true');
    document.getElementById('loginOverlay').classList.add('hidden');
    document.getElementById('adminLayout').style.display = '';
  } else {
    document.getElementById('loginError').style.display = 'block';
    document.getElementById('loginPassword').value = '';
    document.getElementById('loginUsername').focus();
  }
  return false;
}

// Check if already authenticated this session
if (sessionStorage.getItem(AUTH_KEY) === 'true') {
  document.getElementById('loginOverlay').classList.add('hidden');
  document.getElementById('adminLayout').style.display = '';
}

// ===== Default Content (mirrors index.html) =====
const DEFAULTS = {
  hero: {
    badge: "The First Rehabilitation Centre in Trans Nzoia County",
    heading: "Your Journey to *Healing* Begins Here",
    subtitle: "Pioneering compassionate, evidence-based addiction recovery and mental health treatment in Trans Nzoia, Kenya.",
    btnPrimary: "Start Your Recovery",
    btnPhone: "Call Us: +254 721 287624",
    phone: "+254721287624",
    stat1Num: "90+", stat1Label: "Day Treatment Programme",
    stat2Num: "6+", stat2Label: "Treatment Programmes",
    stat3Num: "1st", stat3Label: "In Trans Nzoia County"
  },
  about: {
    tag: "Who We Are",
    heading: "A Sanctuary for Recovery",
    intro: "As the first rehabilitation centre in Trans Nzoia County, Tranquility Rehab Centre is pioneering accessible, world-class recovery services in a region that has long needed them. Nestled in the serene landscapes of western Kenya, we provide a peaceful environment where individuals can break free from addiction and reclaim their lives.",
    card1Title: "Our Mission",
    card1Text: "To provide holistic, culturally sensitive rehabilitation services that restore hope and empower individuals to achieve lasting recovery and reintegration into society.",
    card2Title: "Our Vision",
    card2Text: "To be East Africa's leading rehabilitation centre, recognised for excellence in addiction treatment, mental health care, and community transformation.",
    card3Title: "Our Values",
    card3Text: "Compassion, dignity, integrity, and evidence-based practice guide everything we do. Every person deserves a chance at a healthy, fulfilling life."
  },
  programs: {
    tag: "What We Offer",
    heading: "Treatment Programs",
    intro: "Personalised treatment plans designed to address the root causes of addiction and mental health challenges.",
    items: [
      { icon: "\u{1F331}", title: "Inpatient Rehabilitation", desc: "Our 90-day residential programme provides 24/7 care in a structured, supportive environment with individual and group therapy sessions.", features: "Medical detoxification, Individual counselling, Group therapy, Family involvement" },
      { icon: "\u{1F465}", title: "Outpatient Programme", desc: "Flexible treatment that allows clients to maintain daily responsibilities while receiving structured therapeutic support.", features: "Weekly therapy sessions, Support groups, Relapse prevention, Skills training" },
      { icon: "\u{1F496}", title: "Mental Health Treatment", desc: "Comprehensive care for depression, anxiety, trauma, and co-occurring disorders alongside addiction treatment.", features: "Psychiatric evaluation, CBT & DBT therapy, Trauma-informed care, Medication management" },
      { icon: "\u{1F31F}", title: "Aftercare & Sober Living", desc: "Continued support after primary treatment to help maintain sobriety and build a strong foundation for long-term recovery.", features: "Alumni network, Mentorship programme, Transitional housing, Employment support" },
      { icon: "\u{1F334}", title: "Holistic Therapies", desc: "Complementary approaches that nurture mind, body, and spirit as part of comprehensive recovery.", features: "Yoga & meditation, Art & music therapy, Fitness & nutrition, Nature walks" },
      { icon: "\u{1F46A}", title: "Family Programme", desc: "Healing the entire family unit through education, therapy, and rebuilding trust and communication.", features: "Family counselling, Education workshops, Communication skills, Boundary setting" }
    ]
  },
  whyus: {
    tag: "Why Choose Us",
    heading: "What Sets Us Apart",
    items: [
      { title: "First in Trans Nzoia", text: "We are proud to be the first rehabilitation centre in Trans Nzoia County, bringing vital recovery services closer to communities that previously had to travel far for help." },
      { title: "Expert Clinical Team", text: "Our multidisciplinary team includes psychiatrists, psychologists, certified addiction counsellors, and social workers with extensive experience." },
      { title: "Culturally Sensitive Care", text: "We understand the unique cultural context of addiction in Kenya and East Africa, tailoring our approach to each individual's background." },
      { title: "Evidence-Based Methods", text: "We use internationally recognised treatment protocols including CBT, DBT, motivational interviewing, and the 12-step model adapted for our context." },
      { title: "Comprehensive Aftercare", text: "Recovery doesn't end at discharge. Our robust aftercare programme provides ongoing support for lasting sobriety and wellness." },
      { title: "Affordable & Accessible", text: "We believe quality treatment should be accessible. We offer flexible payment plans and work with insurance providers across Kenya." }
    ]
  },
  team: {
    tag: "Our Experts",
    heading: "Meet the Team",
    intro: "Dedicated professionals committed to guiding you through every step of your recovery journey.",
    members: [
      { initials: "DA", name: "Dr. Amina Wanjiku", role: "Medical Director & Psychiatrist", bio: "Extensive experience in addiction medicine and psychiatric care across East Africa." },
      { initials: "JO", name: "James Ochieng", role: "Head of Counselling", bio: "Certified addiction counsellor specialising in CBT, trauma therapy, and family systems." },
      { initials: "GN", name: "Grace Njeri", role: "Clinical Psychologist", bio: "Expert in co-occurring disorders, providing integrated treatment for addiction and mental health." },
      { initials: "PK", name: "Peter Kamau", role: "Programme Coordinator", bio: "Oversees daily operations and ensures each client receives personalised, compassionate care." }
    ]
  },
  testimonials: {
    tag: "What People Are Saying",
    heading: "Community Voices",
    items: [
      { text: "Trans Nzoia has needed a centre like this for so long. Knowing that families will finally have somewhere local to turn for help gives our whole community hope.", author: "Rev. Joseph M.", label: "Community Leader" },
      { text: "As a healthcare worker, I've seen too many people travel hundreds of kilometres for rehabilitation. Tranquility opening here will save lives — I truly believe that.", author: "Nurse Grace W.", label: "Healthcare Professional" },
      { text: "My family has been affected by addiction and we had nowhere close to turn. The fact that a world-class facility is coming to our county is nothing short of a blessing.", author: "Anne K.", label: "Local Resident" }
    ]
  },
  contact: {
    location1: "Tranquility Rehab Centre",
    location2: "Trans Nzoia County",
    location3: "Kenya",
    person: "Monica Sawe",
    phone1: "+254 721 287624",
    phone2: "+254 721 287624",
    email: "info@tranquilityrehab.co.ke",
    hours: "Saturday & Sunday: 10:00 AM - 4:00 PM\nBy appointment on weekdays",
    ctaHeading: "Take the First Step Today",
    ctaText: "Recovery is possible. Whether it's for you or a loved one, our team is ready to help. All enquiries are treated with the utmost confidentiality."
  },
  images: {
    heroBg: "https://images.unsplash.com/photo-1535756736290-ec9480a7eaf0?w=1920&q=80&auto=format",
    about1: "https://images.unsplash.com/photo-1586249149466-ab4d39822001?w=600&q=80&auto=format",
    about1Cap: "The Green Heart of Kenya",
    about2: "https://images.unsplash.com/photo-1759147833377-0345de4fb7eb?w=600&q=80&auto=format",
    about2Cap: "Peaceful Surroundings",
    about3: "https://images.unsplash.com/photo-1756009481685-1513779372cf?w=600&q=80&auto=format",
    about3Cap: "A Place to Heal",
    strip1: "https://images.unsplash.com/photo-1738638488195-ec63635ca91b?w=500&q=80&auto=format",
    strip2: "https://images.unsplash.com/photo-1674498260932-6f7d8eed6d9f?w=500&q=80&auto=format",
    strip3: "https://images.unsplash.com/photo-1680237659901-29f8d39ff290?w=500&q=80&auto=format",
    strip4: "https://images.unsplash.com/photo-1759164319026-334b9bcd2bcb?w=500&q=80&auto=format"
  },
  seo: {
    title: "Tranquility Rehab Centre | Recovery & Healing in Kenya",
    description: "Tranquility Rehab Centre offers compassionate addiction recovery and mental health treatment in a serene Kenyan setting. Begin your journey to healing today.",
    logoText: "Tranquility Rehab Centre",
    footerText: "The first rehabilitation centre in Trans Nzoia County, dedicated to compassionate, evidence-based addiction recovery and mental health treatment.",
    copyright: "2026"
  }
};

const STORAGE_KEY = 'tranquility_cms';

// ===== Data Store =====
function getData() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return JSON.parse(JSON.stringify(DEFAULTS));
}

function setData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ===== Navigation =====
const sectionTitles = {
  hero: ['Hero Section', 'Edit the main hero banner content'],
  about: ['About Section', 'Edit mission, vision and values'],
  programs: ['Treatment Programs', 'Add, edit or remove programs'],
  whyus: ['Why Choose Us', 'Edit your key differentiators'],
  team: ['Team Members', 'Manage your team profiles'],
  testimonials: ['Testimonials', 'Manage client success stories'],
  contact: ['Contact Information', 'Edit phone, email, location and hours'],
  images: ['Images', 'Update all site images and gallery'],
  seo: ['SEO & Settings', 'Site title, meta description and data management']
};

document.querySelectorAll('.sidebar-nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const section = link.dataset.section;

    document.querySelectorAll('.sidebar-nav a').forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    document.querySelectorAll('.edit-section').forEach(s => s.classList.remove('active'));
    document.getElementById('sec-' + section).classList.add('active');

    document.getElementById('sectionTitle').textContent = sectionTitles[section][0];
    document.getElementById('sectionDesc').textContent = sectionTitles[section][1];
  });
});

// ===== Populate Fields =====
function populateFields() {
  const data = getData();

  // Simple fields
  document.querySelectorAll('[data-field]').forEach(el => {
    const [section, key] = el.dataset.field.split('.');
    if (data[section] && data[section][key] !== undefined) {
      el.value = data[section][key];
    }
  });

  // Repeater: programs
  renderPrograms(data.programs.items);
  renderWhyItems(data.whyus.items);
  renderTeamMembers(data.team.members);
  renderTestimonials(data.testimonials.items);
}

// ===== Collect Fields =====
function collectFields() {
  const data = getData();

  document.querySelectorAll('[data-field]').forEach(el => {
    const [section, key] = el.dataset.field.split('.');
    if (!data[section]) data[section] = {};
    data[section][key] = el.value;
  });

  // Collect repeaters
  data.programs.items = collectPrograms();
  data.whyus.items = collectWhyItems();
  data.team.members = collectTeamMembers();
  data.testimonials.items = collectTestimonials();

  return data;
}

// ===== Programs Repeater =====
function renderPrograms(items) {
  const container = document.getElementById('programsList');
  container.innerHTML = items.map((item, i) => `
    <div class="card repeater-item" data-index="${i}">
      <div class="item-header">
        <span>Program ${i + 1}</span>
        <button class="btn-remove" onclick="removeProgram(${i})">Remove</button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Icon (emoji)</label>
          <input type="text" class="prog-icon" value="${item.icon || ''}">
        </div>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="prog-title" value="${escapeAttr(item.title)}">
        </div>
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea class="prog-desc" rows="2">${escapeHtml(item.desc)}</textarea>
      </div>
      <div class="form-group">
        <label>Features (comma-separated)</label>
        <input type="text" class="prog-features" value="${escapeAttr(item.features)}">
      </div>
    </div>
  `).join('');
}

function collectPrograms() {
  const items = [];
  document.querySelectorAll('#programsList .repeater-item').forEach(el => {
    items.push({
      icon: el.querySelector('.prog-icon').value,
      title: el.querySelector('.prog-title').value,
      desc: el.querySelector('.prog-desc').value,
      features: el.querySelector('.prog-features').value
    });
  });
  return items;
}

function addProgram() {
  const data = getData();
  data.programs.items.push({ icon: "\u{2B50}", title: "New Program", desc: "Description...", features: "Feature 1, Feature 2, Feature 3, Feature 4" });
  setData(data);
  renderPrograms(data.programs.items);
}

function removeProgram(i) {
  const data = getData();
  data.programs.items.splice(i, 1);
  setData(data);
  renderPrograms(data.programs.items);
}

// ===== Why Us Repeater =====
function renderWhyItems(items) {
  const container = document.getElementById('whyusList');
  container.innerHTML = items.map((item, i) => `
    <div class="card repeater-item" data-index="${i}">
      <div class="item-header">
        <span>Reason ${i + 1}</span>
        <button class="btn-remove" onclick="removeWhyItem(${i})">Remove</button>
      </div>
      <div class="form-group">
        <label>Title</label>
        <input type="text" class="why-title" value="${escapeAttr(item.title)}">
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea class="why-text" rows="2">${escapeHtml(item.text)}</textarea>
      </div>
    </div>
  `).join('');
}

function collectWhyItems() {
  const items = [];
  document.querySelectorAll('#whyusList .repeater-item').forEach(el => {
    items.push({
      title: el.querySelector('.why-title').value,
      text: el.querySelector('.why-text').value
    });
  });
  return items;
}

function addWhyItem() {
  const data = getData();
  data.whyus.items.push({ title: "New Reason", text: "Description..." });
  setData(data);
  renderWhyItems(data.whyus.items);
}

function removeWhyItem(i) {
  const data = getData();
  data.whyus.items.splice(i, 1);
  setData(data);
  renderWhyItems(data.whyus.items);
}

// ===== Team Repeater =====
function renderTeamMembers(members) {
  const container = document.getElementById('teamList');
  container.innerHTML = members.map((m, i) => `
    <div class="card repeater-item" data-index="${i}">
      <div class="item-header">
        <span>Member ${i + 1}</span>
        <button class="btn-remove" onclick="removeTeamMember(${i})">Remove</button>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Initials</label>
          <input type="text" class="tm-initials" value="${escapeAttr(m.initials)}" maxlength="3">
        </div>
        <div class="form-group">
          <label>Full Name</label>
          <input type="text" class="tm-name" value="${escapeAttr(m.name)}">
        </div>
      </div>
      <div class="form-group">
        <label>Role / Title</label>
        <input type="text" class="tm-role" value="${escapeAttr(m.role)}">
      </div>
      <div class="form-group">
        <label>Bio</label>
        <textarea class="tm-bio" rows="2">${escapeHtml(m.bio)}</textarea>
      </div>
    </div>
  `).join('');
}

function collectTeamMembers() {
  const members = [];
  document.querySelectorAll('#teamList .repeater-item').forEach(el => {
    members.push({
      initials: el.querySelector('.tm-initials').value,
      name: el.querySelector('.tm-name').value,
      role: el.querySelector('.tm-role').value,
      bio: el.querySelector('.tm-bio').value
    });
  });
  return members;
}

function addTeamMember() {
  const data = getData();
  data.team.members.push({ initials: "XX", name: "New Member", role: "Role", bio: "Bio..." });
  setData(data);
  renderTeamMembers(data.team.members);
}

function removeTeamMember(i) {
  const data = getData();
  data.team.members.splice(i, 1);
  setData(data);
  renderTeamMembers(data.team.members);
}

// ===== Testimonials Repeater =====
function renderTestimonials(items) {
  const container = document.getElementById('testimonialsList');
  container.innerHTML = items.map((item, i) => `
    <div class="card repeater-item" data-index="${i}">
      <div class="item-header">
        <span>Testimonial ${i + 1}</span>
        <button class="btn-remove" onclick="removeTestimonial(${i})">Remove</button>
      </div>
      <div class="form-group">
        <label>Quote</label>
        <textarea class="test-text" rows="3">${escapeHtml(item.text)}</textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Author Name</label>
          <input type="text" class="test-author" value="${escapeAttr(item.author)}">
        </div>
        <div class="form-group">
          <label>Label</label>
          <input type="text" class="test-label" value="${escapeAttr(item.label)}">
        </div>
      </div>
    </div>
  `).join('');
}

function collectTestimonials() {
  const items = [];
  document.querySelectorAll('#testimonialsList .repeater-item').forEach(el => {
    items.push({
      text: el.querySelector('.test-text').value,
      author: el.querySelector('.test-author').value,
      label: el.querySelector('.test-label').value
    });
  });
  return items;
}

function addTestimonial() {
  const data = getData();
  data.testimonials.items.push({ text: "Testimonial text...", author: "Name", label: "Alumni" });
  setData(data);
  renderTestimonials(data.testimonials.items);
}

function removeTestimonial(i) {
  const data = getData();
  data.testimonials.items.splice(i, 1);
  setData(data);
  renderTestimonials(data.testimonials.items);
}

// ===== Save / Reset =====
function saveAll() {
  const data = collectFields();
  setData(data);
  showToast('Changes saved successfully!');
}

function resetSection(section) {
  if (!confirm('Reset this section to default content? This cannot be undone.')) return;
  const data = getData();
  data[section] = JSON.parse(JSON.stringify(DEFAULTS[section]));
  setData(data);
  populateFields();
  showToast('Section reset to defaults.');
}

function resetAll() {
  if (!confirm('Reset ALL content to defaults? This will erase all your changes.')) return;
  localStorage.removeItem(STORAGE_KEY);
  populateFields();
  showToast('All content reset to defaults.');
}

// ===== Export / Import =====
function exportData() {
  const data = getData();
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tranquility-content-' + new Date().toISOString().slice(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      setData(data);
      populateFields();
      showToast('Content imported successfully!');
    } catch {
      alert('Invalid JSON file.');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// ===== Toast =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===== Helpers =====
function escapeAttr(str) {
  if (!str) return '';
  return str.replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ===== Init =====
populateFields();
