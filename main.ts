function buttonWasClicked() {
      
  const cities: string[] = document.getElementById('citiesText').innerHTML.split(',')

  //for (let i = 0; i < cities.length; i++) {

  //  if (!isNaN(+cities[i])) {

  //    console.log(i + "  " + cities[i])
  //    cities.splice(i, 1, cities[i].trim())

  //    cities[i - 1] = cities[i - 1] + ',' + cities[i]
  //    cities.splice(i, 1)
  //  }
  //}
  showWeather(cities)
}


window.onload = () => {
  document.getElementById("citiesText").innerText = 'Mountain View, Tahlequah, New Orleans, 69138, Mos Eisley'
}
