// Smooth Scroll for Internal Links
document.querySelectorAll("a.nav-link").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    document.getElementById(targetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Smooth Scroll for "Contact Me" Button
document.querySelector(".btn-primary").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

// ScrollSpy Active Class Handling
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href").includes(current));
  });
});

// Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && subject && message) {
    alert("Thank you for contacting me. I will get back to you soon!");
    this.reset();
  } else {
    alert("Please fill in all fields.");
  }
});

// Add Hover Animations for Social Icons
document.querySelectorAll(".socials a").forEach(icon => {
  icon.addEventListener("mouseenter", () => icon.style.transform = "scale(1.3)");
  icon.addEventListener("mouseleave", () => icon.style.transform = "scale(1)");
});

// Highlight Text on Button Click
document.querySelector(".btn-highlight").addEventListener("click", () => {
  document.querySelector(".highlight-target").classList.toggle("highlight");
});
