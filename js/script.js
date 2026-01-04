// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // Header scroll effect
    const handleHeaderScroll = () => {
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.backgroundColor = '#ffffff';
            }
            // Giữ padding luôn là 0 để nút Contact luôn dính cạnh trên
            header.style.padding = '0';
        });
    };

    // Initialize functions
    handleSmoothScroll();
    handleHeaderScroll();
});

