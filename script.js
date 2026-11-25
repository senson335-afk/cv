const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

function updateThemeIcons() {
  const isDark = root.dataset.theme === 'dark';
  sunIcon.classList.toggle('hidden', isDark);
  moonIcon.classList.toggle('hidden', !isDark);
}

updateThemeIcons();

themeToggle?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', root.dataset.theme);
  updateThemeIcons();
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 16);
});

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const copyPhoneBtn = document.getElementById('copyPhoneBtn');
const copyLabel = document.getElementById('copyLabel');
copyPhoneBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('+966598704317');
    copyLabel.textContent = 'تم النسخ';
  } catch {
    copyLabel.textContent = 'تعذّر النسخ';
  }
  window.setTimeout(() => { copyLabel.textContent = 'نسخ الرقم'; }, 1800);
});

const currentYear = document.getElementById('currentYear');
if (currentYear) currentYear.textContent = new Date().getFullYear();
