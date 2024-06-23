var humidity = document.getElementById('humidity');
var windSpeed = document.getElementById('wind-speed');
var weatherDes = document.getElementById('weather-description');
var locationElem = document.getElementById('location');
var input = document.getElementById('location-input');
var locationForm = document.getElementById('location-form');
var temp = document.getElementById('temperature');
var weatherIcon = document.getElementById('weather-icon');
async function weatherApp(locationName) {
    try {
        const api = '3bbb078204ad38b865bdadacdc5ece4f';
        
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${api}&units=metric`;
         var responce = await fetch(url);
         var data = await responce.json();
         console.log(data);

         windSpeed.innerHTML=`Wind Speed : ${data.wind.speed} Km/h`;
         locationElem.innerHTML = data.name;
         humidity.innerHTML = `humidity : ${data.main.humidity}%`;
         weatherDes.innerHTML = data.weather[0].description;
         temp.innerHTML = `${data.main.temp}°C `;
         weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
         
 
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
locationForm.addEventListener("submit", (e)=>{
e.preventDefault();
const locationName = input.value;
weatherApp(locationName);
});

 
