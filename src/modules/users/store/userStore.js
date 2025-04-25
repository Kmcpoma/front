import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    selectedUser: null,
  }),
  actions: {
    setUsers(users) {
      this.users = users
    },
    setSelectedUser(user) {
      this.selectedUser = user
    },
  },
})
