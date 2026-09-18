import { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')

  // Load admin status from localStorage
  useEffect(() => {
    const savedAdmin = localStorage.getItem('isAdmin')
    if (savedAdmin) {
      setIsAdmin(JSON.parse(savedAdmin))
    }
  }, [])

  const loginAdmin = (password) => {
    // Simple password check (in production, use real authentication)
    if (password === 'david123') {
      setIsAdmin(true)
      localStorage.setItem('isAdmin', JSON.stringify(true))
      return true
    }
    return false
  }

  const logoutAdmin = () => {
    setIsAdmin(false)
    localStorage.removeItem('isAdmin')
  }

  return (
    <AuthContext.Provider value={{ isAdmin, loginAdmin, logoutAdmin, adminPassword, setAdminPassword }}>
      {children}
    </AuthContext.Provider>
  )
}