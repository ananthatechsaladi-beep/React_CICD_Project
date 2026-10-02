const weatherCatalog = {
  Bangalore: {
    city: 'Bangalore',
    country: 'India',
    condition: 'Partly Cloudy',
    temperature: 28,
    feelsLike: 30,
    humidity: 72,
    wind: 14,
    pressure: 1012,
    visibility: 8,
    uvIndex: 6,
    sunrise: '6:02 AM',
    sunset: '6:08 PM',
    updatedAt: '10:35 AM',
  },
  Hyderabad: {
    city: 'Hyderabad',
    country: 'India',
    condition: 'Sunny',
    temperature: 31,
    feelsLike: 33,
    humidity: 48,
    wind: 18,
    pressure: 1009,
    visibility: 9,
    uvIndex: 7,
    sunrise: '5:58 AM',
    sunset: '6:12 PM',
    updatedAt: '10:40 AM',
  },
  Mumbai: {
    city: 'Mumbai',
    country: 'India',
    condition: 'Rain',
    temperature: 27,
    feelsLike: 28,
    humidity: 81,
    wind: 17,
    pressure: 1014,
    visibility: 6,
    uvIndex: 5,
    sunrise: '6:18 AM',
    sunset: '6:55 PM',
    updatedAt: '10:28 AM',
  },
  Chennai: {
    city: 'Chennai',
    country: 'India',
    condition: 'Cloudy',
    temperature: 30,
    feelsLike: 31,
    humidity: 70,
    wind: 12,
    pressure: 1011,
    visibility: 7,
    uvIndex: 5,
    sunrise: '5:56 AM',
    sunset: '6:10 PM',
    updatedAt: '10:44 AM',
  },
}

const hourlyTemplates = {
  Sunny: [27, 29, 31, 32, 31, 30, 28],
  'Partly Cloudy': [26, 27, 28, 29, 30, 29, 28],
  Rain: [24, 25, 26, 27, 28, 27, 26],
  Cloudy: [25, 27, 28, 29, 28, 27, 26],
}

const weeklyTemplates = {
  Sunny: [31, 30, 29, 28, 27, 30, 32],
  'Partly Cloudy': [30, 29, 28, 29, 30, 31, 29],
  Rain: [27, 28, 29, 26, 27, 28, 29],
  Cloudy: [29, 28, 30, 27, 28, 29, 30],
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const times = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM']

const clampCity = (city) => city?.trim() || 'Bangalore'

const getBaseCity = (city) => {
  const match = weatherCatalog[city] || weatherCatalog.Bangalore
  return {
    ...match,
    city: city || match.city,
  }
}

export const getSuggestedCities = () => Object.keys(weatherCatalog)

export const getCurrentWeather = async (city = 'Bangalore') => {
  const normalizedCity = clampCity(city)
  const data = getBaseCity(normalizedCity)

  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 450)
  })
}

export const getHourlyForecast = async (city = 'Bangalore') => {
  const normalizedCity = clampCity(city)
  const condition = weatherCatalog[normalizedCity]?.condition || 'Partly Cloudy'
  const values = hourlyTemplates[condition] || hourlyTemplates['Partly Cloudy']

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          times.map((time, index) => ({
            time,
            temperature: values[index],
            condition,
          })),
        ),
      450,
    )
  })
}

export const getWeeklyForecast = async (city = 'Bangalore') => {
  const normalizedCity = clampCity(city)
  const condition = weatherCatalog[normalizedCity]?.condition || 'Partly Cloudy'
  const values = weeklyTemplates[condition] || weeklyTemplates['Partly Cloudy']

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          days.map((day, index) => ({
            day,
            condition,
            high: values[index],
            low: values[index] - 8,
            rainChance: index % 3 === 0 ? 70 : index % 2 === 0 ? 25 : 10,
          })),
        ),
      550,
    )
  })
}

export const getFavoriteCities = async () => {
  const cities = Object.keys(weatherCatalog)

  return Promise.all(
    cities.map(async (city) => {
      const current = await getCurrentWeather(city)
      return {
        ...current,
        favorite: true,
      }
    }),
  )
}
