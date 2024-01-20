import axios from 'axios'

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const fetchData = async (options, search) => {
  try {
    const response = await axios(options)
    console.log(response)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
