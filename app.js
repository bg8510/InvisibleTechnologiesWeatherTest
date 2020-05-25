var Weather = /** @class */ (function () {
    function Weather() {
        //this.element = element
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
        document.getElementById("getWeatherButton").onclick = function () {
            var cities = ["Mountain View", "Tahlequah", "Mos Eisley", "New Orleans, 70118"];
            alert("I'm about to call the external function");
            showWeather(cities);
        };
    }
    return Weather;
}());
window.onload = function () {
    //const el = document.getElementById("content")
    var weather = new Weather();
};
//# sourceMappingURL=app.js.map