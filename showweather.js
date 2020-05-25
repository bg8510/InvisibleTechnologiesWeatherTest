function showWeather(cities) {
    //const cities = document.getElementById("citiesText").innerText
    var xhttp = new XMLHttpRequest();
    var apiKey = 'ce6afba319ef13d82791a0ae2b332982';
    alert("showWeather function has been triggered");
    for (var i in cities) {
        var apiString = "api.openweathermap.org/data/2.5/weather?id={" + cities[i] + "}& appid={" + apiKey + "}".trim();
        xhttp.open("GET", apiString, true);
        xhttp.send();
    }
    console.log("The time is: " + new Date().toUTCString());
}
//# sourceMappingURL=showweather.js.map