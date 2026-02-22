
// const apiKey = '890d8dcc3a39a764375ea4aac7e475e9';
// const city = 'Rajkot';
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// fetch(url).then(response => {
//     if(!response.ok) {
//         throw new Error('city not found');
//     }
//     return response.json();
// })
// .then(data => {
//     console.log("City: " + data.name);
//     console.log("Humidity: " + data.main.humidity);
//     console.log("Temperature: " + data.main.temp);
// }).catch(error => {
//     console.error('Error:', error.message);
// });