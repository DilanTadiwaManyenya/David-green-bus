export default function AdminStats({ quotes }) {
  const pending = quotes.filter(q => q.status === 'pending').length
  const contacted = quotes.filter(q => q.status === 'contacted').length
  const completed = quotes.filter(q => q.status === 'completed').length

  const stats = [
    { label: 'Total Quotes', value: quotes.length, color: 'bg-blue-100 text-blue-700' },
    { label: 'Pending', value: pending, color: 'bg-yellow-100 text-yellow-700' },
    { label: 'Contacted', value: contacted, color: 'bg-purple-100 text-purple-700' },
    { label: 'Completed', value: completed, color: 'bg-green-100 text-green-700' }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className={`p-6 rounded-lg ${stat.color}`}>
          <p className="text-sm font-semibold opacity-75">{stat.label}</p>
          <p className="text-3xl font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  )
}