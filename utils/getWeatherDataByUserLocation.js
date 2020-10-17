const { initialErrorState } = require("./initialState");

const getWeatherDataByUserLocation = (getWeatherDataFunction, errorHandler, forceSearch = false) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      getWeatherDataFunction(position.coords.latitude, position.coords.longitude);
    },
    (error) => {
      if(forceSearch){
        getWeatherDataFunction();
      }
      errorHandler({
        status: true,
        message: error.message
      })
      setTimeout(() => {
        errorHandler(initialErrorState)
      }, 3000);
    }
  );
}

export default getWeatherDataByUserLocation