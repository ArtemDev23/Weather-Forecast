
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
// async function displayWeatherData() {
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

//       const weatherCard = createWeatherCard(cityName, temperature, weatherIcon, weatherStatus, pressure, sunrise, sunset, windSpeed, windDirection);
//       weatherBlock.appendChild(weatherCard);
//     } catch (error) {
//       console.error(`Сталася помилка для міста ${city.name}:`, error);
//     }
//   }
// }

// displayWeatherData();


// // Функція для створення HTML-коду картки погоди
// function createWeatherCard(cityName, temperature, weatherIcon, weatherstatus, pressure, sunrise, sunset, windSpeed, windDirection) {
//   const card = document.createElement('div');
//   card.classList.add('weather-card');

//   const cityNameElement = document.createElement('h2');
//   cityNameElement.textContent = cityName;

//   let temperatureElement = document.createElement('p');
//   temperatureElement.innerHTML = `Temperature: ${temperature} &deg;C`;
//   temperatureElement.classList.add('block_weather');

//   const weatherIconElement = document.createElement('img');
//   weatherIconElement.src = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;


//   const weatherstatusElement = document.createElement('h3');
//   weatherstatusElement.innerHTML = weatherstatus;


//   const pressureElement = document.createElement('p');
//   pressureElement.innerHTML = `pressure ${pressure} mm Hg`;

//   const sunriseElement = document.createElement('p');
//   sunriseElement.innerHTML = `Sunrise: ${convertUnixTimestampToTime(sunrise)}`;

//   const sunsetElement = document.createElement('p');
//   sunsetElement.innerHTML = `Sunset: ${convertUnixTimestampToTime(sunset)}`;

//   const windSpeedElement = document.createElement('p');
//   windSpeedElement.innerHTML = `wind speed ${windSpeed} m/s`

//   const windDirectionElement = document.createElement('p');
//   windDirectionElement.innerHTML = `wind direction: ${directionOfwWind(windDirection)}`;


//   card.appendChild(cityNameElement);
//   card.appendChild(temperatureElement);
//   card.appendChild(weatherIconElement);
//   card.appendChild(weatherstatusElement);
//   card.appendChild(pressureElement);
//   card.appendChild(sunriseElement);
//   card.appendChild(sunsetElement);
//   card.appendChild(windSpeedElement);
//   card.appendChild(windDirectionElement);

//   return card;
// }

// // Функція для перемикання одиниць температури
// const unitsC = document.querySelector('#unitsC');
// const unitsF = document.querySelector('#unitsF');
// let isCelsius = true; // початково встановлено на градуси Цельсія

// unitsC.addEventListener('click', () => {
//   if (!isCelsius) {
//     isCelsius = true;
//     unitsC.classList.add('unit-current');
//     unitsF.classList.remove('unit-current');

//     const temperatureElements = document.querySelectorAll('.weather-card p:nth-child(2)');
//     temperatureElements.forEach((element) => {
//       const currentTemp = parseInt(element.innerHTML.replace('Temperature: ', '').replace(' &deg;C', ''));
//       const convertedTemp = fToC(currentTemp);
//       element.textContent = `Temperature: ${Math.round(convertedTemp)}°C`;
//     });
//   }
// });

// unitsF.addEventListener('click', () => {
//   if (isCelsius) {
//     isCelsius = false;
//     unitsF.classList.add('unit-current');
//     unitsC.classList.remove('unit-current');

//     const temperatureElements = document.querySelectorAll('.weather-card p:nth-child(2)');
//     temperatureElements.forEach((element) => {
//       const currentTemp = parseInt(element.innerHTML.replace('Temperature: ', '').replace(' &deg;F', ''));
//       const convertedTemp = cToF(currentTemp);
//       element.textContent = `Temperature: ${Math.round(convertedTemp)}°F`;
//     });
//   }
// });

// const cToF = (celsius) => {
//   return celsius * 9 / 5 + 32;
// };

// const fToC = (fahrenheit) => {
//   return (fahrenheit - 32) * 5 / 9;
// };



// // конвертація значення направлення вітру
// const directionOfwWind = (degree) => {
//   if (degree > 337.5) { return 'northern' };
//   if (degree > 292.5) { return 'northwest' };
//   if (degree > 247.5) { return 'west' };
//   if (degree > 202.5) { return 'southwest' };
//   if (degree > 157.5) { return 'southern' };
//   if (degree > 122.5) { return 'southeast' };
//   if (degree > 67.5) { return 'eastern' };
//   if (degree > 22.5) { return 'northeast' }
//   return 'northern';
// }

// // конвертація значення в часи і хвилини
// function convertUnixTimestampToTime(unixTimestamp) {
//   const date = new Date(unixTimestamp * 1000); // Множимо на 1000, оскільки в JavaScript використовується мілісекунди    
//   const hours = date.getHours().toString().padStart(2, '0'); // Отримуємо години з ведучими нулями   
//   const minutes = date.getMinutes().toString().padStart(2, '0'); // Отримуємо хвилини з ведучими нулями    
//   // return `${hours}:${minutes}`;
//   if (hours <= 12) {
//     return `${hours}:${minutes} am`;
//   } else
//     return `${hours}:${minutes} pm`;

// }



// рефакторинг за допомогою класів та обектів

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

class WeatherApp {
  constructor(apiKey, cities, weatherBlock) {
    this.apiKey = apiKey;
    this.cities = cities;
    this.weatherBlock = weatherBlock;
    this.isCelsius = true;
    this.unitsC = document.querySelector('#unitsC');
    this.unitsF = document.querySelector('#unitsF');

    this.unitsC.addEventListener('click', () => {
      if (!this.isCelsius) {
        this.isCelsius = true;
        this.unitsC.classList.add('unit-current');
        this.unitsF.classList.remove('unit-current');
        this.convertTemperaturesToCelsius();
      }
    });

    this.unitsF.addEventListener('click', () => {
      if (this.isCelsius) {
        this.isCelsius = false;
        this.unitsF.classList.add('unit-current');
        this.unitsC.classList.remove('unit-current');
        this.convertTemperaturesToFahrenheit();
      }
    });
  }

  async displayWeatherData() {
    for (const city of this.cities) {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?id=${city.id}&appid=${this.apiKey}&units=metric`
        );
        const data = await response.json();
        const cityName = city.name;
        const temperature = Math.round(data.main.temp);
        const weatherIcon = data.weather[0].icon;
        const weatherStatus = data.weather[0].main;
        const pressure = data.main.pressure;
        const sunrise = data.sys.sunrise;
        const sunset = data.sys.sunset;
        const windSpeed = data.wind.speed;
        const windDirection = data.wind.deg;
        const weatherCard = new WeatherCard(cityName, temperature, weatherIcon, weatherStatus, pressure, sunrise, sunset, windSpeed, windDirection);

        this.weatherBlock.appendChild(weatherCard.createCardElement());
      } catch (error) {
        console.error(`An error occurred for city ${city.name}:`, error);
      }
    }
  }

  convertTemperaturesToCelsius() {
    const temperatureElements = document.querySelectorAll('.weather-card p:nth-child(2)');
    temperatureElements.forEach((element) => {
      const currentTemp = parseInt(element.innerHTML.replace('Temperature: ', '').replace(' &deg;F', ''));
      const convertedTemp = this.fahrenheitToCelsius(currentTemp);
      element.textContent = `Temperature: ${Math.round(convertedTemp)}°C`;
    });
  }

  convertTemperaturesToFahrenheit() {
    const temperatureElements = document.querySelectorAll('.weather-card p:nth-child(2)');
    temperatureElements.forEach((element) => {
      const currentTemp = parseInt(element.innerHTML.replace('Temperature: ', '').replace(' &deg;C', ''));
      const convertedTemp = this.celsiusToFahrenheit(currentTemp);
      element.textContent = `Temperature: ${Math.round(convertedTemp)} F`;
    });
  }

  celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }

  fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
}

class WeatherCard {
  constructor(cityName, temperature, weatherIcon, weatherStatus, pressure, sunrise, sunset, windSpeed, windDirection) {
    this.cityName = cityName;
    this.temperature = temperature;
    this.weatherIcon = weatherIcon;
    this.weatherStatus = weatherStatus;
    this.pressure = pressure;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.windSpeed = windSpeed;
    this.windDirection = windDirection;
  }

  createCardElement() {
    const card = document.createElement('div');
    card.classList.add('weather-card');

    const cityNameElement = document.createElement('h2');
    cityNameElement.textContent = this.cityName;

    let temperatureElement = document.createElement('p');
    temperatureElement.innerHTML = `Temperature: ${this.temperature} &deg;C`;
    temperatureElement.classList.add('block_weather');

    const weatherIconElement = document.createElement('img');
    weatherIconElement.src = `http://openweathermap.org/img/wn/${this.weatherIcon}@2x.png`;

    const weatherStatusElement = document.createElement('h3');
    weatherStatusElement.innerHTML = this.weatherStatus;

    const pressureElement = document.createElement('p');
    pressureElement.innerHTML = `Pressure ${this.pressure} mm Hg`;

    const sunriseElement = document.createElement('p');
    sunriseElement.innerHTML = `Sunrise: ${this.convertUnixTimestampToTime(this.sunrise)}`;

    const sunsetElement = document.createElement('p');
    sunsetElement.innerHTML = `Sunset: ${this.convertUnixTimestampToTime(this.sunset)}`;

    const windSpeedElement = document.createElement('p');
    windSpeedElement.innerHTML = `Wind Speed: ${this.windSpeed} m/s`;

    const windDirectionElement = document.createElement('p');
    windDirectionElement.innerHTML = `Wind Direction: ${this.directionOfWind(this.windDirection)}`;

    card.appendChild(cityNameElement);
    card.appendChild(temperatureElement);
    card.appendChild(weatherIconElement);
    card.appendChild(weatherStatusElement);
    card.appendChild(pressureElement);
    card.appendChild(sunriseElement);
    card.appendChild(sunsetElement);
    card.appendChild(windSpeedElement);
    card.appendChild(windDirectionElement);

    return card;
  }

  convertUnixTimestampToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    if (hours <= 12) { return `${hours}:${minutes} am`; }
    return `${hours}:${minutes} pm`;
  }

  directionOfWind(degree) {
    if (degree > 337.5) { return 'Northern'; }
    else if (degree > 292.5) { return 'Northwest'; }
    else if (degree > 247.5) { return 'West'; }
    else if (degree > 202.5) { return 'Southwest'; }
    else if (degree > 157.5) { return 'Southern'; }
    else if (degree > 122.5) { return 'Southeast'; }
    else if (degree > 67.5) { return 'Eastern'; }
    else if (degree > 22.5) { return 'Northeast'; }
    else { return 'Northern'; }
  }
}


const weatherApp = new WeatherApp(apiKey, cities, weatherBlock);
weatherApp.displayWeatherData();