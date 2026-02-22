"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cityInput = document.getElementById("ip1");
const btn = document.getElementById("btn");
const resultDiv = document.getElementById("result");
const apiKey = "890d8dcc3a39a764375ea4aac7e475e9";
function getWeather(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const city = cityInput.value.trim();
        if (city === "") {
            alert("please enter a city");
            return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const data = yield response.json();
            resultDiv.innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
        }
        catch (error) {
            resultDiv.innerHTML = `<p>city or api is not proper</p>`;
        }
    });
}
btn.addEventListener("click", getWeather);
