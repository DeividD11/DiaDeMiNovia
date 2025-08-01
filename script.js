// script.js: Animaciones al hacer scroll (IntersectionObserver)
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = entry.target.getAttribute('data-animation');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Asignar animaciones personalizadas a cada sección
    const sections = [
        { selector: 'header', animation: 'fadeInDown 1s ease-out forwards' },
        { selector: '#prepare', animation: 'fadeInUp 1s ease-out forwards' },
        { selector: '#steps', animation: 'fadeInUp 1s ease-out forwards' },
        { selector: '#poem', animation: 'fadeInUp 1s ease-out forwards' },
        { selector: 'footer', animation: 'fadeInUp 1s ease-out forwards' },
    ];
    sections.forEach(sec => {
        const element = document.querySelector(sec.selector);
        if (element) {
            element.style.opacity = 0;
            element.setAttribute('data-animation', sec.animation);
            observer.observe(element);
        }
    });
});
