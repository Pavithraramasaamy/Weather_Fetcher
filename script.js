async function getWeather() {
  const city = document.getElementById("city").value;
  const output = document.getElementById("weatherOutput");

  if (city === "") {
    output.innerText = "Please enter a city name.";
    return;
  }

  const apiKey = "3ce51f64c476459b8b7164459251107";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    output.innerText = "Loading...";
    const response = await fetch(url);
    const data = await response.json();

    output.innerHTML = `
      Location: ${data.location.name}, ${data.location.country}<br>
      Temperature: ${data.current.temp_c} °C<br>
      Condition: ${data.current.condition.text}
    `;
  } catch {
    output.innerText = "Could not fetch weather. Please try a valid city.";
  }
}
