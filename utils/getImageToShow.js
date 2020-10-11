const getImageToShow = (imageName) => {
  const Hail = "Hail.png";
  const Clear = "Clear.png";
  const LightRain = "LightRain.png";
  const HeavyCloud = "HeavyCloud.png";
  const Thunderstorm = "Thunderstorm.png";
  const LightCloud = "LightCloud.png";
  const HeavyRain = "HeavyRain.png";
  const Shower = "Shower.png";
  const Sleet = "Sleet.png";
  const Snow = "Snow.png";
  

  switch (imageName) {
    case "clear.png":
    case "clearn.png":
    case "fair.png":
    case "fairn.png":
    case "hazy.png":
    case "hazyn.png":
    case "hot.png":
    case "sunny.png":
    case "sunnyn.png":
      return Clear
    
    case "freezingrain.png":
    case "freezingrainn.png":
      return Hail
    
    case "blowingsnow.png":
    case "blowingsnown.png":
    case "cloudy.png":
    case "cloudyn.png":
    case "cloudyw.png":
    case "cloudywn.png":
    case "dust.png":
    case "dustn.png":
    case "flurries.png":
    case "flurriesn.png":
    case "flurriesw.png":
    case "flurrieswn.png":
    case "fog.png":
    case "fogn.png":
    case "smoke.png":
    case "smoken.png":
    case "wind.png":
    case "windn.png":
      return HeavyCloud

    case "rain.png":
    case "rainn.png":
    case "rainw.png":
    case "rainwn.png":
      return HeavyRain
    
    case "sunnyw.png":
    case "sunnywn.png":
    case "pcloudyw.png":
    case "pcloudywn.png":
    case "pcloudysw.png":
    case "pcloudyswn.png":
    case "pcloudysfw.png":
    case "pcloudysfwn.png":
    case "pcloudysf.png":
    case "pcloudysfn.png":
    case "pcloudy.png":
    case "pcloudyn.png":
    case "mcloudyw.png":
    case "mcloudywn.png":
    case "mcloudytw.png":
    case "mcloudytwn.png":
    case "mcloudysw.png,":
    case "mcloudyswn.png":
    case "mcloudysfw.png":
    case "mcloudysfwn.png":
    case "mcloudysf.png":
    case "mcloudysfn.png":
    case "mcloudyrw.png":
    case "mcloudyrwn.png":
    case "mcloudy.png":
    case "mcloudyn.png":
      return LightCloud

    case "drizzle.png":
    case "drizzlen.png":
    case "drizzlef.png":
    case "drizzlefn.png":
    case "showers.png":
    case "showersn.png":
    case "showersw.png":
    case "showerswn.png":
      return LightRain
  
    case "mcloudyr.png":
    case "mcloudyrn.png":
    case "mcloudys.png":
    case "mcloudysn.png":
    case "mcloudyt.png":
    case "mcloudytn.png":
    case "pcloudyr.png":
    case "pcloudyrn.png":
    case "pcloudys.png":
    case "pcloudysn.png":
    case "pcloudyt.png":
    case "pcloudytn.png":
    case "pcloudytw.png":
    case "pcloudytwn.png":
      return Shower

    case "freezingrain.png":
    case "freezingrainn.png":
    case "rainandsnow.png":
    case "rainandsnown.png":
    case "raintosnow.png":
    case "raintosnown.png":
    case "showersw.png":
    case "showerswn.png":
    case "sleet.png":
    case "sleetn.png":
    case "sleetsnow.png":
    case "sleetsnown.png":
    case "snowtorain.png":
    case "snowtorainn.png":
      return Sleet

    case "cold.png":
    case "coldn.png":
    case "snow.png":
    case "snown.png":
    case "snoww.png":
    case "snowwn.png":
    case "snowshowers.png":
    case "snowshowersn.png":
    case "snowshowersw.png":
    case "snowshowerswn.png":
      return Snow

    case "tstorm.png":
    case "tstormn.png":
    case "tstorms.png":
    case "tstormsn.png":
    case "tstormsw.png":
    case "tstormswn.png":
    case "wintrymix.png":
    case "wintrymixn.png":
      return Thunderstorm
    
    default:
      return Clear
  }
}

export default getImageToShow