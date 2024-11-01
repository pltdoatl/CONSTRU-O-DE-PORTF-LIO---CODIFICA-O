document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.projeto img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.transition = 'transform 0.3s ease-in-out';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

document.querySelectorAll('.fade-in').forEach((section) => {
    observer.observe(section);
});

const images = document.querySelectorAll('.zoom-effect');

images.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)'; 
        image.style.transition = 'transform 0.3s ease'; 
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)'; 
    });
});

function myFunction() {
    const body = document.body;
    body.classList.toggle("dark-mode"); 
    
    
    const button = document.getElementById("dark-mode-toggle");
    if (body.classList.contains("dark-mode")) {
        button.textContent = "Modo Claro"; 
    } else {
        button.textContent = "Modo Escuro"; 
    }
}
