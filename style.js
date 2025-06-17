const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

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
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector("#cursor");
    const cursorBorder = document.querySelector("#cursor-border");
    const cursorPos = { x: 0, y: 0 };
    const cursorBorderPos = { x: 0, y: 0 };

    document.addEventListener("mousemove", (e) => {
        cursorPos.x = e.clientX;
        cursorPos.y = e.clientY;
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    requestAnimationFrame(function loop() {
        const easting = 8;
        cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
        cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

        cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
        requestAnimationFrame(loop);
    });

    document.querySelectorAll("[data-cursor]").forEach((item) => {
        item.addEventListener("mouseover", (e) => {
            if (item.dataset.cursor === "pointer") {
                cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
                cursorBorder.style.setProperty("--size", "30px");
            }
            if (item.dataset.cursor === "pointer2") {
                cursorBorder.style.backgroundColor = "white";
                cursorBorder.style.mixBlendMode = "difference";
                cursorBorder.style.setProperty("--size", "80px");
            }
        });
        item.addEventListener("mouseout", (e) => {
            cursorBorder.style.backgroundColor = "unset";
            cursorBorder.style.mixBlendMode = "unset";
            cursorBorder.style.setProperty("--size", "50px");
        });
    });

    document.addEventListener("click", (e) => {
        cursorBorder.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px) scale(0.5)`;
        setTimeout(() => {
            cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px) scale(1)`;
        }, 100);
    });
});
