const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.mainMenu li a');
const menuBtn = document.getElementById('menuBtn');
const mainMenu = document.querySelector('.mainMenu');
const fonts = document.querySelector('.fonts'); 
const body = document.querySelector("body");
const sun = document.querySelector(".toggle #sun");
const moon =document .querySelector(".toggle #moon");
const toggle = document.querySelector("#toggle");
const closeBtn = document.querySelector('.close-icon');
const menuLinks = document.querySelectorAll('.mainMenu li a');

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("open");
  moon.style.display = "none"; 
});

closeBtn.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  moon.style.display = "block"; 
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.add("open");
  sun.style.display = "none"; 
});

closeBtn.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  sun.style.display = "block"; 
});

menuBtn.addEventListener('click', () => {
    mainMenu.classList.add('active');
    closeBtn.style.display = 'block'; 
});

closeBtn.addEventListener('click', () => {
    mainMenu.classList.remove('active');
    menuBtn.style.display = 'block';
    closeBtn.style.display = 'none';
});

toggle.addEventListener("change" , ()=>{

    body.classList.toggle("dark");
    sun.id = sun.id == "sun" ? "sun" : "sun";
    moon.id = moon.id == "moon" ? "moon" : "moon";
    
});

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    const isOpen = mainMenu.classList.toggle('open');

    if (isOpen) {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
        if (fonts) fonts.style.display = 'flex';
    } else {
        mainMenu.style.top = '-100%';
        setTimeout(() => {
            mainMenu.style.display = 'none';
            if (fonts) fonts.style.display = 'none';
        }, 300);
    }
});


document.addEventListener('click', (e) => {
    if (mainMenu.classList.contains('open') && !mainMenu.contains(e.target) && e.target !== menuBtn) {
        mainMenu.style.top = '-100%';
        setTimeout(() => {
            mainMenu.style.display = 'none';
            if (fonts) fonts.style.display = 'none';
            mainMenu.classList.remove('open');
        }, 300);
    }
});

mainMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`.mainMenu li a[href="#${id}"]`);

        if (entry.isIntersecting && link) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}, { threshold: 0.6 });


sections.forEach(section => observer.observe(section));

