const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const seatContainer = document.querySelector(".container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;

// Another Approach

// seats.forEach(function(seat) {
//   seat.addEventListener("click", function(e) {
//     seat.classList.add("selected");
//     const selectedSeats = document.querySelectorAll(".container .selected");
//     selectedSeathLength = selectedSeats.length;
//     count.textContent = selectedSeathLength;
//     let ticketPrice = +movieSelect.value;
//     total.textContent = ticketPrice * selectedSeathLength;
//   });
// });

function updateCountAndPrice() {
  const selectedSeats = document.querySelectorAll(".container .selected");
  let selectedSeatsCount = selectedSeats.length;
  count.textContent = selectedSeatsCount;
  let ticketPrice = +movieSelect.value;
  total.textContent = ticketPrice * selectedSeatsCount;
}

seatContainer.addEventListener("click", function(e) {
  e.target.classList.contains("occupied")
    ? none
    : e.target.classList.toggle("selected");

  updateCountAndPrice();
});
