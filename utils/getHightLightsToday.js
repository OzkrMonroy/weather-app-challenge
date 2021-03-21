const getHightLightsToday = (initialState, weatherData) => {
	const { humidity, wind_speed, wind_deg, visibility, pressure } = weatherData.current;

	initialState.hightlightsToday[0].data = wind_speed;
	initialState.hightlightsToday[0].windDir = wind_deg;
	initialState.hightlightsToday[1].data = humidity;
	initialState.hightlightsToday[2].data = visibility;
	initialState.hightlightsToday[3].data = pressure;

  return initialState.hightlightsToday;
};

export default getHightLightsToday;