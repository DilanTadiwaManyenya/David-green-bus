import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 overflow-hidden border-l-4 border-primary-green">
      <div className="p-6">
        <div className="text-6xl mb-4">{service.icon}</div>
        
        <h3 className="text-2xl font-bold text-primary-green mb-2">
          {service.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4">
          {service.shortDesc}
        </p>
        
        <p className="text-gray-700 mb-6 text-sm leading-relaxed">
          {service.fullDesc}
        </p>
        
        <div className="mb-6">
          <p className="text-xs font-semibold text-primary-green mb-3">WHAT'S INCLUDED:</p>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="text-accent-yellow">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          to="/contact"
          className="inline-block w-full text-center px-4 py-3 bg-primary-green text-white font-bold rounded-lg hover:bg-dark-green transition"
        >
          Get Quote for {service.title}
        </Link>
      </div>
    </div>
  )
}