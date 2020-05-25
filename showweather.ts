function showWeather(cities: string[]) {

  //const cities = document.getElementById("citiesText").innerText
  const xhttp = new XMLHttpRequest()
  const apiKey: string = 'ce6afba319ef13d82791a0ae2b332982'

  alert("showWeather function has been triggered");

  for (let i in cities){
    const apiString: string = "api.openweathermap.org/data/2.5/weather?id={" + cities[i] + "}& appid={" + apiKey + "}".trim()

    xhttp.open("GET", apiString, true);
    xhttp.send()
  }

  console.log
    ("The time is: " + new Date().toUTCString())

}
