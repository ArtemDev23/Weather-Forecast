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
  