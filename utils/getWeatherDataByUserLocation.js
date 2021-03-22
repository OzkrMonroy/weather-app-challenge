import { initialErrorState } from './initialState';

const getWeatherDataByUserLocation = (getWeatherDataObj, errorHandler, forceSearch = false) => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      getWeatherDataObj.byCoords(position.coords.latitude, position.coords.longitude);
    },
    (error) => {
      if(forceSearch){
        getWeatherDataObj.byName();
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