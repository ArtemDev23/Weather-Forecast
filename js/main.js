let weatherBlock = document.querySelector("#weather");
const apiKey = 'bf35cac91880cb98375230fb443a116f';
const cities = [
  { id: 703448, name: 'Kyiv' },
  { id: 2643743, name: 'London' },
  { id: 5128581, name: 'New York' },
  { id: 695365, name: 'Rivne' },
  { id: 696643, name: 'Poltava' },
  { id: 690548, name: 'Uzhgorod' },
  { id: 691650, name: 'Ternopil' },
  { id: 692194, name: 'Sumy' },
  { id: 693805, name: 'Simferopol' },
];
const weatherApp = new WeatherApp(apiKey, cities, weatherBlock);
const temperatureConverter = new TemperatureConverter()
weatherApp.displayWeatherData();