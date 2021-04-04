const getHightLightsToday = (initialState, weatherData) => {
	const { humidity, wind_speed, wind_deg, visibility, pressure } = weatherData.current;
	console.log(wind_deg);
	const directionText = getWindDirection(wind_deg);

	initialState.hightlightsToday[0].data = wind_speed;
	initialState.hightlightsToday[0].windDir = wind_deg;
	initialState.hightlightsToday[0].windDirText = directionText;
	initialState.hightlightsToday[1].data = humidity;
	initialState.hightlightsToday[2].data = visibility;
	initialState.hightlightsToday[3].data = pressure;

  return initialState.hightlightsToday;
};

const getWindDirection = degDirection => {
	let textDirection;

	if(degDirection >=349 && degDirection <=12){
		textDirection = "N";
	}
	else if(degDirection >=13 && degDirection <=33){
		textDirection = "NNE";
	}
	else if(degDirection >=34 && degDirection <=56){
		textDirection = "NE";
	}
	else if(degDirection >=57 && degDirection <=78){
		textDirection = "ENE";
	}
	else if(degDirection >=79 && degDirection <=101){
		textDirection = "E";
	}
	else if(degDirection >=102 && degDirection <=123){
		textDirection = "ESE";
	}
	else if(degDirection >=124 && degDirection <=146){
		textDirection = "SE";
	}
	else if(degDirection >=147 && degDirection <=168){
		textDirection = "SSE";
	}
	else if(degDirection >=169 && degDirection <=191){
		textDirection = "S";
	}
	else if(degDirection >=192 && degDirection <=213){
		textDirection = "SSW";
	}
	else if(degDirection >=214 && degDirection <=236){
		textDirection = "SW";
	}
	else if(degDirection >=237 && degDirection <=258){
		textDirection = "WSW";
	}
	else if(degDirection >=259 && degDirection <=281){
		textDirection = "W";
	}
	else if(degDirection >=282 && degDirection <=303){
		textDirection = "WNW";
	}
	else if(degDirection >=304 && degDirection <=326){
		textDirection = "NW";
	}
	else if(degDirection >=327 && degDirection <=348){
		textDirection = "NNW";
	}

	return textDirection;
}

export default getHightLightsToday;