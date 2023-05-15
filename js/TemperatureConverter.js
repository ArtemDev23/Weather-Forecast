class TemperatureConverter {
    constructor() {
      this.unitsC = document.querySelector('#unitsC');
      this.unitsF = document.querySelector('#unitsF');
      this.isCelsius = true;
  
      this.unitsC.addEventListener('click', () => {
        this.convertToCelsius();
      });
  
      this.unitsF.addEventListener('click', () => {
        this.convertToFahrenheit();
      });
    }
  
    convertToCelsius() {
      if (!this.isCelsius) {
        this.isCelsius = true;
        this.unitsC.classList.add('unit-current');
        this.unitsF.classList.remove('unit-current');
        this.updateTemperature('.weather-card p:nth-child(2)', this.fToC);
      }
    }
  
    convertToFahrenheit() {
      if (this.isCelsius) {
        this.isCelsius = false;
        this.unitsF.classList.add('unit-current');
        this.unitsC.classList.remove('unit-current');
        this.updateTemperature('.weather-card p:nth-child(2)', this.cToF);
      }
    }
  
    updateTemperature(selector, conversionFn) {
      const temperatureElements = document.querySelectorAll(selector);
      temperatureElements.forEach((element) => {
        const currentTemp = parseInt(element.innerHTML.replace('Temperature: ', '').replace(' &deg;', ''));
        const convertedTemp = conversionFn.call(this, currentTemp);
        const temperatureUnit = this.isCelsius ? '°C' : ' F';
        element.innerHTML = `Temperature: ${Math.round(convertedTemp)}${temperatureUnit}`;
      });
    }
  
    cToF(celsius) {
      return celsius * 9 / 5 + 32;
    }
  
    fToC(fahrenheit) {
      return (fahrenheit - 32) * 5 / 9;
    }
  }