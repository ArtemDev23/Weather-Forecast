// Функція для перемикання одиниць температури
// const unitsC = document.querySelector('#unitsC');
// const unitsF = document.querySelector('#unitsF');
// let isCelsius = true; // початково встановлено на градуси Цельсія

// unitsC.addEventListener('click', () => {
//     if (!isCelsius) {
//         isCelsius = true;
//         unitsC.classList.add('unit-current');
//         unitsF.classList.remove('unit-current');

//         const temperatureElements = document.querySelectorAll('.weather-card p:nth-child(2)');
//         temperatureElements.forEach((element) => {
//             const currentTemp = parseInt(element.innerHTML.replace('Temperature: ', '').replace(' &deg;C', ''));
//             const convertedTemp = fToC(currentTemp);
//             element.textContent = `Temperature: ${Math.round(convertedTemp)}°C`;
//         });
//     }
// });

// unitsF.addEventListener('click', () => {
//     if (isCelsius) {
//         isCelsius = false;
//         unitsF.classList.add('unit-current');
//         unitsC.classList.remove('unit-current');

//         const temperatureElements = document.querySelectorAll('.weather-card p:nth-child(2)');
//         temperatureElements.forEach((element) => {
//             const currentTemp = parseInt(element.innerHTML.replace('Temperature: ', '').replace(' &deg;F', ''));
//             const convertedTemp = cToF(currentTemp);
//             element.textContent = `Temperature: ${Math.round(convertedTemp)}°F`;
//         });
//     }
// });

// const cToF = (celsius) => {
//     return (celsius * 9 / 5) + 32;
// };

// const fToC = (fahrenheit) => {
//     return (fahrenheit - 32) * 5 / 9;
// };


// Рефакторинг за допомогою класу
// class TemperatureConverter {
//     constructor() {
//       this.unitsC = document.querySelector('#unitsC');
//       this.unitsF = document.querySelector('#unitsF');
//       this.isCelsius = true;
  
//       this.unitsC.addEventListener('click', () => {
//         this.convertToCelsius();
//       });
  
//       this.unitsF.addEventListener('click', () => {
//         this.convertToFahrenheit();
//       });
//     }
  
//     convertToCelsius() {
//       if (!this.isCelsius) {
//         this.isCelsius = true;
//         this.unitsC.classList.add('unit-current');
//         this.unitsF.classList.remove('unit-current');
//         this.updateTemperature('.weather-card p:nth-child(2)', this.fToC);
//       }
//     }
  
//     convertToFahrenheit() {
//       if (this.isCelsius) {
//         this.isCelsius = false;
//         this.unitsF.classList.add('unit-current');
//         this.unitsC.classList.remove('unit-current');
//         this.updateTemperature('.weather-card p:nth-child(2)', this.cToF);
//       }
//     }
  
//     updateTemperature(selector, conversionFn) {
//       const temperatureElements = document.querySelectorAll(selector);
//       temperatureElements.forEach((element) => {
//         const currentTemp = parseInt(element.innerHTML.replace('Temperature: ', '').replace(' &deg;', ''));
//         const convertedTemp = conversionFn.call(this, currentTemp);
//         const temperatureUnit = this.isCelsius ? '°C' : ' F';
//         element.innerHTML = `Temperature: ${Math.round(convertedTemp)}${temperatureUnit}`;
//       });
//     }
  
//     cToF(celsius) {
//       return celsius * 9 / 5 + 32;
//     }
  
//     fToC(fahrenheit) {
//       return (fahrenheit - 32) * 5 / 9;
//     }
//   }
  