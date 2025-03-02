// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.innerText = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px";
toggleButton.style.background = "#f4a261";
toggleButton.style.border = "none";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Dark Mode CSS (Adds a smooth transition effect)
document.head.insertAdjacentHTML("beforeend", `
    <style>
        .dark-mode {
            background: linear-gradient(to right, #1e1e1e, #121212);
            color: #f4a261;
            transition: background 0.5s ease-in-out;
        }
    </style>
`);

// Fade-in animation when scrolling
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// Animated typing effect for header title
const headerTitle = document.querySelector("header h1");
const text = "Samraddhi Singh";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        headerTitle.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
    }
}

headerTitle.textContent = ""; // Clear text before animation
setTimeout(typeEffect, 500);

// Interactive hover effect on projects
document.querySelectorAll("#projects li").forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.05) rotate(2deg)";
        item.style.transition = "transform 0.3s ease-in-out";
    });
    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1) rotate(0deg)";
    });
});

// Animated scroll-to-top button
const scrollTopButton = document.createElement('button');
scrollTopButton.innerText = "Top";
scrollTopButton.style.position = "fixed";
scrollTopButton.style.bottom = "80px";
scrollTopButton.style.right = "20px";
scrollTopButton.style.padding = "10px";
scrollTopButton.style.background = "#f4a261";
scrollTopButton.style.border = "none";
scrollTopButton.style.cursor = "pointer";
document.body.appendChild(scrollTopButton);

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animated loading effect on page load
const loadingEffect = document.createElement('div');
loadingEffect.style.position = "fixed";
loadingEffect.style.top = "0";
loadingEffect.style.left = "0";
loadingEffect.style.width = "100%";
loadingEffect.style.height = "100%";
loadingEffect.style.background = "rgba(0, 0, 0, 0.5)";
loadingEffect.style.display = "flex";
loadingEffect.style.justifyContent = "center";
loadingEffect.style.alignItems = "center";
loadingEffect.style.fontSize = "24px";
loadingEffect.style.color = "#fff";
loadingEffect.style.zIndex = "1000";
document.body.appendChild(loadingEffect);

setTimeout(() => {
    loadingEffect.style.opacity = "0";
    setTimeout(() => {
        loadingEffect.remove();
    }, 1000);
}, 2000);

// Animated cursor effect
const cursor = document.createElement('div');
cursor.style.position = "fixed";
cursor.style.width = "10px";
cursor.style.height = "10px";
cursor.style.borderRadius = "50%";
cursor.style.background = "#f4a261";
cursor.style.transition = "transform 0.1s ease-in-out";
cursor.style.zIndex = "1000";
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

document.addEventListener('click', () => {
    cursor.style.transform = "scale(1.5)";
    setTimeout(() => {
        cursor.style.transform = "scale(1)";
    }, 100);
});