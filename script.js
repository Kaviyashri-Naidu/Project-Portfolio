// --- Typing Effect ---
const typingElement = document.getElementById('typing-effect');
const textArray = ["Data Analysis", "Full-Stack Development", "AI Integration", "Vibe Coding Showcase"];
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typingElement.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        setTimeout(type, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (typingElement) {
        setTimeout(type, 500);
    }
});

// --- Smooth Scrolling ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// --- Contact Form Submission ---
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        formSuccess.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => formSuccess.classList.add('hidden'), 4000);
    });
}
