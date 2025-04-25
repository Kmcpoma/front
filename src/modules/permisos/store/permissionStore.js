import { defineStore } from 'pinia'

export const usePermissionStore = defineStore('permission', {
  state: () => ({
    permissions: [],
    selectedPermission: null,
  }),
  actions: {
    setPermissions(permissions) {
      this.permissions = permissions
    },
    setSelectedPermission(permission) {
      this.selectedPermission = permission
    },
  },
})
