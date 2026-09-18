// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone (South African format)
export const isValidPhone = (phone) => {
  const phoneRegex = /^(\+27|0)[0-9]{9}$/
  const cleaned = phone.replace(/\s/g, '')
  return phoneRegex.test(cleaned)
}

// Validate form data
export const validateQuoteForm = (formData) => {
  const errors = {}

  if (!formData.name || formData.name.trim() === '') {
    errors.name = 'Name is required'
  }

  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = 'Valid email is required'
  }

  if (!formData.phone || !isValidPhone(formData.phone)) {
    errors.phone = 'Valid South African phone number is required'
  }

  if (!formData.service || formData.service === '') {
    errors.service = 'Please select a service'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}