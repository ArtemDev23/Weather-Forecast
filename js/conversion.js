// // конвертація значення направлення вітру
// const directionOfwWind = (degree) => {
//     if (degree > 337.5) { return 'northern' };
//     if (degree > 292.5) { return 'northwest' };
//     if (degree > 247.5) { return 'west' };
//     if (degree > 202.5) { return 'southwest' };
//     if (degree > 157.5) { return 'southern' };
//     if (degree > 122.5) { return 'southeast' };
//     if (degree > 67.5) { return 'eastern' };
//     if (degree > 22.5) { return 'northeast' }
//     return 'northern';
// }

// // конвертація значення в часи і хвилини
// function convertUnixTimestampToTime(unixTimestamp) {
//     const date = new Date(unixTimestamp * 1000); // Множимо на 1000, оскільки в JavaScript використовується мілісекунди    
//     const hours = date.getHours().toString().padStart(2, '0'); // Отримуємо години з ведучими нулями   
//     const minutes = date.getMinutes().toString().padStart(2, '0'); // Отримуємо хвилини з ведучими нулями    
//     // return `${hours}:${minutes}`;
//     if (hours <= 12) {
//         return `${hours}:${minutes} am`;
//     } else 
//     return `${hours}:${minutes} pm`;

// }

// class WeatherConverter {
//     convertWindDirection(degree) {
//       if (degree > 337.5) { return 'northern' };
//       if (degree > 292.5) { return 'northwest' };
//       if (degree > 247.5) { return 'west' };
//       if (degree > 202.5) { return 'southwest' };
//       if (degree > 157.5) { return 'southern' };
//       if (degree > 122.5) { return 'southeast' };
//       if (degree > 67.5) { return 'eastern' };
//       if (degree > 22.5) { return 'northeast' }
//       return 'northern';
//     }
  
//     convertUnixTimestampToTime(unixTimestamp) {
//       const date = new Date(unixTimestamp * 1000);
//       const hours = date.getHours().toString().padStart(2, '0');
//       const minutes = date.getMinutes().toString().padStart(2, '0');
  
//       if (hours <= 12) {
//         return `${hours}:${minutes} am`;
//       }
//       return `${hours}:${minutes} pm`;
//     }
//   }

// export default WeatherConverter;