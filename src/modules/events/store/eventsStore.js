import { defineStore } from 'pinia'
import { fetchEvents, saveEvent, updateEvent, deleteEvent } from '../services/eventService'

export const useEventsStore = defineStore('events', {
  state: () => ({
    events: [],
    filteredEvents: [],
    filters: {
      type: '',
      status: '',
    },
  }),
  actions: {
    async loadEvents() {
      this.events = await fetchEvents()
      this.applyFilters()
    },

    // Agregar un nuevo evento
    async addEvent(event) {
      const newEvent = await saveEvent(event)
      this.events.push(newEvent)
      this.applyFilters() //hola soy un cambio
    },

    // Actualizar un evento existente
    async updateEvent(id, updatedEvent) {
      const updated = await updateEvent(id, updatedEvent)
      const index = this.events.findIndex((event) => event.id === parseInt(id))
      if (index !== -1) {
        this.events[index] = updated
        this.applyFilters()
      }
    },

    // Eliminar un evento
    async deleteEvent(id) {
      await deleteEvent(id)
      this.events = this.events.filter((event) => event.id !== id)
      this.applyFilters()
    },

    // Aplicar filtros
    applyFilters() {
      this.filteredEvents = this.events.filter((event) => {
        const matchesType = this.filters.type ? event.details.type === this.filters.type : true
        const matchesStatus = this.filters.status ? event.status === this.filters.status : true
        return matchesType && matchesStatus
      })
    },

    // Limpiar filtros
    clearFilters() {
      this.filters.type = ''
      this.filters.status = ''
      this.applyFilters()
    },

    // Actualizar filtros
    setFilters(newFilters) {
      this.filters = { ...this.filters, ...newFilters }
      this.applyFilters()
    },
  },
})
