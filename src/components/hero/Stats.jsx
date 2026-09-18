export default function Stats() {
  const stats = [
    { value: '100%', label: 'Insured' },
    { value: '24/7', label: 'Available' },
    { value: 'FREE', label: 'Quotes' },
    { value: '✓', label: 'Professional Team' }
  ]

  return (
    <section className="bg-primary-green text-white py-16">
      <div className="container-max">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-accent-yellow mb-2">
                {stat.value}
              </div>
              <p className="text-lg opacity-95">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}