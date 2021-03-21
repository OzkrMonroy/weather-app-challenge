export const formatStringToCapitalize = (textToFormat) => {
	const textToCapitalize = textToFormat.replace(/\w\S*/g, (w) =>
		w.replace(/^\w/, (c) => c.toUpperCase())
	);

	return textToCapitalize;
};

export const formatLocationName = location => {
  const fullLocationName = location;
	const nameCity = fullLocationName.split("/")[1];
	const locationName = nameCity.replace("_", " ");

  return locationName
}
