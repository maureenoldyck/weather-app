(() => {

    "use strict";

    // Declaration of variables 
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const content = document.querySelector(".collapsButton").nextElementSibling;




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
                        document.querySelector(".temperature").innerHTML = Math.round(weatherInfo.main.temp) + "°C";
                        document.querySelector(".city-name").innerHTML = weatherInfo.name;
                        document.querySelector(".description").innerHTML = weatherInfo.weather[0].main;
                        document.querySelector(".highest").innerHTML = Math.round(weatherInfo.main.temp_max) + "°C";
                        document.querySelector(".lowest").innerHTML = Math.round(weatherInfo.main.temp_min) + "°C";
                        document.querySelector(".details").innerHTML = weatherInfo.weather[0].description;
                    }));

                })

            );;

        // Weather next 5 days 
        fetch(weatherForecast)
            .then(
                ((response) => {
                    response.json().then((weatherInfo => {
                        document.querySelector(".tomorrow").innerHTML = days[(new Date(weatherInfo.list[8].dt_txt)).getDay()];
                        // Using list[8] gives me the temperature of that date at 12:00 PM, to get the temp for the same hour each day add 8 (except day 5 will be the temp of 09:00 AM) 
                        document.querySelector(".tomorrowTemperature").innerHTML = Math.round(weatherInfo.list[8].main.temp) + "°C";
                        // Using the dt_text to get the day of the week
                        document.querySelector(".dayAfterTomorrow").innerHTML = days[(new Date(weatherInfo.list[16].dt_txt)).getDay()];
                        document.querySelector(".dayAfterTomorrowTemperature").innerHTML = Math.round(weatherInfo.list[16].main.temp) + "°C";
                        document.querySelector(".inThreeDays").innerHTML = days[(new Date(weatherInfo.list[24].dt_txt)).getDay()];
                        document.querySelector(".inThreeDaysTemperature").innerHTML = Math.round(weatherInfo.list[24].main.temp) + "°C";
                        document.querySelector(".inFourDays").innerHTML = days[(new Date(weatherInfo.list[32].dt_txt)).getDay()];
                        document.querySelector(".inFourDaysTemperature").innerHTML = Math.round(weatherInfo.list[32].main.temp) + "°C";
                        document.querySelector(".inFiveDays").innerHTML = days[(new Date(weatherInfo.list[39].dt_txt)).getDay()];
                        document.querySelector(".inFiveDaysTemperature").innerHTML = Math.round(weatherInfo.list[39].main.temp) + "°C";
                    }));

                })

            );;

        content.style.maxHeight = 0;

    });

    // Collapsible header function

    document.querySelector(".collapsButton").addEventListener("click", () => {
        document.querySelector(".collapsButton").classList.toggle("collapsButton--active");
        if (document.querySelector(".collapsButton").classList.contains("collapsButton--active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }
    });



})();