// Main JavaScript file handling interactivity and dynamic content
// Extensive comments are provided to make editing easier

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------
    // Display the current year in the footer
    // --------------------------------------------------
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --------------------------------------------------
    // Mobile navigation toggle functionality
    // --------------------------------------------------
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show-nav');
        });
    }

    // --------------------------------------------------
    // Futuristic slogan generator for the home page
    // --------------------------------------------------
    const slogans = [
        'Imagining tomorrow, coding today.',
        'AI that illuminates possibilities.',
        'Shaping the future with neural sparks.'
    ];
    const sloganBtn = document.getElementById('sloganBtn');
    if (sloganBtn) {
        const display = document.getElementById('sloganDisplay');
        sloganBtn.addEventListener('click', () => {
            const random = slogans[Math.floor(Math.random() * slogans.length)];
            display.textContent = random;
        });
    }

    // --------------------------------------------------
    // Dynamically load products on the products page
    // --------------------------------------------------
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        const products = [
            { name: 'AI Assistant', desc: 'Smart assistant for daily tasks.' },
            { name: 'Vision API', desc: 'Advanced image recognition service.' },
            { name: 'Predictive Analytics', desc: 'Forecasting tools for data-driven decisions.' }
        ];
        products.forEach(prod => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `<h3>${prod.name}</h3><p>${prod.desc}</p>`;
            productsContainer.appendChild(card);
        });
    }

    // --------------------------------------------------
    // Basic contact form handler
    // Replace with real backend integration as needed
    // --------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission
            const status = document.getElementById('form-status');
            status.textContent = 'Message sent! We will get back to you soon.';
            contactForm.reset();
        });
    }

    // --------------------------------------------------
    // Simple particle animation for the home hero background
    // --------------------------------------------------
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height;
        const particles = [];

        // Resize canvas to fit the window
        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight * 0.8;
        }
        window.addEventListener('resize', resize);
        resize();

        // Create a set of particles with random positions and velocities
        function createParticles() {
            particles.length = 0; // Clear existing particles
            for (let i = 0; i < 60; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        }

        // Draw particles and update their positions to create animation
        function draw() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#00e5ff';
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(draw);
        }

        createParticles();
        draw();
    }
});
