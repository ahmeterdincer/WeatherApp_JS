const temp = document.getElementById("temperature");
const iconDiv = document.getElementById("icon");
const cityInput = document.getElementById("cityInput");
const weatherForm = document.getElementById("weatherForm");
const details = document.getElementById("details");
const description = document.getElementById("description");


async function getWeather() {// şehirleri ayarlama
    try {
        const apiKey = "";
        const city = cityInput.value.trim();
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        iconDiv.innerHTML = `<img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png>`;
        temp.textContent = `${data.main.temp} °C`;
        details.innerHTML = `<p>Hissedilen :<span> ${data.main.feels_like} °C</span></p> <p>Nem Oranı : <span>${data.main.humidity} %</span></p> 
        <p>Rüzgar : <span>${data.wind.speed} m/s</span></p>`;
        description.textContent = '';
    }
    catch (error) {
        console.error("Hata:", error);
        temp.textContent = '';
        iconDiv.innerHTML = '';
        details.innerHTML = '';
        description.textContent = 'Şehir bulunamadı. Lütfen geçerli bir şehir adı girin.';
    }
}
weatherForm.addEventListener('submit', (event) => {
    event.preventDefault();
    getWeather();
});
