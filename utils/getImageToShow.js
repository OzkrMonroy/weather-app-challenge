const getImageToShow = (imageName) => {
  const Clear = "Clear.png";
  const HeavyCloud = "HeavyCloud.png";
  const Thunderstorm = "Thunderstorm.png";
  const LightCloud = "LightCloud.png";
  const HeavyRain = "HeavyRain.png";
  const Shower = "Shower.png";
  const Snow = "Snow.png";
  

  switch (imageName) {
    case "01d":
    case "01n":
      return Clear
    
    case "50d":
    case "50n":
      return HeavyCloud

    case "09d":
    case "09n":
      return HeavyRain
    
    case "02d":
    case "02n":
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      return LightCloud
  
    case "10d":
    case "10n":
      return Shower

    case "13d":
    case "13n":
      return Snow

    case "11d":
    case "11n":
      return Thunderstorm
    
    default:
      return Clear
  }
}

export default getImageToShow