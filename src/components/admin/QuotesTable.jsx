import { useState } from 'react'
import { quoteService } from '../../services/supabase'
import QuoteModal from './QuoteModal'

export default function QuotesTable({ quotes }) {
  const [selectedQuote, setSelectedQuote] = useState(null)
  const [updating, setUpdating] = useState(null)

  const handleStatusChange = async (id, newStatus) => {
    setUpdating(id)
    try {
      await quoteService.updateQuoteStatus(id, newStatus)
      // Refetch would happen here in a real app
    } catch (err) {
      console.error('Error updating status:', err)
    } finally {
      setUpdating(null)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      try {
        await quoteService.deleteQuote(id)
      } catch (err) {
        console.error('Error deleting quote:', err)
      }
    }
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Service</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map(quote => (
              <tr key={quote.id} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm text-gray-900">{quote.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{quote.service}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{quote.phone}</td>
                <td className="px-6 py-4">
                  <select
                    value={quote.status}
                    onChange={(e) => handleStatusChange(quote.id, e.target.value)}
                    disabled={updating === quote.id}
                    className="text-sm px-3 py-1 border border-gray-300 rounded bg-white cursor-pointer"
                  >
                    <option value="pending">Pending</option>
                    <option value="contacted">Contacted</option>
                    <option value="completed">Completed</option>
                  </select>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {new Date(quote.created_at).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <button
                    onClick={() => setSelectedQuote(quote)}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(quote.id)}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedQuote && (
        <QuoteModal quote={selectedQuote} onClose={() => setSelectedQuote(null)} />
      )}
    </>
  )
}