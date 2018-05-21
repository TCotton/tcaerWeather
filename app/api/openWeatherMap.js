import axios from 'axios';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=cc5273075ce8b12e4670051489bbc65b';

const openWeatherMap = {
	getTemp: function (location) {
		const encodedLocation = encodeURIComponent(location);
		// London,uk
		const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then((res) => {
			if (res.data.cod && res.data.message) {
				throw new Error(res.data.message);
			} else {
				return res.data.main.temp;
			}
		}, (res) => {
			throw new Error(res.data.message);
		});
	}
};

export default openWeatherMap;
