import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-green to-dark-green text-white py-20 md:py-32">
      <div className="container-max text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Clear The Chaos.<br />Grow The Green.
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-95">
          Professional tree felling, landscaping & rubble removal services in Gauteng
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-accent-yellow text-gray-900 font-bold rounded-full hover:bg-yellow-400 transition transform hover:scale-105"
          >
            Get Free Quote
          </Link>
          <Link 
            to="/services" 
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-primary-green transition"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  )
}