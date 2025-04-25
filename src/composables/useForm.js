import { ref } from 'vue'

export function useForm(initialValues = {}) {
  const form = ref({ ...initialValues })

  const resetForm = () => {
    form.value = { ...initialValues }
  }

  const updateField = (field, value) => {
    form.value[field] = value
  }

  return {
    form,
    resetForm,
    updateField,
  }
}
