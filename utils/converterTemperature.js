export const kelvinToFahrenheitAndCelcius = kelvin => {
  const tempF = 1.8*(kelvin - 273.15) + 32;
  const tempC = kelvin - 273;

  return {
    tempF: tempF.toFixed(),
    tempC: tempC.toFixed()
  }
}