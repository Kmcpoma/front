import axios from 'axios'

const API_URL = 'https://example.com/api/roles'

export const fetchRoles = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}

export const fetchRoleById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

export const createRole = async (roleData) => {
  const response = await axios.post(`${API_URL}`, roleData)
  return response.data
}
