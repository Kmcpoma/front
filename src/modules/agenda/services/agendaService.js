import axios from 'axios'

const API_URL = 'https://example.com/api/agenda'

export const fetchAgendas = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}

export const fetchAgendaById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}
