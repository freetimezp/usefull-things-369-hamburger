const toggle = document.querySelector(".toggle");

const items = gsap.utils.toArray(".menu li");

let opened = false;

gsap.to(".hero h1, .hero p, .toggle", {
    y: -25,
    duration: 0.4,
    stagger: 0.15,
    ease: "back.out(2)",
});

gsap.set(items, {
    x: 0,
    y: 0,
    scale: 0,
    rotation: -180,
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");

    if (!opened) {
        gsap.set(items, {
            pointerEvents: "auto",
        });

        gsap.to(items[0], {
            x: -240,
            y: -120,
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "elastic.out(1,0.4)",
        });

        gsap.to(items[1], {
            x: 120,
            y: -120,
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "elastic.out(1,0.4)",
            delay: 0.1,
        });

        gsap.to(items[2], {
            x: -240,
            y: 60,
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "elastic.out(1,0.4)",
            delay: 0.2,
        });

        gsap.to(items[3], {
            x: 120,
            y: 60,
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "elastic.out(1,0.4)",
            delay: 0.3,
        });

        gsap.to(".toggle", {
            rotate: 360,
            duration: 1,
        });
    } else {
        gsap.to(items, {
            x: -60,
            y: -60,
            scale: 0,
            opacity: 0,
            rotation: -180,
            duration: 0.6,
            stagger: 0.05,
            ease: "back.in(2)",

            onComplete: () => {
                gsap.set(items, {
                    pointerEvents: "none",
                });
            },
        });
    }

    opened = !opened;
});

document.querySelectorAll(".menu a").forEach((item) => {
    item.addEventListener("mouseenter", () => {
        gsap.to(item, {
            y: -8,
            scale: 1.1,
            rotation: gsap.utils.random(-5, 5),
            duration: 0.3,
            ease: "back.out(2)",
        });
    });

    item.addEventListener("mouseleave", () => {
        gsap.to(item, {
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.3,
        });
    });
});
