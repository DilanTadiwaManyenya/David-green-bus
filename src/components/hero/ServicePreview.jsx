export default function ServicePreview() {
  const services = [
    {
      icon: '🪚',
      title: 'Tree Felling',
      description: 'Professional tree removal with personal attention & supervision'
    },
    {
      icon: '🔄',
      title: 'Stump Removal',
      description: 'Complete stump grinding & disposal services'
    },
    {
      icon: '✂️',
      title: 'Trimming & Topping',
      description: 'Professional tree trimming and topping to keep your trees healthy'
    },
    {
      icon: '🏗️',
      title: 'Site Clearance',
      description: 'Complete site clearance and yard cleanup services'
    },
    {
      icon: '🌱',
      title: 'Landscaping',
      description: 'Professional landscaping and land scaping services'
    },
    {
      icon: '🚨',
      title: 'Emergency Response',
      description: 'Emergency storm cleanup and urgent tree removal'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-max">
        <h2 className="text-4xl font-bold text-center text-primary-green mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 border-2 border-primary-green rounded-lg hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-primary-green mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}