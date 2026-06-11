const choose = document.querySelector(".choose");
const reset = document.querySelector(".reset");
const download = document.querySelector(".download");
const original = document.querySelector(".original");
const vintage = document.querySelector(".vintage");
const cold = document.querySelector(".cold");
const warm = document.querySelector(".warm");
const dramatic = document.querySelector(".dramatic");
const darken = document.querySelector(".darken");

const brightness = document.querySelector("#brightness");
const contrast = document.querySelector("#contrast");
const exposure = document.querySelector("#exposure");
const saturation = document.querySelector("#saturation");
const hue = document.querySelector("#hue-rotate");
const blurr = document.querySelector("#blur");
const grayscale = document.querySelector("#grayscale");
const sepia = document.querySelector("#sepia");
const opacity = document.querySelector("#opacity");
const invert = document.querySelector("#invert");

let image = null;
let imageSrc = null;
let brightnessValue = 100;
let contrastValue = 100;
let saturationValue = 100;
let hueValue = 0;
let blurrValue = 0;
let grayscaleValue = 0;
let sepiaValue = 0;
let opacityValue = 100;
let invertValue = 0;

choose.addEventListener("change", (elem) => {
  if (!elem.target.files[0].type.startsWith("image/")) {
    alert("Please select an image file.");
    return;
  } else {
    imageSrc = elem.target.files[0];
    image = document.createElement("img");
    image.src = URL.createObjectURL(imageSrc);
    image.style.display = "block";
    image.setAttribute("alt", "image");
    image.classList.add("image");
    document.querySelector("#main").appendChild(image);
    document.querySelector(".choose").style.display = "none";
  }
});

function applyFilters() {
  image.style.filter = `
    brightness(${brightnessValue}%)
    contrast(${contrastValue}%)
    saturate(${saturationValue}%)
    hue-rotate(${hueValue}deg)
    blur(${blurrValue}px)
    grayscale(${grayscaleValue}%)
    sepia(${sepiaValue}%)
    opacity(${opacityValue}%)
    invert(${invertValue}%)
  `;
}

function resetFilters() {
  brightnessValue = 100;
  contrastValue = 100;
  saturationValue = 100;
  hueValue = 0;
  blurrValue = 0;
  grayscaleValue = 0;
  sepiaValue = 0;
  opacityValue = 100;
  invertValue = 0;
}

function resetValues() {
  brightness.value = brightnessValue;
  contrast.value = contrastValue;
  exposure.value = brightnessValue;
  saturation.value = saturationValue;
  hue.value = hueValue;
  blurr.value = blurrValue * 5;
  grayscale.value = grayscaleValue;
  sepia.value = sepiaValue;
  opacity.value = opacityValue;
  invert.value = invertValue;
}

brightness.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust brightness.");
    resetValues();
    return;
  } else {
    brightnessValue = elem.target.value;
    applyFilters();
  }
});

contrast.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust contrast.");
    resetValues();
    return;
  } else {
    contrastValue = elem.target.value;
    applyFilters();
  }
});

exposure.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust exposure.");
    resetValues();
    return;
  } else {
    brightnessValue = elem.target.value;
    applyFilters();
  }
});

saturation.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust saturation.");
    resetValues();
    return;
  } else {
    saturationValue = elem.target.value;
    applyFilters();
  }
});

hue.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust hue.");
    resetValues();
    return;
  } else {
    hueValue = elem.target.value;
    applyFilters();
  }
});

blurr.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust blur.");
    resetValues();
    return;
  } else {
    blurrValue = elem.target.value / 5;
    applyFilters();
  }
});

grayscale.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust grayscale.");
    resetValues();
    return;
  } else {
    grayscaleValue = elem.target.value;
    applyFilters();
  }
});

sepia.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust sepia.");
    resetValues();
    return;
  } else {
    sepiaValue = elem.target.value;
    applyFilters();
  }
});

opacity.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust opacity.");
    resetValues();
    return;
  } else {
    opacityValue = elem.target.value;
    applyFilters();
  }
});

invert.addEventListener("input", (elem) => {
  if (!image) {
    alert("Please select an image to adjust invert.");
    resetValues();
    return;
  } else {
  invertValue = elem.target.value;
  applyFilters();
  }
});

reset.addEventListener("click", () => {
  if (!image) {
    alert("Please select an image to reset.");
    return;
  } else {
    resetFilters();
    resetValues();
    applyFilters();
  }
});

function downloadImage() {
  const img = document.querySelector(".image");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = img.naturalWidth;
  canvas.height = img.naturalHeight;

  // Apply filters
  ctx.filter = `
    brightness(${brightnessValue}%)
    contrast(${contrastValue}%)
    saturate(${saturationValue}%)
    hue-rotate(${hueValue}deg)
    blur(${blurrValue}px)
    grayscale(${grayscaleValue}%)
    sepia(${sepiaValue}%)
    opacity(${opacityValue}%)
    invert(${invertValue}%)
    `;

  ctx.drawImage(img, 0, 0);

  const link = document.createElement("a");
  link.download = "edited-image.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

download.addEventListener("click", () => {
  if (!image) {
    alert("Please select an image to download.");
    return;
  } else {
    downloadImage();
  }
});

original.addEventListener("click", () => {
  resetFilters();
  resetValues();
  applyFilters();
});

vintage.addEventListener("click", () => {
  brightnessValue = 110;
  contrastValue = 120;
  saturationValue = 90;
  hueValue = -10;
  sepiaValue = 30;
  applyFilters();
  resetValues();
});

cold.addEventListener("click", () => {
  brightnessValue = 90;
  contrastValue = 110;
  saturationValue = 120;
  hueValue = 20;
  applyFilters();
  resetValues();
});

warm.addEventListener("click", () => {
  brightnessValue = 110;
  contrastValue = 120;
  saturationValue = 120;
  hueValue = -20;
  applyFilters();
  resetValues();
});

dramatic.addEventListener("click", () => {
  brightnessValue = 80;
  contrastValue = 150;
  saturationValue = 80;
  hueValue = 0;
  applyFilters();
  resetValues();
});

darken.addEventListener("click", () => {
  brightnessValue = 70;
  contrastValue = 130;
  saturationValue = 100;
  hueValue = 0;
  applyFilters();
  resetValues();
});
