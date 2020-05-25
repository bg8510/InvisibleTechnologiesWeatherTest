﻿function convertTempFromKtoF(kTemp: number) {

  const kelvinConversionFactor = 273.15
  const fTemp: number = (((Number(kTemp) - kelvinConversionFactor) * 9) / 5) + 32

  return fTemp
}

async function showWeather(cities: string[]) {

  const apiKey: string = 'ce6afba319ef13d82791a0ae2b332982'
  var response

  for (let i = 0; i < cities.length; i++)  {

    if (isNaN(+cities[i])) {
      const apiStringByName = 'https://api.openweathermap.org/data/2.5/weather?q=' + cities[i] + '&appid=' + apiKey
      response = await fetch(apiStringByName)
    }
    else {
      const apiStringByZip = 'https://api.openweathermap.org/data/2.5/weather?zip=' + cities[i].trim() + '&appid=' + apiKey
      response = await fetch(apiStringByZip)
    }

    const weatherData = await response.json()
    const tempInF = convertTempFromKtoF(weatherData.main.temp)

    console.log(weatherData)
    console.log('Time: ' + new Date().toUTCString() + '\t City: ' + weatherData.name + '\t Current temperature: ' + tempInF.toFixed(0) + '\t Weather: ' + weatherData.weather[0].description)

  }

  return 0
    
}
