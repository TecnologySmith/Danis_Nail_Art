let currentIndex = 1;

function openModal(index) {
  currentIndex = index;
  document.getElementById("modal").style.display = "flex";
  showImage(index);
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex > 11) currentIndex = 1;
  if (currentIndex < 1) currentIndex = 11;
  showImage(currentIndex);
}

function showImage(index) {
  document.getElementById("modal-img").src = `imagen (${index}).jpeg`;
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
}
