document.addEventListener("DOMContentLoaded", () => {
  // Navbar shadow on scroll
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  });

  // Typing effect
  const roles = ["Frontend Developer", "Student", "Tech Enthusiast"];
  let i = 0, j = 0, current = "", isDeleting = false;
  const typingElement = document.getElementById("typing");

  function type() {
    current = roles[i];
    typingElement.textContent = current.substring(0, j);

    if (!isDeleting && j < current.length) {
      j++;
      setTimeout(type, 100);
    } else if (isDeleting && j > 0) {
      j--;
      setTimeout(type, 60);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else {
        isDeleting = false;
        i = (i + 1) % roles.length;
        setTimeout(type, 200);
      }
    }
  }
  type();
});
