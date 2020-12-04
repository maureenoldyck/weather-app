# Weather App 🌤

For this exercise we had to create a weather app. We had to use our recent gained knowledge about API's to fetch weather data of an user entered city. It was a fun challenge that made us prepared on which clothes to wear in the coming days.

<br>

## ☔  Tools used 
- Visual Studio Code 
- Languages: HTML, CSS, JS, JSON
- Chart.JS
- Markdown
- Google, our best friend
- Flaticon.com, for icons
- Fontawesome for icons
- OpenWeather for API
- Google Fonts
- Blood, sweat and tears


## ⚡️ Mission Objectives
In this challenge you will use and consolidate your knowledge on:

* A typical AJAX flow: send asynchronous requests to a remote server and process the results
* DOM manipulation: changing the DOM based on the results of the AJAX requests
* Learn to aggregate and parse data fetched from an api


## 🌞 Must Have Features 
* In the home page the user can enter the city of his/her choice (think of the right HTML elements here)
* On clicking the SUBMIT button or pressing ENTER the application will display the weather for the next 5 days
* The application must be responsive and mobile friendly
  

##  🌈 Result 
### - [Weather App](https://maureenoldyck.github.io/weather-app/ "weather-app")
 

  
## 🐞 Bugs in my app

- The graph shows the hours where the user is located, not where the searched city is located. (Nothing I can change about this at the moment as this is how I get the data from the openWeather API).
- When the user allows the location, location is seen as "Current Location" instead of the city name. As well the chart and quote are not working for the user location, only when you search location.
- When loading new locations, the chart data of the previous location is remembered. I tried removing the data with destroy(), however this changed my layout. So, for now I kept the bug. 