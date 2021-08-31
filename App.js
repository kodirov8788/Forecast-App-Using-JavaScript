const API_KEY = "d36ba0536e0a47478f092725211707";
const ApiLink = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=dushanbe&days=7&aqi=yes&alerts=yes`;
const general_location = document.querySelector('.general_location-time');
const localTime = document.querySelector('.local_time');
const weatherlocal = document.querySelector('.weather__location');
const primery__content = document.querySelector('.primary__content');
const long = document.querySelector('.long');
const lat = document.querySelector('.lat');
const reg = document.querySelector('.reg');
const celsus = document.querySelector('.in__celsus');
const kalvin = document.querySelector('.in__kalvin');
const fairyWeather = document.querySelector('.fairy__weather');
const darker__weather = document.querySelector('.darker__weather');
const sunny__weather = document.querySelector('.sunny__weather');



async function loadApiData() {
    const apiData = await fetch(ApiLink);
    const apiObject = apiData.json();
    // console.log(apiObject);
    apiObject.then(data => showData(data));
}




function showData(data) {
    console.log(data);
    const img = document.createElement('img');
    img.setAttribute('src', "https://" + data.current.condition.icon);
    primery__content.appendChild(img);
    long.innerHTML = data.location.lon;
    lat.innerHTML = data.location.lat;
    reg.innerHTML = data.location.region;
    general_location.innerHTML = data.location.name + "," + data.location.country;
    localTime.innerHTML = data.current.last_updated;
    weatherlocal.innerHTML = data.location.name;
    celsus.innerHTML = data.current.temp_c;
    kalvin.innerHTML = data.current.temp_f;

    if (data.current.condition.text   == "Sunny") {
        fairyWeather.style.display = 'flex';
    } else
    if (data.current.condition.text == "Partly cloudy") {
        fairyWeather.style.display = 'none';
        sunny__weather.style.display = 'flex';

    } else if (data.current.condition.text == "Sunny") {
        fairyWeather.style.display = 'none';
    }

}