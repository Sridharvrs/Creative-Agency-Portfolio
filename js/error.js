/*==================================================
            404 PAGE INTERACTIONS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
                ELEMENTS
    ==========================================*/

    const illustration = document.querySelector(".illustration");
    const glassCard = document.querySelector(".glass-card");
    const shapes = document.querySelectorAll(".shape");

    /*==========================================
                MOUSE PARALLAX
    ==========================================*/

    document.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;

        illustration.style.transform =
            `translate(${x}px, ${y}px)`;

        glassCard.style.transform =
            `translate(calc(-50% + ${x * 0.3}px), calc(-50% + ${y * 0.3}px))`;

    });

    /*==========================================
            FLOATING SHAPES
    ==========================================*/

    shapes.forEach((shape, index) => {

        let angle = index * 80;

        function animate() {

            angle += 0.008 + index * 0.002;

            const x = Math.cos(angle) * (10 + index * 4);
            const y = Math.sin(angle) * (10 + index * 4);

            shape.style.transform =
                `translate(${x}px, ${y}px)`;

            requestAnimationFrame(animate);

        }

        animate();

    });

    /*==========================================
            BUTTON RIPPLE
    ==========================================*/

    document.querySelectorAll(".btn-primary,.btn-outline").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transition = ".35s";

        });

    });

    /*==========================================
            FADE IN
    ==========================================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll(".error-left,.error-right")
        .forEach(el => observer.observe(el));

});