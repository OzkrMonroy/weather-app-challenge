const { initialErrorState } = require("./initialState");

const getWeatherDataByUserLocation = (callback, handleError) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      callback(position.coords.latitude, position.coords.longitude);
    },
    (error) => {
      handleError({
        status: true,
        message: error.message
      })
      setTimeout(() => {
        handleError(initialErrorState)
      }, 3000);
    }
  );
}

export default getWeatherDataByUserLocation