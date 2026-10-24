if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}



/* =====================================================
   LOADING SCREEN
===================================================== */

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 1000);

    }, 1000);

});


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const words = [
    "Creative Developer.",
    "Web Designer.",
    "Digital Creator.",
    "Visual Explorer."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typingText = document.getElementById("typingText");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );

}

typeEffect();


/* =====================================================
   SCROLL REVEAL
===================================================== */

/* =====================================================
   SCROLL REVEAL
===================================================== */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const elementBottom =
            element.getBoundingClientRect().bottom;

        if (
            elementTop < windowHeight - 100 &&
            elementBottom > 0
        ) {

            element.classList.add("active");

        } else {

            element.classList.remove("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =====================================================
   SKILL BAR ANIMATION
===================================================== */

const skills = document.querySelectorAll(".skill-progress");

function animateSkills() {

    skills.forEach(skill => {

        const position =
            skill.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {

            skill.style.width =
                skill.dataset.width;

        }

    });

}

window.addEventListener("scroll", animateSkills);

animateSkills();


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor =
    document.querySelector(".cursor");

const cursorRing =
    document.querySelector(".cursor-ring");

document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorRing.style.left = e.clientX + "px";
    cursorRing.style.top = e.clientY + "px";

});


/* =====================================================
   PARALLAX
===================================================== */

window.addEventListener("scroll", () => {

    const scroll =
        window.scrollY;

    document.querySelector(".orb.one").style.transform =
        `translate(${scroll * 0.03}px, ${scroll * 0.02}px)`;

    document.querySelector(".orb.two").style.transform =
        `translate(-${scroll * 0.02}px, -${scroll * 0.03}px)`;

});


/* =====================================================
   PROJECT HOVER EFFECT
===================================================== */

document.querySelectorAll(".project").forEach(project => {

    project.addEventListener("mousemove", e => {

        const rect =
            project.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 25;

        const rotateY =
            (centerX - x) / 25;

        project.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    project.addEventListener("mouseleave", () => {

        project.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});