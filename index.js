const form = document.getElementById("message-me");
const header = document.querySelector("header");

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
