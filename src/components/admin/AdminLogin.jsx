import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { loginAdmin } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!password) {
      setError('Please enter the admin password')
      return
    }

    if (loginAdmin(password)) {
      setPassword('')
    } else {
      setError('Invalid password')
      setPassword('')
    }
  }

  return (
    <section className="bg-gradient-to-r from-primary-green to-dark-green text-white py-32">
      <div className="container-max max-w-md mx-auto">
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-primary-green mb-2 text-center">
            Admin Access
          </h1>
          <p className="text-center text-gray-600 mb-6">
            Enter your password to access the dashboard
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
              ✗ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                placeholder="Enter password"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-green text-white font-bold rounded-lg hover:bg-dark-green transition"
            >
              Login
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            🔒 This is a protected area. Only authorized users should have this password.
          </p>
        </div>
      </div>
    </section>
  )
}