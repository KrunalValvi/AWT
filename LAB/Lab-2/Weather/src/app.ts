interface weatherData{
    main:{
        temp:number;
        humidity:number;
    },
    weather:{
        description:string;
    }[]
}


const cityInput = document.getElementById("ip1") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

const apiKey:string = "890d8dcc3a39a764375ea4aac7e475e9";

async function getWeather(event: Event): Promise <void> {
    event.preventDefault();

    const city:string = cityInput.value.trim();
    if(city==="")
    {
        alert("please enter a city");
        return;
    }
    const url:string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try{
        const response: Response = await fetch(url);
        if(!response.ok){
            throw new Error("City not found");
        }
        const data: weatherData = await response.json();
        resultDiv.innerHTML = `
            <h2>Weather in ${city}</h2>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Description: ${data.weather[0].description}</p>
        `;
    }
    catch(error)
    {
        resultDiv.innerHTML = `<p>city or api is not proper</p>`;
    }
}

btn.addEventListener("click",getWeather);