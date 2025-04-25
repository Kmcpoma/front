import { defineStore } from 'pinia'

export const useAgendaStore = defineStore('agenda', {
  state: () => ({
    agendas: [],
    selectedAgenda: null,
  }),
  actions: {
    setAgendas(agendas) {
      this.agendas = agendas
    },
    setSelectedAgenda(agenda) {
      this.selectedAgenda = agenda
    },
  },
})
