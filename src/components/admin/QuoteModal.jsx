export default function QuoteModal({ quote, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary-green">Quote Details</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-600">Name</p>
              <p className="text-lg text-gray-900">{quote.name}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Phone</p>
              <p className="text-lg text-gray-900">{quote.phone}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Email</p>
              <p className="text-lg text-gray-900">{quote.email}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Service</p>
              <p className="text-lg text-gray-900">{quote.service}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Location</p>
              <p className="text-lg text-gray-900">{quote.location || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-600">Status</p>
              <p className="text-lg text-gray-900 capitalize">{quote.status}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600">Message</p>
            <p className="text-gray-900 whitespace-pre-wrap">{quote.message || 'No message'}</p>
          </div>

          <div className="pt-4 border-t">
            <p className="text-xs text-gray-500">
              Submitted: {new Date(quote.created_at).toLocaleString()}
            </p>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-900 font-bold rounded-lg hover:bg-gray-400 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}