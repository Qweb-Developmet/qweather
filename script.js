function searchhandlingfn(event) {
  event.preventDefault();
  let searchInput = document.querySelector(`#searchcity`);

  apihandlingfn(searchInput.value);
}

function apihandlingfn(city) {
  if (!city) {
    city = "Kabul";
  }
  axios
    .get(
      `https://api.shecodes.io/weather/v1/current?query=${city}&key=t7a4be44f280a0ace73854a28fo70b86&units=metric`
    )
    .then(htmlmodifier);
  console.log(city);
}
window.onload = function () {
  apihandlingfn(); // Call searchCity when the page is loaded
};
let form = document.querySelector("form");
form.addEventListener("submit", searchhandlingfn);

function htmlmodifier(response) {
  let cityElement = document.querySelector(`.cityname`);
  let tempratureElement = document.querySelector(`.tempnumber`);
  let weatherIcon = document.querySelector(`.wicon`);
  let temperature = response.data.temperature.current;
  let dateTime = new Date(response.data.time);
  let TimeElement = document.querySelector(`time`);
  let whenElement = document.querySelector(`when`);

  // let
  console.log(cityElement); // Will work inside the function
  console.log(dateTime.toLocaleString);
  console.log(weatherIcon);
  console.log(response.data);

  TimeElement.innerHTML = dateTime;
  cityElement.innerHTML = `${response.data.city} / ${response.data.country}`;
  tempratureElement.innerHTML = Math.round(temperature);
  weatherIcon.src = response.data.condition.icon_url;
  whenElement.innerHTML = response.data.condition.icon;
}
function datetimefn() {
  let gotDateTime = Date.now();
  console.log(Date.now());
}
datetimefn();
// Call the function to test
