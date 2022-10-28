const openModal = document.querySelector(".button-index");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");


openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--show");
  });
closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");
  });
