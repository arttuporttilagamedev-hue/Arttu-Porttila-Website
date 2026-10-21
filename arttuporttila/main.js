const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const bilingualNodes = [];

function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
}

function bilingual(node, value) {
    if (typeof value === "string") {
        node.textContent = value;
        return node;
    }
    bilingualNodes.push([node, value]);
    node.textContent = value[currentLang] || value.fi;
    return node;
}

document.addEventListener("languagechange", () => {
    bilingualNodes.forEach(([node, value]) => {
        node.textContent = value[currentLang] || value.fi;
    });
});

function initReveal(selector = ".reveal", { threshold = 0.15, onReveal } = {}) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
            if (onReveal) onReveal(entry.target);
        });
    }, { threshold });

    document.querySelectorAll(selector).forEach(node => observer.observe(node));
}

if (!reduceMotion) {
    const orbs = document.querySelectorAll(".orb");

    if (orbs.length) {
        let ticking = false;

        window.addEventListener("scroll", () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                const y = window.scrollY;
                orbs.forEach(orb => {
                    orb.style.transform = `translateY(${y * orb.dataset.speed}px)`;
                });
                ticking = false;
            });
        }, { passive: true });
    }
}

if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        window.scrollTo(0, 0);
    }
});