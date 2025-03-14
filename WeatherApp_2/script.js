const button = document.querySelector("#search-btn");
const userInput = document.querySelector("#user-input");

const cityName = document.getElementById("location");
const citytime = document.getElementById("city-time");
const citytemp = document.getElementById("city-temp");


async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=7001888bc2fd429ab96155930251203&q=${cityName}&aqi=yes`);

    return await promise.json();
}


button.addEventListener("click", async () => {
    const value = userInput.value;
    const result = await getData(value);


    cityName.innerHTML = ` City Name : ${result.location.name}, ${result.location.country}`;
    citytime.innerHTML = `Time : ${result.location.localtime}`;
    citytemp.innerHTML = ` Temperature : ${result.current.temp_c}°C`;

    userInput.value = '';

})