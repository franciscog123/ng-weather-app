export const WeatherIcons = {

    returnDayorNight(){
        const hours = new Date().getHours()
        if(hours > 6 && hours < 20)
            return 'day';
        else
            return 'night'; 
    },

	Thunderstorm: {
		day: 'wi-day-thunderstorm',
		night: 'wi-night-thunderstorm'
	},
	Drizzle: {
		day: 'wi-day-sprinke',
		night: 'wi-night-sprinkle'
	},
	Rain: {
		day: 'wi-day-showers',
		night: 'wi-night-showers'
	},
	Snow: {
		day: 'wi-day-snow',
		night: 'wi-night-snow'
	},
	Mist: {
		day: 'wi-day-fog',
		night: 'wi-night-fog'
	},
	Smoke: {
		day: 'wi-smoke',
		night: 'wi-smoke'
	},
	Haze: {
		day: 'wi-day-fog',
		night: 'wi-night-fog'
	},
	Dust: {
		day: 'wi-dust',
		night: 'wi-dust'
	},
	Fog: {
		day: 'wi-fog',
		night: 'wi-fog'
	},
	Sand: {
		day: 'wi-dust',
		night: 'wi-dust'
	},
	Ash: {
		day: 'wi-dust',
		night: 'wi-dust'
	},
	Squall: {
		day: 'wi-strong-wind',
		night: 'wi-strong-wind'
	},
	Tornado: {
		day: 'wi-tornado',
		night: 'wi-tornado'
	},
	Clear: {
		day: 'wi-day-sunny',
		night: 'wi-night-clear'
	},
	Clouds: {
		day: 'wi-day-cloudy',
		night: 'wi-night-alt-cloudy'
    }
};