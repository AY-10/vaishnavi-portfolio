import * as THREE from 'three';
import './style.css';

// ============================================================
// SVG Icon definitions
// ============================================================
const icons = {
  github: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  leetcode: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>`,
  download: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16l-5-5 1.41-1.41L11 12.17V4h2v8.17l2.59-2.58L17 11l-5 5zm-6 2h12v2H6v-2z" fill="currentColor"/></svg>`,
  externalLink: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L20.5 3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  trophy: '🏆',
  code: '💻',
  star: '⭐',
  rocket: '🚀',
  brain: '🧠',
  shield: '🛡️',
  award: '🎖️',
  checkCircle: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

// ============================================================
// Base path for GitHub Pages
// ============================================================
const BASE_PATH = import.meta.env.BASE_URL || './';
function assetPath(path: string): string {
  const base = BASE_PATH.endsWith('/') ? BASE_PATH : BASE_PATH + '/';
  return base + path.replace(/^\//, '');
}

// ============================================================
// Portfolio Data
// ============================================================
const experience = [
  {
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    period: 'Jan 2026 – Jun 2026',
    location: 'Bengaluru, India',
    bullets: [
      'Shipped an LLM-powered Website Summary banner (React + Java) used by 200+ engineers daily, cutting website health investigation time from 3–5 minutes to under 5 seconds.',
      'Built a Funnel Loss visibility feature (Athena, Java, React) surfacing per-stage entity drop-off across 7 pipeline stages with error code distribution and pass-through metrics, enabling self-serve pipeline debugging for QA, PM, and Ops teams.',
      'Owned the WorkflowInputSchema feature end-to-end across Smithy, DynamoDB, AWS AppConfig, Lambda, and React (RJSF), cutting oncall Recovery workflow onboarding from 2–3 hours to minutes for 5–6k workflows per call.',
      'Grew dashboard KPI coverage from 2 to 33 metrics across AWS CDK, Scala/Spark, Elasticsearch, Java Lambda, and React, giving the SDO program full health visibility for 200+ daily users.',
      'Added runId-based trace linking between primitives and milestones via React Context, cutting cross-primitive debugging from 5–7 minutes to under 30 seconds.',
      'Unblocked 6 stalled CI/CD pipelines (blocked up to 39 weeks) by resolving EOL dependency violations, orphaned CloudWatch alarms, Kinesis API mock regressions, and retry timing bugs.',
    ],
  },
  {
    company: 'Turing',
    role: 'Python Developer | LLM Trainer',
    period: 'Oct 2025 – Dec 2025',
    location: 'Remote',
    bullets: [
      'Evaluated GPT-4, Claude, and Gemini outputs against structured prompts to benchmark reasoning accuracy, consistency, and hallucination rates across adversarial and edge-case datasets.',
      'Built training datasets and ran iterative prompt evaluations that improved LLM instruction-following quality through systematic feedback cycles.',
    ],
  },
  {
    company: 'Outlier AI',
    role: 'AI Trainer & Software Engineer | LLM Trainer',
    period: 'Jun 2025 – Sep 2025',
    location: 'Remote',
    bullets: [
      'Evaluated, compared, and corrected LLM outputs, writing complex technical prompts to assess and improve model accuracy, logic, and safety.',
      'Conducted code reviews of AI-generated scripts, debugging and optimizing them for correctness and quality.',
      'Applied RLHF methodologies to refine Large Language Model behavior and reliability.',
    ],
  },
];

const projects = [
  {
    title: 'Inventory Management System',
    description: 'Full-stack inventory platform with role-based access control using JWT and Auth0, supporting admin and staff tiers with token refresh and session blacklisting. Built scalable REST APIs with Django and PostgreSQL, cutting manual stock reconciliation effort by 60%.',
    tech: ['Django', 'React.js', 'PostgreSQL', 'JWT', 'Auth0', 'REST APIs'],
    icon: '📦',
    date: 'Sep 2025',
  },
  {
    title: 'AI Document Summary Assistant',
    description: 'AI-powered summarization system processing scanned and digital PDFs using OCR and Transformer-based NLP models, cutting manual document review time by 70%. Containerized via Docker for rapid deployment across environments.',
    tech: ['Flask', 'Hugging Face', 'PyMuPDF', 'Tesseract OCR', 'Docker'],
    icon: '📄',
    date: 'Jan 2025',
  },
  {
    title: 'Multi-Factor Authentication System',
    description: 'Secure MFA system using JWT, bcrypt, and TOTP with encrypted credential storage, session validation, and protected route authorization. Added facial-recognition-based auto-lock/unlock as a secondary authentication layer.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'bcrypt', 'TOTP'],
    icon: '🔐',
    date: 'Oct 2024',
  },
];

const skillCategories = [
  {
    title: 'Languages',
    icon: '⌨️',
    skills: ['Java', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Cloud & Backend',
    icon: '☁️',
    skills: ['AWS Lambda', 'DynamoDB', 'Athena', 'AppConfig', 'CDK', 'CloudWatch', 'Spring Boot', 'Node.js', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'Next.js', 'RJSF', 'HTML5', 'CSS3'],
  },
  {
    title: 'Data Stores',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Elasticsearch', 'Spark'],
  },
  {
    title: 'Developer Tools',
    icon: '🔧',
    skills: ['Git', 'Docker', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
  {
    title: 'Core CS',
    icon: '🧮',
    skills: ['Data Structures & Algorithms', 'OOP', 'System Design', 'DBMS', 'Operating Systems'],
  },
];

const achievements = [
  { icon: '🏆', title: 'Amazon ML Summer School 2025', description: 'Selected among the top 200 students nationwide.' },
  { icon: '🥇', title: 'Google Girl Hackathon 2025', description: 'Semi-finalist — top 2.5% of participants nationwide.' },
  { icon: '💻', title: 'LeetCode & HackerRank', description: 'Solved 800+ DSA problems · Max Rating 1700+ (Top 8% globally) · 5-Star DSA Badge.' },
  { icon: '👑', title: 'Algorithmic Club — President', description: 'Led a 200+ member technical club, organized coding contests and workshops.' },
];

const certifications = [
  'AWS Cloud Practitioner Essentials',
  'HackerRank Python (Basic)',
  'HackerRank SQL (Intermediate)',
];

// ============================================================
// Render functions
// ============================================================

function renderNavbar(): string {
  return `
    <nav class="navbar" id="navbar">
      <div class="container">
        <a href="#hero" class="nav-logo">V<span>.</span>Yadav</a>
        <div class="nav-links" id="navLinks">
          <a href="#experience" data-nav>Experience</a>
          <a href="#projects" data-nav>Projects</a>
          <a href="#skills" data-nav>Skills</a>
          <a href="#achievements" data-nav>Achievements</a>
          <a href="#contact" data-nav>Contact</a>
          <a href="${assetPath('assets/Vaishnavi_Yadav_Resume.pdf')}" class="nav-resume-btn" target="_blank" rel="noopener noreferrer">
            ${icons.download} Resume
          </a>
        </div>
        <button class="nav-hamburger" id="navHamburger" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
}

function renderHero(): string {
  return `
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero-content">
          <p class="hero-greeting">Hi, I'm</p>
          <h1 class="hero-name">Vaishnavi <span class="highlight">Yadav</span></h1>
          <p class="hero-title">Software Engineer · <span>Backend Engineering</span> · Cloud · AI</p>
          <p class="hero-description">
            I build production-grade distributed systems at scale. At Amazon, I shipped features used by 200+ engineers daily — 
            from LLM-powered diagnostics to pipeline observability tools across AWS. Passionate about clean architecture, 
            developer productivity, and solving hard infrastructure problems.
          </p>
          <div class="hero-buttons">
            <a href="${assetPath('assets/Vaishnavi_Yadav_Resume.pdf')}" class="btn-primary" target="_blank" rel="noopener noreferrer" id="btn-resume">
              ${icons.download} View Résumé
            </a>
            <a href="#projects" class="btn-secondary" id="btn-projects">
              Explore Projects
            </a>
            <a href="#contact" class="btn-secondary" id="btn-contact">
              Contact Me
            </a>
          </div>
          <div class="hero-socials">
            <a href="https://github.com/VY25AY" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              ${icons.github}
            </a>
            <a href="https://www.linkedin.com/in/vay25/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              ${icons.linkedin}
            </a>
            <a href="https://leetcode.com/u/vaishnaviyadav_25/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode" title="LeetCode">
              ${icons.leetcode}
            </a>
            <a href="mailto:vaishnaviyadavsde@gmail.com" aria-label="Email" title="Email">
              ${icons.email}
            </a>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-photo-wrapper">
            <img 
              src="${assetPath('assets/vaishnavi-photo.jpg')}" 
              alt="Vaishnavi Yadav — Software Engineer, professional portrait in navy blazer" 
              class="hero-photo"
              loading="eager"
              width="380"
              height="460"
            />
            <div class="hero-decoration dot-grid"></div>
            <div class="hero-decoration accent-bar"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderExperience(): string {
  const items = experience.map(exp => `
    <div class="experience-item animate-on-scroll">
      <div class="experience-header">
        <div>
          <h3 class="experience-company"><span class="company-name">${exp.company}</span></h3>
          <p class="experience-role">${exp.role}</p>
        </div>
        <div class="experience-meta">
          <span class="experience-period">${exp.period}</span>
          <span class="experience-location">${exp.location}</span>
        </div>
      </div>
      <ul class="experience-bullets">
        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  return `
    <section class="experience" id="experience">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <p class="section-label">Where I've worked</p>
          <h2 class="section-title">Experience</h2>
          <p class="section-subtitle">Building production-grade software across full-stack, cloud infrastructure, and AI systems.</p>
        </div>
        <div class="experience-timeline">
          ${items}
        </div>
      </div>
    </section>
  `;
}

function renderProjects(): string {
  const cards = projects.map(p => `
    <div class="project-card animate-on-scroll">
      <div class="project-icon">${p.icon}</div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-description">${p.description}</p>
      <div class="project-tech">
        ${p.tech.map(t => `<span>${t}</span>`).join('')}
      </div>
      <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-tertiary);">${p.date}</div>
    </div>
  `).join('');

  return `
    <section class="projects" id="projects">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <p class="section-label">What I've built</p>
          <h2 class="section-title">Projects</h2>
          <p class="section-subtitle">Side projects exploring full-stack development, AI/NLP, and security systems.</p>
        </div>
        <div class="projects-grid">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

function renderSkills(): string {
  const categories = skillCategories.map(cat => `
    <div class="skill-category animate-on-scroll">
      <div class="skill-category-icon">${cat.icon}</div>
      <h3 class="skill-category-title">${cat.title}</h3>
      <div class="skill-tags">
        ${cat.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
      </div>
    </div>
  `).join('');

  return `
    <section class="skills" id="skills">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <p class="section-label">My toolkit</p>
          <h2 class="section-title">Technical Skills</h2>
          <p class="section-subtitle">Technologies and tools I use to build reliable, scalable software.</p>
        </div>
        <div class="skills-grid">
          ${categories}
        </div>
      </div>
    </section>
  `;
}

function renderAchievements(): string {
  const cards = achievements.map(a => `
    <div class="achievement-card animate-on-scroll">
      <div class="achievement-icon">${a.icon}</div>
      <div class="achievement-content">
        <h4>${a.title}</h4>
        <p>${a.description}</p>
      </div>
    </div>
  `).join('');

  const certs = certifications.map(c => `
    <div class="cert-badge">
      ${icons.checkCircle}
      ${c}
    </div>
  `).join('');

  return `
    <section class="achievements" id="achievements">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <p class="section-label">Recognition</p>
          <h2 class="section-title">Achievements & Certifications</h2>
          <p class="section-subtitle">Competitive programming, industry recognition, and professional certifications.</p>
        </div>
        <div class="achievements-grid">
          ${cards}
        </div>
        <div class="certifications animate-on-scroll">
          <h3 class="certifications-title">Certifications</h3>
          <div class="certifications-list">
            ${certs}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderEducation(): string {
  return `
    <section class="education" id="education">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <p class="section-label">Education</p>
          <h2 class="section-title">Academic Background</h2>
        </div>
        <div class="education-card animate-on-scroll">
          <h3 class="education-degree">B.Tech in Computer Science & Engineering</h3>
          <p class="education-period">2022 – 2026</p>
          <p class="education-details">
            CGPA: <strong>8.5 / 10</strong>
          </p>
        </div>
      </div>
    </section>
  `;
}

function renderContact(): string {
  return `
    <section class="contact" id="contact">
      <div class="container">
        <div class="contact-content">
          <div class="section-header animate-on-scroll" style="text-align: center;">
            <p class="section-label" style="justify-content: center;">Get in Touch</p>
            <h2 class="section-title">Let's Connect</h2>
            <p class="section-subtitle" style="margin: 0 auto;">
              I'm actively looking for Software Engineer and SDE-1 roles. If you'd like to collaborate or discuss opportunities, feel free to reach out.
            </p>
          </div>
          <div class="contact-links animate-on-scroll">
            <a href="mailto:vaishnaviyadavsde@gmail.com" class="contact-card" id="contact-email">
              ${icons.email}
              <span class="contact-card-label">vaishnaviyadavsde@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/vay25/" target="_blank" rel="noopener noreferrer" class="contact-card" id="contact-linkedin">
              ${icons.linkedin}
              <span class="contact-card-label">LinkedIn</span>
            </a>
            <a href="https://github.com/VY25AY" target="_blank" rel="noopener noreferrer" class="contact-card" id="contact-github">
              ${icons.github}
              <span class="contact-card-label">GitHub</span>
            </a>
            <a href="https://leetcode.com/u/vaishnaviyadav_25/" target="_blank" rel="noopener noreferrer" class="contact-card" id="contact-leetcode">
              ${icons.leetcode}
              <span class="contact-card-label">LeetCode</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter(): string {
  return `
    <footer class="footer">
      <div class="container">
        <p>Designed & built by <a href="https://github.com/VY25AY" target="_blank" rel="noopener noreferrer">Vaishnavi Yadav</a> · ${new Date().getFullYear()}</p>
      </div>
    </footer>
  `;
}

// ============================================================
// Initialize App
// ============================================================
function initApp(): void {
  const app = document.querySelector<HTMLDivElement>('#app')!;
  app.innerHTML = `
    ${renderNavbar()}
    <main>
      ${renderHero()}
      ${renderExperience()}
      ${renderProjects()}
      ${renderSkills()}
      ${renderAchievements()}
      ${renderEducation()}
      ${renderContact()}
    </main>
    ${renderFooter()}
  `;

  initScrollAnimations();
  initNavbar();
  initSmoothScroll();
  init3DTilt();
  initThreeJSBackground();
}

// ============================================================
// Scroll-triggered animations
// ============================================================
function initScrollAnimations(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
}

// ============================================================
// Navbar scroll behavior + mobile menu
// ============================================================
function initNavbar(): void {
  const navbar = document.getElementById('navbar')!;
  const hamburger = document.getElementById('navHamburger')!;
  const navLinks = document.getElementById('navLinks')!;

  // Scroll effect
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('a[data-nav]').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ============================================================
// Active nav link highlighting
// ============================================================
function updateActiveNav(): void {
  const sections = document.querySelectorAll('section[id]');
  const navLinkElements = document.querySelectorAll('.nav-links a[data-nav]');
  let currentSection = '';

  sections.forEach(section => {
    const el = section as HTMLElement;
    const sectionTop = el.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = el.getAttribute('id') || '';
    }
  });

  navLinkElements.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

// ============================================================
// Smooth scroll for anchor links
// ============================================================
function initSmoothScroll(): void {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = (anchor as HTMLAnchorElement).getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ============================================================
// Boot
// ============================================================
document.addEventListener('DOMContentLoaded', initApp);

// ============================================================
// 3D Tilt Effect
// ============================================================
function init3DTilt(): void {
  const tiltElements = document.querySelectorAll('.project-card, .experience-item, .skill-category, .achievement-card, .education-card, .contact-card');
  
  tiltElements.forEach(element => {
    const el = element as HTMLElement;
    el.classList.add('tilt-element');
    
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      el.style.transition = 'transform 0.5s var(--ease-out)';
    });
    
    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.1s linear';
    });
  });
}

// ============================================================
// Three.js Interactive 3D Background
// ============================================================
function initThreeJSBackground(): void {
  const canvas = document.querySelector('#bg') as HTMLCanvasElement;
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setZ(30);
  camera.position.setX(-3);

  // Geometry
  const geometry = new THREE.TorusKnotGeometry(10, 2, 200, 32);
  const material = new THREE.MeshStandardMaterial({ 
    color: 0x4f8ff7, 
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  const torus = new THREE.Mesh(geometry, material);
  scene.add(torus);

  // Particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1500;
  const posArray = new Float32Array(particlesCount * 3);

  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 100;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x6c63ff,
    transparent: true,
    opacity: 0.6,
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // Lights
  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);
  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(pointLight, ambientLight);

  // Mouse Interaction
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX);
    mouseY = (event.clientY - windowHalfY);
  });

  // Scroll Interaction
  function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    torus.rotation.x += 0.05;
    torus.rotation.y += 0.075;
    torus.rotation.z += 0.05;

    camera.position.z = 30 + t * -0.01;
    camera.position.x = t * -0.0002;
    camera.position.y = t * -0.0002;
  }
  document.body.onscroll = moveCamera;

  // Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    targetX = mouseX * .001;
    targetY = mouseY * .001;

    torus.rotation.y += 0.005;
    torus.rotation.x += 0.005;

    particlesMesh.rotation.y = -elapsedTime * 0.05;
    
    // Parallax mouse effect
    particlesMesh.rotation.y += .05 * (targetX - particlesMesh.rotation.y);
    particlesMesh.rotation.x += .05 * (targetY - particlesMesh.rotation.x);
    particlesMesh.position.z += -0.05 * (targetY - particlesMesh.rotation.x);

    renderer.render(scene, camera);
  }

  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

