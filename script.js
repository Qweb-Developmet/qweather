let form = document.querySelector("form");
let searchinput = document.getElementById(`search`);
let searchvalue = searchinput.value;
function searchfn(event) {
  event.preventDefault();

  console.log(searchinput.value);
  console.log(form);
  //   console.log(searchvalue);
  let city = document.querySelector(`.cityname`);
  city.innerHTML = `${searchinput.value}`;
  //   console.log(city);
}
form.addEventListener("submit", searchfn);
