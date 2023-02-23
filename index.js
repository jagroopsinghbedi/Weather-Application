// document
//   .querySelector(".weatherlocation")
//   .addEventListener("click", function () {
//     const valueofsearch = document.querySelector(".weatherlocation").value;
//     console.log(valueofsearch);
//   });

function search() {
  const location = document.querySelector(".weatherlocation").value;
  fetchdetails(location);
}
function fetchdetails(location) {
  let api = "f327a81a2a120fd158a88e9528340ec5";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      location +
      "&units=metric&appid=" +
      api
  )
    .then((response) => {
      if (!response.ok) {
        alert("No weather found.");
        throw new Error("No weather report found!!");
      }
      return response.json();
    })
    .then((data) => binddetails(data));
}
function binddetails(data) {
  console.log(data.name);
  const locationName = data.name;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;

  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?" + locationName + "')";
  document.querySelector(".city").innerHTML = "Weather in " + locationName;
  document.querySelector(".temp").innerHTML = temp + "°C";
  document.querySelector(".desc").innerHTML = description;
  document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
  document.querySelector(".windspeed").innerHTML =
    "Wind speed: " + speed + " km/h";
}
// document.addEventListener("keyup", function (event) {
//   if (event.key == "Enter") {
//     search();
//   }
// });
