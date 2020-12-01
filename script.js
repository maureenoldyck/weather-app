(() => {

    "use strict";

    // Declaration of variables 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];




    // Event listener to get input value, create the api link and fetch the data
    document.querySelector("#run").addEventListener("click", () => {
        event.preventDefault();
        const cityName = document.querySelector("#city").value;
        const weatherToday = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=be4553b34e49d94c654cc1c6eb775c17";
        const weatherForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=metric&appid=be4553b34e49d94c654cc1c6eb775c17";


        // Weather Today / Now
        fetch(weatherToday)
            .then(
                ((response) => {
                    response.json().then((weatherInfo => {
                        let template = document.querySelector("#weather-card");
                        let target = document.querySelector("#target");
                        let weatherData = template.content.cloneNode(true);
                        weatherData.querySelector(".temperature").innerHTML = Math.round(weatherInfo.main.temp) + "°C";
                        weatherData.querySelector(".city-name").innerHTML = weatherInfo.name;
                        weatherData.querySelector(".description").innerHTML = weatherInfo.weather[0].main;
                        weatherData.querySelector(".highest").innerHTML = Math.round(weatherInfo.main.temp_max) + "°C";
                        weatherData.querySelector(".lowest").innerHTML = Math.round(weatherInfo.main.temp_min) + "°C";
                        weatherData.querySelector(".details").innerHTML = weatherInfo.weather[0].description;
                        target.appendChild(weatherData);
                    }));

                })

            );;

        // Weather next 5 days 
        fetch(weatherForecast)
            .then(
                ((response) => {
                    response.json().then((weatherInfo => {
                        let template = document.querySelector("#weather-card");
                        let target = document.querySelector("#target");
                        let weatherData = template.content.cloneNode(true);
                        weatherData.querySelector(".tomorrow").innerHTML = days[(new Date(weatherInfo.list[8].dt_txt)).getDay()];
                        // Using list[8] gives me the temperature of that date at 12:00 PM, to get the temp for the same hour each day add 8 (except day 5 will be the temp of 09:00 AM) 
                        weatherData.querySelector(".tomorrowTemperature").innerHTML = Math.round(weatherInfo.list[8].main.temp) + "°C";
                        // Using the dt_text to get the day of the week
                        weatherData.querySelector(".dayAfterTomorrow").innerHTML = days[(new Date(weatherInfo.list[16].dt_txt)).getDay()];
                        weatherData.querySelector(".dayAfterTomorrowTemperature").innerHTML = Math.round(weatherInfo.list[16].main.temp) + "°C";
                        weatherData.querySelector(".inThreeDays").innerHTML = days[(new Date(weatherInfo.list[24].dt_txt)).getDay()];
                        weatherData.querySelector(".inThreeDaysTemperature").innerHTML = Math.round(weatherInfo.list[24].main.temp) + "°C";
                        weatherData.querySelector(".inFourDays").innerHTML = days[(new Date(weatherInfo.list[32].dt_txt)).getDay()];
                        weatherData.querySelector(".inFourDaysTemperature").innerHTML = Math.round(weatherInfo.list[32].main.temp) + "°C";
                        weatherData.querySelector(".inFiveDays").innerHTML = days[(new Date(weatherInfo.list[39].dt_txt)).getDay()];
                        weatherData.querySelector(".inFiveDaysTemperature").innerHTML = Math.round(weatherInfo.list[39].main.temp) + "°C";

                        target.appendChild(weatherData);

                    }));

                })

            );;

    });

    // Collapsible header function
    document.querySelector(".collapsButton").addEventListener("click", () => {
        document.querySelector(".collapsButton").classList.toggle("collapsButton--active");
        const content = document.querySelector(".collapsButton").nextElementSibling;
        if (document.querySelector(".collapsButton").classList.contains("collapsButton--active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0; 
        }
    });



})();