document.addEventListener("DOMContentLoaded", () => {
  const contentButton = document.querySelector(".content__button");
  const card = document.querySelector(".card");

  contentButton.addEventListener("click", (event) => {
    const elem = event.target;
    elem.classList.add("clicked");

    setTimeout(() => {
      elem.classList.remove("clicked");
    }, 400);

    card.classList.add("visible");
    contentButton.style.display = "none";
  });
});