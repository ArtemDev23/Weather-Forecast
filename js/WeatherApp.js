class WeatherApp {
    constructor(apiKey, cities, weatherBlock) {
      this.apiKey = apiKey;
      this.cities = cities;
      this.weatherBlock = weatherBlock;
      this.isCelsius = true;   
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
    
  }