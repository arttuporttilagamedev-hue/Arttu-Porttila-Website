(function () {
    const toggle   = document.getElementById("navToggle");
    const menu     = document.getElementById("navLinks");
    const backdrop = document.getElementById("navBackdrop");
 
    if (!toggle || !menu || !backdrop) return;
 
    const BREAKPOINT = 1000; // sama luku kuin CSS:n @media (max-width: 1000px)
    const mobileQuery = window.matchMedia("(max-width: " + BREAKPOINT + "px)");
 
    function openMenu() {
        document.body.classList.add("nav-open");
        toggle.setAttribute("aria-expanded", "true");
        toggle.setAttribute("aria-label", "Sulje valikko");
    }
 
    function closeMenu() {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Avaa valikko");
    }
 
    toggle.addEventListener("click", () => {
        document.body.classList.contains("nav-open") ? closeMenu() : openMenu();
    });
 
    // Sulje, kun taustaa tai sivulinkkiä klikataan (kielinapit eivät sulje valikkoa)
    backdrop.addEventListener("click", closeMenu);
    menu.querySelectorAll(".nav-links a").forEach(link => link.addEventListener("click", closeMenu));
 
    // Sulje Escape-näppäimellä ja palauta kohdistus nappiin
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && document.body.classList.contains("nav-open")) {
            closeMenu();
            toggle.focus();
        }
    });
 
    // Sulje, jos ikkuna levenee takaisin työpöytäkokoon
    mobileQuery.addEventListener("change", () => {
        if (!mobileQuery.matches) closeMenu();
    });
})();