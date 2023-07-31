// Selektuj dugme:
let mybutton = document.getElementById("scrollBtn");

// Na 20px od vrha dokumenta, pokazi dugme
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Kad se klikne na dugme, skroluj na vrh
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE i Opera
}

// Border na klik
const myButton = document.getElementById("btn");

myButton.addEventListener("click", () => {
  myButton.classList.toggle("clicked");
});

const myButto = document.getElementById("btn-1");

myButto.addEventListener("click", () => {
  myButto.classList.toggle("clicked");
});

const myButt = document.getElementById("btn-2");

myButt.addEventListener("click", () => {
  myButt.classList.toggle("clicked");
});

const myBut = document.getElementById("btn-3");

myBut.addEventListener("click", () => {
  myBut.classList.toggle("clicked");
});

const myBu = document.getElementById("btn-4");

myBu.addEventListener("click", () => {
  myBu.classList.toggle("clicked");
});
