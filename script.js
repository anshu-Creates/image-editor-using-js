const choose = document.querySelector(".choose");
const reset = document.querySelector(".reset");
const download = document.querySelector(".download");

const brightness = document.querySelector("#brightness");
const contrast = document.querySelector("#contrast");
const exposure = document.querySelector("#exposure");
const saturation = document.querySelector("#saturation");
const hue = document.querySelector("#hue-rotate");
const blur = document.querySelector("#blur");
const grayscale = document.querySelector("#grayscale");
const sepia = document.querySelector("#sepia");
const opacity = document.querySelector("#opacity");
const invert = document.querySelector("#invert");

let image = null;

choose.addEventListener("change", (elem) => {
  imageSrc = elem.target.files[0];
  image = document.createElement("img");
  image.src = URL.createObjectURL(imageSrc);
  image.style.display = "block";
  image.setAttribute("alt", "image");
  image.classList.add("image");
  document.querySelector("#main").appendChild(image);
  document.querySelector(".choose").style.display = "none";
});

brightness.addEventListener("input", (elem) => {
  image.style.filter = `brightness(${elem.target.value}%)`;
});

contrast.addEventListener("input", (elem) => {
  image.style.filter = `contrast(${elem.target.value}%)`;
});

exposure.addEventListener("input", (elem) => {
  exposureValue = elem.target.value;
  image.style.filter = `brightness(${exposureValue * 0.013}%)`;
  image.style.filter = `contrast(${1 + ((exposureValue * 0.013) - 1) * 0.2}%)`;
});
