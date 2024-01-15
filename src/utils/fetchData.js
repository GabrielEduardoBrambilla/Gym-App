import axios from 'axios'

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  params: { limit: '10' },
  headers: {
    'X-RapidAPI-Key': import.meta.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}

export const fetchData = async options => {
  try {
    const response = await axios.request(options)
    console.log(response.data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
