const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");
const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    updateActiveNavLink();
    animateOnScroll();
});

hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    });
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll("section");
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "Fresher"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(type, newTextDelay + 250);
});

function animateOnScroll() {
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        
        if (cardTop < window.innerHeight && cardBottom > 0) {
            const progressBar = card.querySelector('.skill-progress');
            if (progressBar && !progressBar.classList.contains('animated')) {
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
                progressBar.classList.add('animated');
            }
        }
    });

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const itemBottom = item.getBoundingClientRect().bottom;
        
        if (itemTop < window.innerHeight - 100 && itemBottom > 0) {
            item.classList.add('show');
        }
    });

    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const cardBottom = card.getBoundingClientRect().bottom;
        
        if (cardTop < window.innerHeight - 100 && cardBottom > 0) {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 100);
        }
    });
}

const projectData = {
    project1: {
        title: "Portfolio Website",
        description: "A responsive personal portfolio website built with HTML, CSS, and JavaScript. Features include smooth scrolling, interactive elements, project showcase, and contact information.",
        image: "74d6c531-d7ef-442c-a7e7-69cd427e50ba.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
        features: [
            "Responsive design for all devices",
            "Smooth scrolling navigation",
            "Interactive project modals",
            "Contact form integration",
            "Modern UI/UX design"
        ],
        github: "#",
        demo: "#"
    },
    project2: {
        title: "Student Info Management System",
        description: "A comprehensive web application for managing student information with full CRUD operations. Built with HTML, CSS, JavaScript frontend and Node.js backend for data management.",
        image: "top-6-benefits-of-student-information-management-system-sims-1.jpg",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js","Fire Base"],
        features: [
            "Create, Read, Update, Delete student records",
            "Student registration and profile management",
            "Search and filter students by various criteria",
            "Data validation and error handling",
            "RESTful API endpoints",
            "Responsive user interface"
        ],
        github: "#",
        demo: "#"
    },
    project4: {
        title: "Weather Forecast App",
        description: "A beautiful and intuitive weather application that provides accurate forecasts for any location. Features include current conditions, 7-day forecasts, and detailed weather metrics.",
        image: "original-7490c73afd13e8a2523fbe2c34f6853b.webp",
        technologies: ["JavaScript", "OpenWeather API", "CSS3", "Chart.js"],
        features: [
            "Real-time weather data from OpenWeather API",
            "7-day weather forecast with hourly breakdown",
            "Location search with autocomplete",
            "Interactive weather charts",
            "Beautiful animations and transitions",
            "Responsive design for all devices"
        ],
        github: "#",
        demo: "#"
    }
};

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];

    const modalContent = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 10px; margin: 1rem 0;">
        <p style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">${project.description}</p>
        
        <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Technologies Used</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
        </div>
        
        <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Key Features</h3>
        <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 1.5rem;">
            ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
        </ul>
        
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <a href="${project.github}" class="btn btn-primary" style="text-decoration: none;">
                <i class="fab fa-github"></i> View Code
            </a>
            <a href="${project.demo}" class="btn btn-secondary" style="text-decoration: none;">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeModal();
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});



window.addEventListener('load', animateOnScroll);
