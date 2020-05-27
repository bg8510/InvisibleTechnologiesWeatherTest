function buttonWasClicked() {

  const cities: string[] = (<HTMLInputElement>document.getElementById('citiesText')).value.split(',')

  showWeather(cities)
}


window.onload = () => {
  (<HTMLInputElement>document.getElementById('citiesText')).value = 'Mountain View, Tahlequah, Mos Eisley, 69138, New Orleans'
}
