window.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.hero-heading');
    const img = document.querySelector('.home-img');
    if (heading) {
        heading.style.opacity = 0;
        heading.style.transform = 'translateY(-30px)';
        setTimeout(() => {
            heading.style.transition = 'all 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
            heading.style.opacity = 1;
            heading.style.transform = 'translateY(0)';
        }, 200);
    }
    if (img) {
        img.style.opacity = 0;
        img.style.transform = 'scale(0.95)';
        setTimeout(() => {
            img.style.transition = 'all 0.7s cubic-bezier(.68,-0.55,.27,1.55)';
            img.style.opacity = 1;
            img.style.transform = 'scale(1)';
        }, 400);
    }
});


