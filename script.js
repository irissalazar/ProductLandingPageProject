function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function buyNow() {
  alert("Thank you for choosing Jesu Life Fan!");
}

let time = 1200; 

setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  document.getElementById("countdown").innerText =
    `Offer ends in: ${minutes}m ${seconds}s`;

  time--;
}, 1000);
