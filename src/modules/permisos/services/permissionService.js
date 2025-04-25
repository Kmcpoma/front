import axios from 'axios'

const API_URL = 'https://example.com/api/permissions'

export const fetchPermissions = async () => {
  const response = await axios.get(`${API_URL}`)
  return response.data
}

export const fetchPermissionById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`)
  return response.data
}

export const createPermission = async (permissionData) => {
  const response = await axios.post(`${API_URL}`, permissionData)
  return response.data
}
