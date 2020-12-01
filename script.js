// TODO: capture handle submit of city weather and enter

(() => {

    "use strict";

    // Declaration of variables 



    // Event listener to get input value, create the api link and fetch the data
    document.querySelector("#run").addEventListener("click", () => {
        event.preventDefault();
        const cityName = document.querySelector("#city").value;
        const apiLink = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=be4553b34e49d94c654cc1c6eb775c17";


        // API from open weather map 
        fetch(apiLink)
            .then(
                ((response) => {

                    response.json().then((weatherInfo => {
                            let template = document.querySelector("#weather-card");
                            let target = document.querySelector("#target");
                            let weatherData = template.content.cloneNode(true);
                            weatherData.querySelector(".temperature").innerHTML = weatherInfo.main.temp;
                            weatherData.querySelector(".city-name").innerHTML = weatherInfo.name;
                            weatherData.querySelector(".description").innerHTML = weatherInfo.weather.main;
                            weatherData.querySelector(".highest").innerHTML = weatherInfo.main.temp_max;
                            weatherData.querySelector(".lowest").innerHTML = weatherInfo.main.temp_min;
                            weatherData.querySelector(".details").innerHTML = weatherInfo.weather.description;
                            target.appendChild(weatherData);



                    }));



                })

            );
        ;
    });


})();