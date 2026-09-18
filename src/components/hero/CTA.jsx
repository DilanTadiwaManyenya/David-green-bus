import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="bg-accent-yellow py-16">
      <div className="container-max text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg text-gray-800 mb-8">
          Get a free quote from our professional team. No obligation.
        </p>
        <Link 
          to="/contact"
          className="inline-block px-8 py-4 bg-primary-green text-white font-bold rounded-full hover:bg-dark-green transition transform hover:scale-105"
        >
          Request Free Quote Now
        </Link>
      </div>
    </section>
  )
}