async function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();

    if (data.error) {
      document.getElementById("result").innerHTML = "❌ " + data.error;
    } else {
      document.getElementById("result").innerHTML = `
        <h2>🌍 Weather in ${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>☁️ Condition: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      `;
    }
  } catch (error) {
    document.getElementById("result").innerHTML = "⚠️ Failed to fetch weather.";
  }
}
