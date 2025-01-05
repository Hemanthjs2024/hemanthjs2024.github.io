// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll(".progress-bar");
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const width = bar.getAttribute("aria-valuenow");
            bar.style.width = `${width}%`;
        });
    };

    // Smooth scroll for navigation
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Sticky navbar on scroll
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-dark");
        } else {
            navbar.classList.remove("bg-dark");
        }
    });

    // Reveal elements on scroll
    const revealOnScroll = () => {
        const reveals = document.querySelectorAll("[data-aos]");
        reveals.forEach(reveal => {
            const position = reveal.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                reveal.classList.add("aos-animate");
            } else {
                reveal.classList.remove("aos-animate");
            }
        });
    };
    window.addEventListener("scroll", revealOnScroll);

    // Contact form validation
    const contactForm = document.querySelector("form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            return;
        }

        alert("Thank you for your message!");
        contactForm.reset();
    });

    // Animate cards on hover
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "translateY(-10px) scale(1.05)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "translateY(0) scale(1)";
        });
    });

    // Trigger skill bar animation on scroll
    const skillSection = document.querySelector(".skill");
    window.addEventListener("scroll", () => {
        const position = skillSection.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            animateSkillBars();
        }
    });
});
