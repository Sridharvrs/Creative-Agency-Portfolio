/*=====================================
        STATS COUNTER
=====================================*/

const counters = document.querySelectorAll(".stat-num");

const statsSection = document.querySelector(".stats");

let counted = false;

function startCounter() {

    if (counted) return;

    counted = true;

    counters.forEach(counter => {

        const target = +counter.dataset.count;

        const duration = 2000;

        const startTime = performance.now();

        function update(currentTime) {

            const progress = Math.min((currentTime - startTime) / duration, 1);

            const value = Math.floor(progress * target);

            counter.textContent = value;

            if (progress < 1) {

                requestAnimationFrame(update);

            } else {

                counter.textContent = target + "";

            }

        }

        requestAnimationFrame(update);

    });

}

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

        }

    });

}, {

    threshold: 0.4

});

observer.observe(statsSection);