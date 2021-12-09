let image = document.querySelectorAll(".inspiration-main div");
const modalContainer = document.querySelector(".modal-container");

for (let i = 0; i < image.length; i++) {
    console.log(image[i]);

let modalImage = image[i];
modalImage.addEventListener("click", function() {
    modalImage.classList.add("modal");
    modalContainer.style.display = "block";
})

modalContainer.addEventListener("click", closeModal);
    function closeModal() {
      modalContainer.style.display = "none";
      modalImage.classList.remove("modal");
  }

}

