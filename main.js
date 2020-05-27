function buttonWasClicked() {
    var cities = document.getElementById('citiesText').value.split(',');
    showWeather(cities);
}
window.onload = function () {
    document.getElementById('citiesText').value = 'Mountain View, Tahlequah, Mos Eisley, 69138, New Orleans';
};
//# sourceMappingURL=main.js.map