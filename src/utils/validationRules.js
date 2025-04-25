export const isRequired = (value) => {
  return value ? true : 'This field is required'
}

export const isEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value) ? true : 'Invalid email address'
}

export const minLength = (value, length) => {
  return value.length >= length ? true : `Minimum length is ${length}`
}
