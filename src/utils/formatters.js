// Format date to readable string
export const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return new Date(dateString).toLocaleDateString('en-ZA', options)
}

// Format phone number
export const formatPhone = (phone) => {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '')
  // Format as South African format
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`
  }
  return phone
}

// Capitalize first letter
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

// Get service label from value
export const getServiceLabel = (serviceValue) => {
  const services = {
    'tree-felling': 'Tree Felling',
    'stump-removal': 'Stump Removal',
    'trimming': 'Trimming & Topping',
    'site-clearance': 'Site Clearance',
    'landscaping': 'Landscaping',
    'emergency': 'Emergency Response',
    'other': 'Other'
  }
  return services[serviceValue] || serviceValue
}