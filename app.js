// DOM Elements
const typingText = document.getElementById('typingText');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const downloadBtn = document.getElementById('downloadBtn');

// Professional Colors for Typing Animation
const neonColors = {
    'Full-Stack Developer': '#3B82F6',      // Primary Blue
    'AI Enthusiast': '#10B981',     // Accent Green
    'ML & Data Science': '#F59E0B'      // Accent Orange
};

// Typing Animation with Professional Color Cycling
const titles = ['Full-Stack Developer', 'AI Enthusiast', 'ML & Data Science'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentTitle = titles[titleIndex];
    const currentColor = neonColors[currentTitle];
    
    // Update color and glow effect based on current title
    typingText.style.color = currentColor;
    typingText.style.textShadow = `0 0 10px ${currentColor}50, 0 0 20px ${currentColor}30, 0 0 30px ${currentColor}20`;
    
    if (isDeleting) {
        typingText.textContent = currentTitle.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentTitle.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentTitle.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Enhanced Resume Download Functionality
// If you prefer generating the PDF in-browser (so you can set its internal title/metadata)
// you can use a library like jsPDF.  The code below shows how to create the document and
// trigger a download; simply include the library via a <script> tag in your HTML:
//   <script src="https://cdn.jsdelivr.net/npm/jspdf"></script>
// and then call `generateAndDownloadResume()` instead of `downloadResume()`.

function generateAndDownloadResume() {
    // requires jsPDF (https://github.com/parallax/jsPDF)
    const doc = new jsPDF();
    // set a proper PDF title so viewers display your name in the tab
    doc.setProperties({ title: 'Anem Pramod Kumar Resume' });

    // write the same content used by createResumeContent()
    const content = createResumeContent().split('\n');
    content.forEach((line, i) => {
        doc.text(line, 10, 10 + i * 7);
    });

    doc.save('Anem_Pramod_Kumar_Resume.pdf');
    showNeonDownloadNotification();
}

function downloadResume() {
    // Resume PDF path - Use a relative URL pointing to the file served by your webserver.
    // Placing the PDF in the same directory as your HTML (e.g. alongside index.html) and
    // using a simple relative path ensures the browser can actually fetch it.  Example:
    //   const resumePath = 'resume_27.pdf';
    // If you must reference a subfolder, use forward slashes:
    //   const resumePath = 'assets/docs/resume_27.pdf';
    // Avoid using Windows file paths (C:\\...) as they are not accessible in a web
    // environment and will break the string literal.
    const resumePath = 'Ajay_Resume.pdf'; // <-- Update this to your actual PDF file path
    
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Anem_Pramod_Kumar_Resume.pdf';
    link.target = '_blank';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success notification
    showNeonDownloadNotification();
}

// Create enhanced resume content
function createResumeContent() {
    return `╔═══════════════════════════════════════════════════════════════════╗
║                      ANEM PRAMOD KUMAR                            ║
║              Data Analyst | Web Developer | ML Enthusiast        ║
╚═══════════════════════════════════════════════════════════════════╝

🌐 CONTACT INFORMATION
═══════════════════════════════════════════════════════════════════
📧 Email: pramodanem.pa2004@gmail.com
📱 Phone: +91-7660855248
🐙 GitHub: https://github.com/Pramod1902
💼 LinkedIn: https://linkedin.com/in/anem-pramod-352082290
⚡ LeetCode: https://leetcode.com/progress/

🎓 EDUCATION
═══════════════════════════════════════════════════════════════════
🏛️  SR University
📚 B.Tech in Computer Science & Engineering
📅 Duration: Nov 2023 – Apr 2027
🏆 CGPA: 8.7 / 10

📖 Relevant Courses:
   • Machine Learning        • Data Structures
   • Operating Systems       • Design & Analysis of Algorithms
   • Python                  • Java
   • Data Mining

💼 PROFESSIONAL EXPERIENCE
═══════════════════════════════════════════════════════════════════

🔹 Data Analyst Intern – BharathPe
📅 Duration: June 2024 – July 2024
• Led data analysis of hotel booking cancellations using Python (Pandas, NumPy) 
  and Power BI, identifying key trends that reduced cancellations by 18%
• Developed interactive dashboards and reports to visualize medical health data, 
  enabling data-driven decisions that improved operational efficiency by 25%

🔹 Web Development Intern – CodSoft
📅 Duration: Nov 2024
• Designed and deployed 3+ interactive web applications (Calculator, Portfolio, 
  Tic-Tac-Toe) using HTML, CSS, and JavaScript, ensuring 100% mobile 
  responsiveness and cross-browser compatibility
• Applied UI/UX best practices and modern CSS frameworks (Flexbox/Grid) to 
  enhance user experience, reducing bounce rates by 30% while optimizing 
  performance for faster load times

🚀 PROJECTS
═══════════════════════════════════════════════════════════════════

📊 Hotel Booking Cancellation Data Analysis (Dec 2024)
Analyzed booking data using Python (Pandas, Matplotlib) to identify cancellation 
trends, revealing key factors like lead time and seasonality for revenue optimization. 
Proposed data-driven strategies to reduce cancellations by 18%.

🤖 Titanic Survival Prediction (Feb 2025)
Developed a machine learning model (Logistic Regression/Random Forest) using 
Python (scikit-learn) to predict passenger survival rates, achieving 85% accuracy. 
Performed EDA, feature engineering, and hyperparameter tuning.

🌐 Personal Portfolio Website
Designed and developed a responsive personal portfolio using HTML, CSS, and 
JavaScript with interactive sections and modern UI/UX design featuring neon 
glow effects and smooth animations.

⚡ TECHNICAL SKILLS
═══════════════════════════════════════════════════════════════════
🔧 Programming Languages: Python, Java
🌐 Web Technologies: HTML, CSS, JavaScript, Bootstrap, Tailwind
📊 Data & Analytics: Power BI, Tableau, SQL, MySQL, PL/SQL
🎯 Domain Expertise: Machine Learning, Data Science, Data Analytics, Web Development

═══════════════════════════════════════════════════════════════════
Generated on: ${new Date().toLocaleDateString()}
Portfolio Theme: Neon Glow on Black - Developer & ML Specialist
═══════════════════════════════════════════════════════════════════`;
}

// Enhanced neon download notification
function showNeonDownloadNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #0D0D0D;
        color: #FF4ECD;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        border: 2px solid #FF4ECD;
        box-shadow: 0 0 15px rgba(255, 78, 205, 0.5), 0 0 30px rgba(255, 78, 205, 0.3);
        z-index: 10000;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        font-size: 0.9rem;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        backdrop-filter: blur(10px);
    `;
    
    notification.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 0 5px #FF4ECD);">
            <polyline points="20,6 9,17 4,12"></polyline>
        </svg>
        Resume downloaded successfully!
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Enhanced Mobile Navigation Toggle with neon effects
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Add neon glow to active hamburger
    if (navToggle.classList.contains('active')) {
        navToggle.style.filter = 'drop-shadow(0 0 5px #FF4ECD)';
    } else {
        navToggle.style.filter = 'none';
    }
}

// Close mobile nav when clicking on a link
function closeMobileNav() {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
    navToggle.style.filter = 'none';
}

// FIXED: Enhanced Smooth scrolling for navigation links
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    
    // Remove any loading states that might interfere
    this.style.pointerEvents = 'auto';
    
    // Handle home link specially
    if (targetId === '#home') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        closeMobileNav();
        return;
    }
    
    // Find target section with better error handling
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        const offsetTop = targetSection.offsetTop - navbarHeight - 20;
        
        // Ensure smooth scrolling works across all browsers
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: Math.max(0, offsetTop),
                behavior: 'smooth'
            });
        } else {
            // Fallback for browsers that don't support smooth scrolling
            smoothScrollTo(Math.max(0, offsetTop), 800);
        }
    } else {
        console.warn('Target section not found:', targetId);
    }
    
    closeMobileNav();
}

// Fallback smooth scroll function for older browsers
function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
}

// Enhanced Intersection Observer for fade-in animations
function createObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation for grid items
                if (entry.target.classList.contains('skills-neon-grid') || 
                    entry.target.classList.contains('contact-grid')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.style.opacity = '1';
                            child.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }
            }
        });
    }, observerOptions);
    
    const elementsToObserve = document.querySelectorAll('.section, .education-card, .experience-card, .project-card, .skill-category, .contact-card, .certification-card, .skills-neon-grid, .contact-grid, .certifications-grid');
    elementsToObserve.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// FIXED: Enhanced Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;
    
    // Special case for top of page
    if (window.scrollY < 100) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            link.style.textShadow = 'none';
        });
        const homeLink = document.querySelector('a[href="#home"]');
        if (homeLink) {
            homeLink.classList.add('active');
            homeLink.style.textShadow = '0 0 10px #38BDF8';
        }
        return;
    }
    
    let activeSection = null;
    let minDistance = Infinity;
    
    // Find the section closest to the current scroll position
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const distance = Math.abs(scrollPosition - sectionTop);
        
        if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight + 100) {
            if (distance < minDistance) {
                minDistance = distance;
                activeSection = sectionId;
            }
        }
    });
    
    // Update active nav link with neon effects
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.style.textShadow = 'none';
        const href = link.getAttribute('href');
        if (href === `#${activeSection}`) {
            link.classList.add('active');
            link.style.textShadow = '0 0 10px #38BDF8';
        }
    });
}

// Enhanced Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(13, 13, 13, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 78, 205, 0.2)';
    } else {
        navbar.style.background = 'rgba(13, 13, 13, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 78, 205, 0.1)';
    }
}

// Enhanced scroll to top functionality
function scrollToTop() {
    if ('scrollBehavior' in document.documentElement.style) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        smoothScrollTo(0, 800);
    }
}

// Add enhanced scroll to top button with neon effects
function addScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    
    scrollBtn.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

// Enhanced hover effects for skill badges with neon glow
function enhanceSkillBadges() {
    const skillBadges = document.querySelectorAll('.skill-badge');
    
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
            // Add enhanced glow based on parent category
            const category = this.closest('.skill-category');
            if (category.classList.contains('card-pink')) {
                this.style.boxShadow = '0 0 15px rgba(255, 78, 205, 0.6), 0 0 30px rgba(255, 78, 205, 0.3)';
            } else if (category.classList.contains('card-blue')) {
                this.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.6), 0 0 30px rgba(56, 189, 248, 0.3)';
            } else if (category.classList.contains('card-purple')) {
                this.style.boxShadow = '0 0 15px rgba(167, 139, 250, 0.6), 0 0 30px rgba(167, 139, 250, 0.3)';
            }
        });
        
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });
}

// Enhanced hover effects for course tags with neon glow
function enhanceCourseTags() {
    const courseTags = document.querySelectorAll('.course-tag');
    
    courseTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px) scale(1.05)';
            this.style.boxShadow = '0 0 10px rgba(56, 189, 248, 0.5), 0 0 20px rgba(56, 189, 248, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 0 5px rgba(56, 189, 248, 0.3)';
        });
    });
}

// Enhanced staggered animation for hero elements
function animateHeroElements() {
    const heroElements = [
        document.querySelector('.profile-image'),
        document.querySelector('.hero-name'),
        document.querySelector('.hero-title'),
        document.querySelector('.hero-description'),
        document.querySelector('.btn-primary')
    ];
    
    heroElements.forEach((element, index) => {
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.8s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 300 * (index + 1));
        }
    });
}

// Enhanced image load error handling with neon effects
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.log('Image failed to load:', this.src);
            // Add neon glow to fallback elements
            const fallback = this.nextElementSibling;
            if (fallback && fallback.classList.contains('logo-fallback')) {
                fallback.style.boxShadow = '0 0 10px rgba(167, 139, 250, 0.5)';
            }
        });
        
        img.addEventListener('load', function() {
            // Add subtle glow to loaded images
            this.style.filter = 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.1))';
        });
    });
}

// Add floating particles effect for enhanced neon atmosphere
function createFloatingParticles() {
    const particleCount = 12; // Reduced for better performance
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: ${i % 3 === 0 ? '#FF4ECD' : i % 3 === 1 ? '#38BDF8' : '#A78BFA'};
            border-radius: 50%;
            pointer-events: none;
            z-index: 0;
            opacity: 0.4;
            box-shadow: 0 0 8px currentColor;
        `;
        
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        document.body.appendChild(particle);
        particles.push(particle);
    }
    
    function animateParticles() {
        particles.forEach(particle => {
            const currentLeft = parseFloat(particle.style.left);
            const currentTop = parseFloat(particle.style.top);
            
            particle.style.left = (currentLeft + (Math.random() - 0.5) * 0.3) + 'vw';
            particle.style.top = (currentTop + (Math.random() - 0.5) * 0.3) + 'vh';
            
            // Keep particles on screen
            if (parseFloat(particle.style.left) < 0) particle.style.left = '100vw';
            if (parseFloat(particle.style.left) > 100) particle.style.left = '0vw';
            if (parseFloat(particle.style.top) < 0) particle.style.top = '100vh';
            if (parseFloat(particle.style.top) > 100) particle.style.top = '0vh';
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    // Only create particles on desktop for performance
    if (window.innerWidth > 768) {
        animateParticles();
    }
}

// Throttle function for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Enhanced accessibility with neon focus indicators
function enhanceAccessibility() {
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #38BDF8';
            this.style.outlineOffset = '2px';
            this.style.boxShadow = '0 0 15px rgba(56, 189, 248, 0.5)';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
            // Don't remove existing box-shadow, just the focus one
            if (this.style.boxShadow.includes('rgba(56, 189, 248, 0.5)')) {
                this.style.boxShadow = '';
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Start typing animation after a short delay
    setTimeout(typeText, 1000);
    
    // Setup event listeners with improved error handling
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadResume);
    }
    
    // FIXED: Setup navigation links with proper event handling and validation
    navLinks.forEach(link => {
        // Ensure the link has a valid href before adding listener
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', smoothScroll);
            // Remove any loading states that might interfere
            link.style.pointerEvents = 'auto';
            link.style.opacity = '1';
        }
    });
    
    // Setup throttled scroll listeners
    const throttledScrollHandler = throttle(() => {
        updateActiveNavLink();
        handleNavbarScroll();
    }, 16); // ~60fps
    
    window.addEventListener('scroll', throttledScrollHandler);
    
    // Initialize all enhancements
    createObserver();
    addScrollToTopButton();
    enhanceSkillBadges();
    enhanceCourseTags();
    animateHeroElements();
    handleImageErrors();
    enhanceAccessibility();
    
    // Create floating particles for desktop
    if (window.innerWidth > 768 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        createFloatingParticles();
    }
    
    // Set initial active nav link
    setTimeout(updateActiveNavLink, 100);
    
    // Add initial neon glow to interactive elements
    setTimeout(() => {
        const cards = document.querySelectorAll('.education-card, .experience-card, .project-card, .skill-category, .contact-card, .certification-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 1000);
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        closeMobileNav();
    }
});

// Enhanced keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileNav();
    }
    
    if (e.key === 'Home') {
        e.preventDefault();
        scrollToTop();
    }
    
    // Add neon focus navigation
    if (e.key === 'Tab') {
        const focusedElement = document.activeElement;
        if (focusedElement) {
            focusedElement.style.filter = 'drop-shadow(0 0 10px #38BDF8)';
            setTimeout(() => {
                focusedElement.style.filter = '';
            }, 2000);
        }
    }
});

// Performance optimization and reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
        .image-placeholder::before {
            animation: none !important;
        }
    `;
    document.head.appendChild(style);
}

// Add loading state management with neon effects
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add a subtle glow to the body on load
    document.body.style.boxShadow = 'inset 0 0 100px rgba(255, 78, 205, 0.03)';
    
    // Trigger any load-dependent animations
    const loadAnimations = document.querySelectorAll('.fade-in');
    loadAnimations.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
    
    // Ensure navigation is fully functional after load
    setTimeout(() => {
        updateActiveNavLink();
        console.log('✅ Neon Portfolio fully loaded and navigation active');
    }, 500);
});

// Error handling for the application
window.addEventListener('error', function(e) {
    console.error('Neon Portfolio Application error:', e.error);
    
    // Show neon error notification
    const errorNotification = document.createElement('div');
    errorNotification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #0D0D0D;
        color: #FF4ECD;
        padding: 1rem;
        border-radius: 8px;
        border: 2px solid #FF4ECD;
        box-shadow: 0 0 15px rgba(255, 78, 205, 0.5);
        z-index: 10001;
        font-size: 0.9rem;
        max-width: 300px;
    `;
    errorNotification.textContent = 'An error occurred. Please refresh the page.';
    
    document.body.appendChild(errorNotification);
    setTimeout(() => {
        if (errorNotification.parentNode) {
            document.body.removeChild(errorNotification);
        }
    }, 5000);
});

// Debug helper for neon portfolio
function debugNeonPortfolio() {
    console.log('🌈 Neon Portfolio Debug Info:');
    console.log('Navigation Links:', navLinks.length);
    console.log('Sections with IDs:', document.querySelectorAll('section[id]').length);
    console.log('Neon Cards:', document.querySelectorAll('[class*="card-"]').length);
    console.log('Typing Animation Colors:', neonColors);
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        console.log(`🔗 Link ${href}:`, target ? 'Found ✅' : 'Missing ❌');
    });
    
    // Test navigation functionality
    console.log('🔧 Navigation Test: Smooth scroll function available:', typeof smoothScroll === 'function');
}

// Call debug function in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    setTimeout(debugNeonPortfolio, 1000);
}