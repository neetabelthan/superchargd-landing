// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Waitlist Form Handling
const waitlistForm = document.getElementById('waitlistForm');
const formMessage = document.getElementById('formMessage');

waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = waitlistForm.querySelector('input[type="email"]');
    const email = emailInput.value;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.add('error');
        return;
    }

    // Simulate form submission (you would replace this with actual API call)
    formMessage.classList.remove('error');
    formMessage.textContent = 'Processing...';

    setTimeout(() => {
        formMessage.textContent = 'Thank you! You\'ve been added to the waitlist.';
        emailInput.value = '';

        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    }, 1000);
});

// Smooth scroll with offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll animations using Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards and sections
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .column-content, .column-image');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        return;
    }

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Add loading state management
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero image (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image img');

    if (heroImage && scrolled < 800) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add hover effect to cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderColor = '#B2DE02';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderColor = '#e5e7eb';
    });
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('.footer-bottom p');
if (footerYear) {
    footerYear.textContent = `© ${currentYear} SuperChargd. All rights reserved.`;
}

// Easter egg: Console message
console.log('%c⚡ SuperChargd', 'color: #B2DE02; font-size: 24px; font-weight: bold;');
console.log('%cRedefining the EV charging experience', 'color: #4b5563; font-size: 14px;');
console.log('%cInterested in joining our team? Email us!', 'color: #B2DE02; font-size: 12px;');
