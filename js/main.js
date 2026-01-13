/**
 * Portfolio Website - Main JavaScript
 * Handles smooth scrolling, scroll animations, and interactive elements
 */

// ===========================
// Smooth Scroll for Navigation Links
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Select all navigation links
    const navLinks = document.querySelectorAll('.nav-link, .nav-logo');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Only handle internal anchor links
            if (href && href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Get navbar height for offset
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// ===========================
// Intersection Observer for Fade-in Animations
// ===========================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of element is visible
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add visible class to trigger CSS animation
            entry.target.classList.add('visible');

            // Optional: Stop observing after animation (performance optimization)
            // observer.unobserve(entry.target);
        }
    });
};

// Create the Intersection Observer
const fadeInObserver = new IntersectionObserver(observerCallback, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow when scrolled
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop;
});

// ===========================
// Active Navigation Link Highlighting
// ===========================

const sections = document.querySelectorAll('section[id]');

const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100; // Offset for navbar
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = 'var(--color-text-secondary)';
            });

            // Add active styling to current link
            if (navLink) {
                navLink.style.color = 'var(--color-primary)';
            }
        }
    });
};

window.addEventListener('scroll', highlightNavOnScroll);
document.addEventListener('DOMContentLoaded', highlightNavOnScroll);

// ===========================
// External Link Security
// ===========================

// Add security attributes to external links
document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');

    externalLinks.forEach(link => {
        // Add security attributes if not already present
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// ===========================
// Accessibility: Keyboard Navigation
// ===========================

document.addEventListener('keydown', (e) => {
    // Allow keyboard users to navigate with arrow keys (optional)
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const currentSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight / 2;
        });

        if (currentSection) {
            const currentIndex = sections.indexOf(currentSection);
            let targetSection;

            if (e.key === 'ArrowDown' && currentIndex < sections.length - 1) {
                targetSection = sections[currentIndex + 1];
            } else if (e.key === 'ArrowUp' && currentIndex > 0) {
                targetSection = sections[currentIndex - 1];
            }

            if (targetSection) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
});

// ===========================
// Performance: Debounce Scroll Events
// ===========================

function debounce(func, wait = 10) {
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

// Apply debounce to scroll-heavy functions (already implemented above)
// This is a helper function for future optimizations

// ===========================
// Console Message
// ===========================

console.log('%c👋 Welcome to my portfolio!', 'font-size: 16px; color: #3b82f6; font-weight: bold;');
console.log('%cInterested in the code? Check out the repository on GitHub!', 'font-size: 12px; color: #64748b;');
