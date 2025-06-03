// Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 500);
        }, 1000);
    }
});

// Scroll Animations
window.addEventListener('scroll', () => {
    // Navigation bar effect
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Fade in sections
    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Enhanced Card Interactions
document.querySelectorAll('.animated-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(window.scrollY * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Dynamic Background
function updateBackground() {
    const backgrounds = [
        'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f',
        'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b',
        'https://images.unsplash.com/photo-1584551882459-38dd83c3252a'
    ];
    let currentIndex = 0;

    setInterval(() => {
        const background = document.querySelector('.page-background');
        if (background) {
            currentIndex = (currentIndex + 1) % backgrounds.length;
            const newBackground = backgrounds[currentIndex];
            
            const temp = document.createElement('div');
            temp.className = 'page-background';
            temp.style.backgroundImage = `url(${newBackground})`;
            temp.style.opacity = '0';
            document.body.insertBefore(temp, background.nextSibling);

            setTimeout(() => {
                temp.style.opacity = '1';
                background.style.opacity = '0';
                setTimeout(() => {
                    background.remove();
                }, 500);
            }, 50);
        }
    }, 10000); // Change background every 10 seconds
}

// Initialize dynamic background
updateBackground(); 