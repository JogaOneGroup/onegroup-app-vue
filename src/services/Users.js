import axios from 'axios'

const API_URL = 'https://onegroup-app-api.herokuapp.com/api'
// const API_URL = 'http://localhost:3001/api'

export const login = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/login`, { email, password })
  return data
}

export const register = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/users`, { email, password })
  return data
}
