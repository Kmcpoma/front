import { defineStore } from 'pinia'
import axios from '../services/api'

export const useDatabaseStore = defineStore('database', {
  state: () => ({
    tables: {
      users: [
        { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
        { id: 2, name: 'Bob', email: 'bob@example.com', role: 'Editor' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Viewer' },
        { id: 4, name: 'Diana', email: 'diana@example.com', role: 'Editor' },
        { id: 5, name: 'Eve', email: 'eve@example.com', role: 'Admin' },
      ],
      roles: [
        { id: 1, name: 'Admin', description: 'Full access to all resources' },
        { id: 2, name: 'Organizador', description: 'Puede realizar registros' },
        { id: 3, name: 'Viewer', description: 'Can view content only' },
        { id: 4, name: 'Editor', description: 'Can edit and create content' },
        { id: 5, name: 'Guest', description: 'Limited access to resources' },
      ],
      permissions: [
        { id: 1, name: 'Create', description: 'Can create resources' },
        { id: 2, name: 'Read', description: 'Can read resources' },
        { id: 3, name: 'Update', description: 'Can update resources' },
        { id: 4, name: 'Delete', description: 'Can delete resources' },
        { id: 5, name: 'Manage Users', description: 'Can manage user accounts' },
      ],
      events: [
        { id: 1, title: 'Team Meeting', date: '2025-04-21', location: 'Conference Room A' },
        { id: 2, title: 'Project Kickoff', date: '2025-04-22', location: 'Online' },
        { id: 3, title: 'Workshop', date: '2025-04-23', location: 'Main Hall' },
        { id: 4, title: 'Client Presentation', date: '2025-04-24', location: 'Conference Room B' },
        { id: 5, title: 'Annual Review', date: '2025-04-25', location: 'Auditorium' },
      ],
      agenda: [
        { id: 1, event: 'Team Meeting', time: '10:00 AM', notes: 'Discuss project updates' },
        { id: 2, event: 'Project Kickoff', time: '2:00 PM', notes: 'Introduce team and goals' },
        { id: 3, event: 'Workshop', time: '9:00 AM', notes: 'Hands-on training' },
        { id: 4, event: 'Client Presentation', time: '3:00 PM', notes: 'Present project progress' },
        { id: 5, event: 'Annual Review', time: '11:00 AM', notes: 'Review yearly achievements' },
      ],
    },
  }),
  actions: {
    async fetchTableData(tableName) {
      try {
        const response = await axios.get(`/api/${tableName}`)
        this.tables[tableName] = response.data
      } catch (error) {
        console.error(`Error fetching data for ${tableName}:`, error)
      }
      console.log(`Fetching data for table: ${tableName}`)
    },
    async initializeDatabase() {
      console.log('Initializing database with predefined data.')
    },
  },
})
