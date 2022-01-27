const starsEl = document.querySelectorAll(".fa-star");
//console.log(starsEl);
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0); //hace que se mantenga su color rojo cuando se refresque la pag.

starsEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    //console.log("clicked", index);
    updateRating(index);
  });
});

function updateRating(index) {
  starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
      starEl.classList.add("active");
    } else {
      starEl.classList.remove("active");
    }
  });
  emojisEl.forEach(emojiEl => {
      emojiEl.style.transform = `translateX(-${index * 50}px)`;
      emojiEl.style.color = colorsArray[index];
  })
}

