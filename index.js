function changeCity() {
  let city = prompt("Enter city");
  let temperature = prompt ("what is the temperature");
  if (temperature > 0) {
    let heading = document.querySelector("h1");
    heading.innerHTML = "Currently " + temperature + "°C in " + city;
  } else {
    let heading = document.querySelector("h1");
    heading.innerHTML = "Currently " + temperature + "°C in " + city;
  }
}


let changeButton = document.querySelector("button");
changeButton.addEventListener("click", changeCity);