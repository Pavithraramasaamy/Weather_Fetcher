# Weather_Fetcher
## Date:12-07-2025
## Objective:
To demonstrate how to use Promises and async/await in JavaScript by fetching and displaying live weather data from an API. This activity reinforces real-world async data handling in web applications.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>WeatherNow</h1>```

Create an ```<input>``` for the city name

Add a ```<button>``` to trigger the fetch

Create a <div> to display the weather information

#### 2. Style with CSS:
Center the layout and style input and button

Style the weather output box with borders, padding, and a background color

Add hover effects for the button

#### 3. JavaScript with Promises and Async/Await:
Use fetch() to get weather data from a free API like https://api.weatherapi.com or a mock API

Wrap the fetch in an async function

Use await to wait for the response and parse it as JSON

Use .catch() to handle any errors in the promise

Display the temperature, description, and location in the output div
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>WeatherNow</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>WeatherNow</h1>
    <input type="text" id="city" placeholder="Enter city name" />
    <button onclick="getWeather()">Check Weather</button>
    <div id="weatherOutput"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>


```
## CSS Code:
```
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(to right, #557da2, #cce5ff);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: rgb(198, 189, 189);
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 5px 15px rgba(61, 77, 96, 0.2);
  text-align: center;
}

h1 {
  color: #a91212;
  margin-bottom: 20px;
}

input {
  padding: 10px;
  width: 220px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #a91212;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

#weatherOutput {
  margin-top: 30px;
  padding: 20px;
  background-color: rgb(198, 189, 189); 
  color: #a91212;
  border-radius: 10px;
  border: 2px solid #a91212;
  font-size: 18px;
  min-height: 80px;
}

```
## JavaScript Code:
```
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

```
## Output:

<img width="1919" height="1025" alt="image" src="https://github.com/user-attachments/assets/1ec50e89-cf56-4fea-bdba-e13648f0ff81" />


## Result:
A mini module that successfully uses Promises and async/await to handle real-time API data, reinforcing asynchronous JavaScript patterns in a practical context.
