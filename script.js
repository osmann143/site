// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0,35,149,0.98)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.25)";
    } else {
        navbar.style.background = "rgba(0,35,149,0.90)";
        navbar.style.boxShadow = "none";
    }
});

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".stat-box h3");

const startCounter = () => {
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        let count = 0;

        const update = () => {
            count += Math.ceil(target / 50);

            if (count < target) {
                counter.innerText = count;
                requestAnimationFrame(update);
            } else {
                counter.innerText = target;
            }
        };

        update();
    });
};

const statsSection = document.querySelector(".statistics");

if (statsSection) {
    const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
                counterObserver.disconnect();
            }
        });
    });

    counterObserver.observe(statsSection);
}

// =========================
// GALLERY LIGHTBOX
// =========================

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("lightbox");

        overlay.innerHTML = `
            <span class="close-lightbox">&times;</span>
            <img src="${img.src}">
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {
            overlay.remove();
        });
    });
});

// =========================
// CONTACT FORM
// =========================

const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
    });
}

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".objective-card, .impact-card, .mobility-card, .partner-box"
);

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

revealElements.forEach(item => {
    item.classList.add("hidden");
    revealObserver.observe(item);
});

// =========================
// BACK TO TOP BUTTON
// =========================

const topBtn = document.createElement("button");
topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
topBtn.classList.add("top-btn");
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        topBtn.classList.add("active");
    } else {
        topBtn.classList.remove("active");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// =========================
// FLOATING STARS
// =========================

setInterval(() => {
    const star = document.createElement("div");
    star.classList.add("floating-star");
    star.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 5000);
}, 700);

// =========================
// TYPING EFFECT HERO
// =========================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {
    const text = heroTitle.innerText;
    heroTitle.innerText = "";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        }
    }

    typeWriter();
}
