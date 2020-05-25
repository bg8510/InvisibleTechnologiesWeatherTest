class Weather {
  element: HTMLElement
  span: HTMLElement
 
  constructor() {
    //this.element = element
    //this.element.innerHTML += "The time is: "
    //this.span = document.createElement("span")
    //this.element.appendChild(this.span)
    //this.span.innerText = new Date().toUTCString()

    function buttonWasClicked () {

      const cities = document.getElementById("citiesText").innerText.split(',')
      for (let i = 0; i < cities.length; i++) {

        if (!isNaN(+cities[i])) {

          cities[i - 1].concat(',', cities[i])
          cities.splice(i, 1)

        }
      }

      showWeather(cities)
    }
  }
}

window.onload = () => {

  document.getElementById("citiesText").innerText = 'Mountain View, Tahlequah, New Orleans, 70118, Mos Eisley'
}
