import { defineStore } from 'pinia'

export const useRoleStore = defineStore('role', {
  state: () => ({
    roles: [],
    selectedRole: null,
  }),
  actions: {
    setRoles(roles) {
      this.roles = roles
    },
    setSelectedRole(role) {
      this.selectedRole = role
    },
  },
})
