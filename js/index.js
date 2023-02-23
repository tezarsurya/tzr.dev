const header = document.querySelector("header");
const form = document.getElementById("contact-form");
const heroCta = document.getElementsByClassName("hero-cta");
const navBtn = document.getElementById("nav-button");
const mobileNav = document.getElementById("mobile-nav");
const bars = navBtn.children;
const overlay = document.getElementById("nav-overlay");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const path = window.location.pathname;

let mobileNavShow = false;

for (const cta of heroCta) {
  cta.addEventListener("click", (e) => {
    e.preventDefault();
    const heroHeight = document.getElementById("hero").offsetHeight;

    window.scrollTo({
      top: heroHeight,
      behavior: "smooth",
    });
  });
}

function openNav() {
  mobileNavShow = true;
  navBtn.style.border = "2px solid var(--lightMagenta)";
  navBtn.style.boxShadow = "0 0 20px var(--primary)";
  overlay.style.visibility = "visible";
  overlay.style.animation = "reveal 0.3s ease-out";
  mobileNav.style.top = "4.5rem";
}

function closeNav() {
  mobileNavShow = false;
  navBtn.removeAttribute("style");
  overlay.style.animation = "conceal 0.3s ease-out, hide 1s infinite 0.3s";
  setTimeout(() => {
    overlay.removeAttribute("style");
  }, 300);
  mobileNav.removeAttribute("style");
}

navBtn.addEventListener("click", (e) => {
  if (!mobileNavShow) {
    return openNav();
  }
  return closeNav();
});

overlay.addEventListener("click", (e) => closeNav());

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const rawData = new FormData(e.currentTarget);
    const data = {
      name: rawData.get("name"),
      email: rawData.get("email"),
      message: rawData.get("message"),
    };
    e.currentTarget.reset();
    alert(JSON.stringify(data, 4, null));
  });

  nameInput.addEventListener("input", (e) => {
    const invalidMessage = nameInput.nextElementSibling;
    if (e.target.value == "") {
      invalidMessage.style.display = "block";
      invalidMessage.innerHTML = "Name cannot be empty";
      e.currentTarget.style.borderColor = "#ef4444";
    } else {
      invalidMessage.removeAttribute("style");
      e.currentTarget.removeAttribute("style");
    }
  });

  emailInput.addEventListener("input", (e) => {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const invalidMessage = emailInput.nextElementSibling;
    if (e.target.value == "") {
      invalidMessage.style.display = "block";
      invalidMessage.innerHTML = "Email cannot be empty";
      e.currentTarget.style.borderColor = "#ef4444";
    } else {
      invalidMessage.removeAttribute("style");
      e.currentTarget.removeAttribute("style");
    }

    if (e.target.value.match(emailFormat)) {
      invalidMessage.removeAttribute("style");
    }
  });

  emailInput.addEventListener("change", (e) => {
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const invalidMessage = emailInput.nextElementSibling;
    if (!e.target.value.match(emailFormat)) {
      invalidMessage.style.display = "block";
      invalidMessage.innerHTML = "That's an invalid email";
      e.currentTarget.style.borderColor = "#ef4444";
    }
  });

  messageInput.addEventListener("input", (e) => {
    const invalidMessage = messageInput.nextElementSibling;
    if (e.target.value == "") {
      invalidMessage.style.display = "block";
      invalidMessage.innerHTML =
        "There's no way you're going to send a message without an actual message";
      e.currentTarget.style.borderColor = "#ef4444";
    } else {
      invalidMessage.removeAttribute("style");
      e.currentTarget.removeAttribute("style");
    }
  });
}

if (
  path == "/tzr.dev/" ||
  path == "/tzr.dev" ||
  path == "/tzr.dev/index.html" ||
  path == "/index.html"
) {
  window.addEventListener("resize", (e) => {
    if (window.screen.width <= 640) {
      header.style.top = 0;
    } else {
      header.style.top = "-7rem";
    }
  });
}

if (
  path == "/tzr.dev/" ||
  path == "/tzr.dev" ||
  path == "/tzr.dev/index.html" ||
  path == "/index.html"
) {
  window.addEventListener("scroll", (e) => {
    let scrollHeight = window.scrollY;
    if (window.screen.width < 640) {
      return;
    }

    if (scrollHeight <= 0) {
      header.style.top = "-7rem";
    }

    if (scrollHeight > 160) {
      header.style.top = 0;
    }
  });
}
