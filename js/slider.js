const imgContainer = document.getElementById("img-container");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

let sliderItems = [...document.getElementsByClassName("slider-item")];
let index = 0;

leftButton.addEventListener("click", (e) => {
  if (index === 0) {
    index = 0;
  } else {
    index -= 1;
  }

  imgContainer.style.transform = `translateX(-${index}${
    index === 0 ? "" : "00"
  }%)`;
});

rightButton.addEventListener("click", (e) => {
  if (index === 4) {
    index = 4;
  } else {
    index += 1;
  }

  imgContainer.style.transform = `translateX(-${index}${
    index === 0 ? "" : "00"
  }%)`;
});
