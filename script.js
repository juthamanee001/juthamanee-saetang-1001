// ============== SCROLL REVEAL ANIMATION ========
// ตรวจสอบเมื่อ DOM โหลดเสร็จ
document.addEventListener("DOMContentLoaded", function() {
    const sr = ScrollReveal({
        distance: "200px",
        duration: 3500,
        delay: 200,
        reset: true,
    });

    // Home Section
    sr.reveal(".home-container h3", { origin: "top" });
    sr.reveal(".home-container h1", { origin: "left" });
    sr.reveal(".home-container p", { origin: "left" });
    sr.reveal(".home-container .right", { origin: "right" });
    sr.reveal(".social-icons-container", { origin: "right" });

    // Hobbies Section
    sr.reveal(".Hobbies-container .title", { origin: "right" });
    sr.reveal(".Hobbies-container h3", { origin: "bottom" });
    sr.reveal(".Hobbies-container p", { origin: "bottom" });
    sr.reveal(".Hobbies-container .left", { origin: "left" });
    sr.reveal(".Hobbies-container .right", { origin: "right" });

    // Assignment Section
    sr.reveal(".Assignment .title", { origin: "top" });
    sr.reveal(".Assignment .content-1", { origin: "left" });
    sr.reveal(".Assignment .content-2", { origin: "right" });

    // Project Section
    sr.reveal(".Project .title", { origin: "top", distance: '50px', duration: 1000 });
    sr.reveal(".project-container", { origin: "bottom", distance: '50px', duration: 1000, delay: 500 });
    sr.reveal(".project-buttons", { origin: "left", distance: '50px', duration: 1000, delay: 800 });

    // Reference Section
    sr.reveal(".Reference .title", { origin: "right" });
    sr.reveal(".Reference .Reference-container", { origin: "left" });

    // Contact Section
    sr.reveal('.Contact .title', { origin: 'top' });
    sr.reveal('.Contact .row .contact-info', { origin: 'left' });
    sr.reveal('.Contact .social-media', { origin: 'right' });
});

// ============== MENU NAVBAR ================
// โค้ด Menu Navbar
const navlist = document.querySelector(".navlist");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = function () {
    navlist.classList.toggle("active");
    menuBtn.classList.toggle("bx-menu");
    menuBtn.classList.toggle("bx-chevrons-up");
};

// ============== STICKY NAVBAR ================
// โค้ด Sticky Navbar
window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("scrolling", scrollY > 50);
});

// ============== PROJECT TABS ================
// โค้ด Project Tabs
let projectTabs = document.getElementsByClassName("project-tab");
let tabContents = document.getElementsByClassName("tab-content");

function tabOpen(event, x) {
    for (let projectTab of projectTabs) {
        projectTab.classList.remove("active");
    }
    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(x).classList.add("active-content");
}

// ============== DARK THEME ==================
// โค้ด Dark Theme
let themeBtn = document.querySelector("#theme-btn");

themeBtn.onclick = function () {
    themeBtn.classList.toggle("bxs-sun");
    themeBtn.classList.toggle("bx-moon");
    document.body.classList.toggle("active");
};

// ============== TYPED JS =====================
// โค้ด Typed JS
const typed = new Typed(".multiple-text", {
    strings: ["Content Creator", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});
