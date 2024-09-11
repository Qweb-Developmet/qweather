function searchhandlingfn(event) {
  event.preventDefault();
}
let form = document.querySelector("form");
form.addEventListener("submit", searchhandlingfn);
function htmlmodifier(response) {
  let cityElement = document.querySelector(`.cityname`);
  let cityTemprature = document.querySelector(`.tempnumber`);
  console.log(cityElement); // Will work inside the function
  console.log(cityTemprature);
}

// Call the function to test
htmlmodifier();
