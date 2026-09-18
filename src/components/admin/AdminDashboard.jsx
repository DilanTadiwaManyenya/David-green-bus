import { useAuth } from '../../hooks/useAuth'
import { useQuotes } from '../../hooks/useQuotes'
import QuotesTable from './QuotesTable'
import AdminStats from './AdminStats'

export default function AdminDashboard() {
  const { logoutAdmin } = useAuth()
  const { quotes, loading, error, fetchQuotesByStatus } = useQuotes()

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container-max">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary-green mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">Manage quote requests and customer inquiries</p>
          </div>
          <button
            onClick={logoutAdmin}
            className="px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <AdminStats quotes={quotes} />

        {/* Table */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-primary-green">
              All Quote Requests
            </h2>
          </div>

          {error && (
            <div className="p-6 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              Error loading quotes: {error}
            </div>
          )}

          {loading ? (
            <div className="p-12 text-center">
              <p className="text-gray-600">Loading quotes...</p>
            </div>
          ) : quotes.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-gray-600">No quotes yet</p>
            </div>
          ) : (
            <QuotesTable quotes={quotes} />
          )}
        </div>
      </div>
    </div>
  )
}