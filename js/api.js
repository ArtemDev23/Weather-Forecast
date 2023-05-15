// let weatherBlock = document.querySelector("#weather");
// const apiKey = 'bf35cac91880cb98375230fb443a116f';
// const cities = [
//   { id: 703448, name: 'Kyiv' },
//   { id: 695365, name: 'Rivne' },
//   { id: 696643, name: 'Poltava' },
//   { id: 690548, name: 'Uzhgorod' },
//   { id: 691650, name: 'Ternopil' },
//   { id: 692194, name: 'Sumy' },
//   { id: 693805, name: 'Simferopol' },
// ];

// // Функція для отримання погодніх даних та створення картки для кожного міста
// export async function displayWeatherData() {
//   for (const city of cities) {
//     try {
//       const response = await fetch(
//         `http://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${apiKey}&units=metric`
//       );
//       const data = await response.json();

//       const cityName = city.name;
//       const temperature = Math.round(data.main.temp);
//       const weatherIcon = data.weather[0].icon;
//       const weatherStatus = data.weather[0].main;
//       const pressure = data.main.pressure;
//       const sunrise = data.sys.sunrise;
//       const sunset = data.sys.sunset;
//       const windSpeed = data.wind.speed;
//       const windDirection = data.wind.deg;

//       const weatherCard = new WeatherCard(cityName, temperature, weatherIcon, weatherStatus, pressure, sunrise, sunset, windSpeed, windDirection);
//       weatherBlock.appendChild(weatherCard);
//     } catch (error) {
//       console.error(`Сталася помилка для міста ${city.name}:`, error);
//     }
//   }
// }




// async function fetchWeatherData(city, apiKey) {
//   const url = `http://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${apiKey}&units=metric`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// async function fetchWeatherData(city, apiKey) {
//   const url = `http://api.openweathermap.org/data/2.5/forecast?id=${city.id}&appid=${apiKey}&units=metric`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }