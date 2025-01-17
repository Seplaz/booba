document.addEventListener("DOMContentLoaded", () => {
  const storyButton = document.querySelector(".story__button");
  const storyCard = document.querySelector(".story__card");

  storyButton.addEventListener("click", (event) => {
    const elem = event.target;
    elem.classList.add("clicked");

    setTimeout(() => {
      elem.classList.remove("clicked");
    }, 400);

    storyCard.classList.add("visible");
    storyButton.style.display = "none";
  });
});