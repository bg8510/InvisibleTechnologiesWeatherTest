var Weather = /** @class */ (function () {
    function Weather() {
        //this.element = element
        //this.element.innerHTML += "The time is: "
        //this.span = document.createElement("span")
        //this.element.appendChild(this.span)
        //this.span.innerText = new Date().toUTCString()
        function buttonWasClicked() {
            var cities = document.getElementById("citiesText").innerText.split(',');
            for (var i = 0; i < cities.length; i++) {
                if (!isNaN(+cities[i])) {
                    cities[i - 1].concat(',', cities[i]);
                    cities.splice(i, 1);
                }
            }
            showWeather(cities);
        }
    }
    return Weather;
}());
window.onload = function () {
    document.getElementById("citiesText").innerText = 'Mountain View, Tahlequah, New Orleans, 70118, Mos Eisley';
};
//# sourceMappingURL=main.js.map