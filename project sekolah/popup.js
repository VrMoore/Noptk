const images = document.querySelectorAll("[data-zoom]");

const duration =
  parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--duration")
  ) * 1000;

images.forEach((image) => {
  image.addEventListener("click", () => {
    const imageClone = image.cloneNode(false);
    imageClone.addEventListener("click", (e) => e.stopPropagation());

    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.appendChild(imageClone);
    popup.addEventListener("click", hidePopup);

    document.body.appendChild(popup);
    showPopup(popup);
  });
});

function showPopup(el) {
  setTimeout(() => el.classList.add("show"), 0);
}

function hidePopup() {
  this.classList.remove("show");
  setTimeout(() => this.remove(), duration);
}
