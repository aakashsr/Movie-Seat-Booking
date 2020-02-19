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

  seatsIndex = [...selectedSeats].map(function(seat) {
    return [...seats].indexOf(seat);
  });

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  let selectedSeatsCount = selectedSeats.length;
  count.textContent = selectedSeatsCount;
  total.textContent = ticketPrice * selectedSeatsCount;
}

movieSelect.addEventListener("change", function(e) {
  ticketPrice = +movieSelect.value;
  // setMovieData(e.target.selectedIndex, e.target.value);
  updateCountAndPrice();
});

seatContainer.addEventListener("click", function(e) {
  e.target.classList.contains("occupied")
    ? null
    : e.target.classList.toggle("selected");

  updateCountAndPrice();
});

// Another Approach

// seatContainer.addEventListener("click", function(e) {
//   if (
//     e.target.classList.contains("seat") &&
//     !e.target.classList.contains("occupied")
//   ) {
//     e.target.classList.toggle("selected");
//     updateCountAndPrice();
//   }
// });
