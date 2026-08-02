// VERTEX TEAM Portfolio Application Code

// Team Members Dataset
// Team Members Dataset
const teamMembers = [
  {
    id: "member1",
    name: "Mohamad Barakat",
    email: "mohamad.barakat@st.uskudar.edu.tr",
    github: "https://github.com/MOHAMADBARAKAT-SESP",
    linkedin: "https://www.linkedin.com/in/mohamad-barakat-999a27386",
    fallbackImage: "barakat2.png",
    portfolioLink: "MOHAMAD BARAKAT.docx",
    translations: {
      en: {
        role: "Team Lead & AI and Software Engineer",
        bio: "Lead and AI specialist focusing on autonomous decision-making and system architecture."
      },
      tr: {
        role: "Takım Lideri ve Yapay Zeka ve Yazılım Mühendisi",
        bio: "Otonom karar verme ve sistem mimarisi üzerine odaklanan lider ve yapay zeka uzmanı."
      }
    }
  },
  {
    id: "member2",
    name: "Osman Demir",
    email: "osman.demir@st.uskudar.edu.tr",
    github: "https://github.com/osmandmr099",
    linkedin: "https://www.linkedin.com/in/osmandmr099",
    fallbackImage: "osman demir.png",
    portfolioLink: "osman cv.pdf",
    translations: {
      en: {
        role: "Computer Engineer",
        bio: "Develops robust software stacks for vehicle control and data processing."
      },
      tr: {
        role: "Bilgisayar Mühendisi",
        bio: "Araç kontrolü ve veri işleme için sağlam yazılım yığınları geliştirir."
      }
    }
  },
  {
    id: "member3",
    name: "Hamza Emin Yüksel",
    email: "hamzaemin.yuksel@st.uskudar.edu.tr",
    github: "https://github.com/hamza-embedded-dev",
    linkedin: "https://www.linkedin.com/in/hamza-emin-b9a713290",
    fallbackImage: "hamza.png",
    portfolioLink: "hamza cv.jpeg",
    translations: {
      en: {
        role: "Electrical and Electronics Engineer",
        bio: "Designs custom hardware and electronics for rugged field deployments."
      },
      tr: {
        role: "Elektrik ve Elektronik Mühendisi",
        bio: "Zorlu saha uygulamaları için özel donanım ve elektronik tasarlar."
      }
    }
  },
  {
    id: "member4",
    name: "Ali Osman Tas",
    linkedin: "https://www.linkedin.com/in/aliosmantaş",
    fallbackImage: "ali.png",
    portfolioLink: "ali cv.pdf",
    translations: {
      en: {
        role: "Electrical and Electronics Engineer",
        bio: "Leads mechanical design, focusing on chassis, actuation, and propulsion systems."
      },
      tr: {
        role: "Elektrik ve Elektronik Mühendisi",
        bio: "Zorlu saha uygulamaları için özel donanım ve elektronik tasarlar."
      }
    }
  },
  {
    id: "member5",
    name: "Essam Madian",
    email: " esammadein0@gmail.com",
    github: "https://github.com/esamtm",
    fallbackImage: "essam.png",
    portfolioLink: "Esam cv.pdf",
    translations: {
      en: {
        role: "Mechatronics Engineer",
        bio: "Assists in mechanical integration, testing, and maintenance workflows."
      },
      tr: {
        role: "Mekatronik Mühendisi",
        bio: "Mekanik entegrasyon, test ve b akım süreçlerine destek verir." 
      }
    }
  }
];


// String Translations Dictionary
const translations = {
  en: {
    navGithub: "GitHub Org",
    heroTitle: "NEXT-GEN UGV TECHNOLOGIES",
    heroSubtitle: "Engineering the future of defense robotics for TEKNOFEST.",
    heroCta: "GET TO KNOW US",
    teamTitle: "MEET THE TEAM",
    teamSubtitle: "The engineers behind the next generation of tactical unmanned systems.",
    viewPortfolio: "View my Portfolio",
    showMore: "Show More",
    showLess: "Show Less",
    audioOn: "Audio: On",
    audioOff: "Audio: Off",
    footerText: "Designed & Engineered By VERTEX TEAM"
  },
  tr: {
    navGithub: "GitHub Org",
    heroTitle: "YENİ NESİL İKA TEKNOLOJİLERİ",
    heroSubtitle: "TEKNOFEST için savunma robotiğinin geleceğini tasarlıyoruz.",
    heroCta: "BİZİ TANIYIN",
    teamTitle: "TAKIMIMIZLA TANIŞIN",
    teamSubtitle: "Yeni nesil taktiksel insansız sistemlerin arkasındaki mühendisler.",
    viewPortfolio: "Portfolyomu İncele",
    showMore: "Daha Fazla Göster",
    showLess: "Daha Az Göster",
    audioOn: "Ses: Açık",
    audioOff: "Ses: Kapalı",
    footerText: "VERTEX TEAM Tarafından Tasarlandı ve Geliştirildi"
  }
};

// Render Team Cards into the Grid (3 on top, 2 centered on bottom)
function renderTeam(lang) {
  const topContainer = document.getElementById("team-top-row");
  const bottomContainer = document.getElementById("team-bottom-row");
  
  if (!topContainer || !bottomContainer) return;
  
  topContainer.innerHTML = "";
  bottomContainer.innerHTML = "";
  
  teamMembers.slice(0, 3).forEach((member, index) => {
    topContainer.appendChild(createCardElement(member, lang, index));
  });
  
  teamMembers.slice(3, 5).forEach((member, index) => {
    bottomContainer.appendChild(createCardElement(member, lang, index + 3));
  });
  
  setupCardAccordions();
  setupScrollReveal();
}

// Generate Individual HTML Card
function createCardElement(member, lang, index) {
  const card = document.createElement("div");
  card.className = "glass-card rounded-2xl overflow-hidden reveal-element relative group w-full md:w-auto";
  card.dataset.index = index;
  
  const mTrans = member.translations[lang];
  const tTrans = translations[lang];
  
  card.innerHTML = `
    <div class="img-zoom-container h-72 w-full relative bg-slate-950">
      <div class="absolute inset-0 bg-gradient-to-t from-[#0d1126] to-transparent opacity-60 z-10"></div>
      <img src="team_member_${index + 1}.png" 
           onerror="this.onerror=null; this.src='${member.fallbackImage}';" 
           alt="${member.name}" 
           class="img-zoom w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity duration-300">
    </div>
    <div class="p-6">
      <h3 class="text-xl font-bold text-[#d5d2de] tracking-wide mb-1">${member.name}</h3>
      <p class="role-text text-xs font-semibold text-blue-400 uppercase tracking-widest mb-4 h-8 flex items-center">${mTrans.role}</p>
      
      <div class="flex flex-col gap-3">
        <a href="${member.portfolioLink}" target="_blank" class="portfolio-btn w-full text-center py-2.5 px-4 bg-transparent border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 text-sm">
          ${tTrans.viewPortfolio}
        </a>
        
        <button class="accordion-toggle-btn w-full flex items-center justify-center gap-2 py-2 px-4 text-xs font-medium text-slate-400 hover:text-[#d5d2de] transition-colors duration-300 cursor-pointer">
          <span class="toggle-text">${tTrans.showMore}</span>
          <svg class="w-4 h-4 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        <div class="accordion-content">
          <p class="bio-text text-sm text-slate-400 mb-5 leading-relaxed pt-2 border-t border-slate-800/80">${mTrans.bio}</p>
          <div class="flex justify-center gap-6 pb-2">
            <a href="mailto:${member.email}" class="text-slate-400 hover:text-blue-400 transition-colors duration-300" title="Email">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
            <a href="${member.github}" target="_blank" class="text-slate-400 hover:text-[#d5d2de] transition-colors duration-300" title="GitHub">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.646.64.699 1.026 1.592 1.026 2.683 0 3.842-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="${member.linkedin}" target="_blank" class="text-slate-400 hover:text-blue-500 transition-colors duration-300" title="LinkedIn">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
  return card;
}

// In-Place Card Translation (Avoids Re-creation & Preserves Animation/Accordion States)
function translateTeamCards(lang) {
  const cards = document.querySelectorAll(".glass-card");
  cards.forEach(card => {
    const index = parseInt(card.dataset.index);
    if (isNaN(index)) return;
    
    const member = teamMembers[index];
    const mTrans = member.translations[lang];
    const tTrans = translations[lang];
    
    // Update role
    const roleText = card.querySelector(".role-text");
    if (roleText) roleText.textContent = mTrans.role;
    
    // Update portfolio button text
    const portfolioBtn = card.querySelector(".portfolio-btn");
    if (portfolioBtn) portfolioBtn.textContent = tTrans.viewPortfolio;
    
    // Update show more button text (preserving open/closed state)
    const toggleBtn = card.querySelector(".accordion-toggle-btn");
    if (toggleBtn) {
      const textSpan = toggleBtn.querySelector(".toggle-text");
      const content = card.querySelector(".accordion-content");
      if (textSpan && content) {
        const isExpanded = content.classList.contains("expanded");
        textSpan.textContent = isExpanded ? tTrans.showLess : tTrans.showMore;
      }
    }
    
    // Update bio
    const bioText = card.querySelector(".bio-text");
    if (bioText) bioText.textContent = mTrans.bio;
  });
}

// Toggle Language System
function switchLanguage(lang) {
  document.documentElement.lang = lang;
  
  const enBtn = document.getElementById("lang-en");
  const trBtn = document.getElementById("lang-tr");
  
  if (!enBtn || !trBtn) return;
  
  if (lang === "en") {
    enBtn.classList.add("text-blue-400", "font-bold", "text-glow-blue");
    enBtn.classList.remove("text-slate-400");
    trBtn.classList.add("text-slate-400");
    trBtn.classList.remove("text-blue-400", "font-bold", "text-glow-blue");
  } else {
    trBtn.classList.add("text-blue-400", "font-bold", "text-glow-blue");
    trBtn.classList.remove("text-slate-400");
    enBtn.classList.add("text-slate-400");
    enBtn.classList.remove("text-blue-400", "font-bold", "text-glow-blue");
  }
  
  // Update standard data-i18n items
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Translate team cards
  translateTeamCards(lang);
  
  // Update audio label dynamically
  const video = document.getElementById("hero-video");
  const audioStatusText = document.getElementById("audio-status-text");
  if (video && audioStatusText) {
    audioStatusText.textContent = video.muted ? translations[lang].audioOff : translations[lang].audioOn;
  }
}

// Setup Card Accordion Open/Close Listeners
function setupCardAccordions() {
  const toggleBtns = document.querySelectorAll(".accordion-toggle-btn");
  
  toggleBtns.forEach(btn => {
    // Remove previous listener to avoid duplicate events on hot refreshes
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.addEventListener("click", () => {
      const card = newBtn.closest(".glass-card");
      const content = card.querySelector(".accordion-content");
      const textSpan = newBtn.querySelector(".toggle-text");
      const svg = newBtn.querySelector("svg");
      const currentLang = document.documentElement.lang || "en";
      
      const isExpanded = content.classList.contains("expanded");
      
      if (isExpanded) {
        content.style.maxHeight = "0px";
        content.classList.remove("expanded");
        textSpan.textContent = translations[currentLang].showMore;
        svg.classList.remove("rotate-180");
      } else {
        content.classList.add("expanded");
        content.style.maxHeight = content.scrollHeight + "px";
        textSpan.textContent = translations[currentLang].showLess;
        svg.classList.add("rotate-180");
      }
    });
  });
}

// Setup Scroll Reveal Animations (Intersection Observer with Staggering)
function setupScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const card = entry.target;
        const index = parseInt(card.dataset.index) || 0;
        
        // Stagger cards in rows (cols stagger on desktop)
        const delay = (index % 3) * 120; 
        
        setTimeout(() => {
          card.classList.add("active");
        }, delay);
        
        observer.unobserve(card);
      }
    });
  }, observerOptions);
  
  const revealElements = document.querySelectorAll(".reveal-element");
  revealElements.forEach(el => observer.observe(el));
}

// Header Dynamic Background on Scroll
function setupHeaderScroll() {
  const header = document.getElementById("main-header");
  if (!header) return;
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("bg-[#0d1126]/90", "backdrop-blur-lg", "border-b", "border-slate-800/50", "py-3");
      header.classList.remove("bg-transparent", "border-transparent", "py-5");
    } else {
      header.classList.remove("bg-[#0d1126]/90", "backdrop-blur-lg", "border-b", "border-slate-800/50", "py-3");
      header.classList.add("bg-transparent", "border-transparent", "py-5");
    }
  });
}

// Floating Video Audio Toggle Handler
function setupAudioToggle() {
  const video = document.getElementById("hero-video");
  const audioBtn = document.getElementById("audio-toggle-btn");
  const audioStatusText = document.getElementById("audio-status-text");
  const waveContainer = document.getElementById("audio-wave");
  
  if (!video || !audioBtn || !audioStatusText || !waveContainer) return;
  
  audioBtn.addEventListener("click", () => {
    const currentLang = document.documentElement.lang || "en";
    if (video.muted) {
      video.muted = false;
      waveContainer.classList.add("wave-active");
      audioStatusText.textContent = translations[currentLang].audioOn;
      
      // Update styling to reflect active sound
      audioBtn.classList.add("bg-blue-600/30", "border-blue-500/50");
      audioBtn.classList.remove("bg-[#0d1126]/60", "border-[#d5d2de]/10");
    } else {
      video.muted = true;
      waveContainer.classList.remove("wave-active");
      audioStatusText.textContent = translations[currentLang].audioOff;
      
      // Update styling to reflect muted sound
      audioBtn.classList.add("bg-[#0d1126]/60", "border-[#d5d2de]/10");
      audioBtn.classList.remove("bg-blue-600/30", "border-blue-500/50");
    }
  });
}

// Smooth scroll to Team Section
function setupScrollToTeam() {
  const ctaBtn = document.getElementById("hero-cta-btn");
  const teamSection = document.getElementById("team");
  
  if (!ctaBtn || !teamSection) return;
  
  ctaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    teamSection.scrollIntoView({ behavior: "smooth" });
  });
}

// Initialize Application on Page Load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Team cards using english default
  renderTeam("en");
  
  // Set up UI components
  setupHeaderScroll();
  setupAudioToggle();
  setupScrollToTeam();
  
  // Language button event listeners
  const enToggle = document.getElementById("lang-en");
  const trToggle = document.getElementById("lang-tr");
  
  if (enToggle && trToggle) {
    enToggle.addEventListener("click", () => switchLanguage("en"));
    trToggle.addEventListener("click", () => switchLanguage("tr"));
  }
});
