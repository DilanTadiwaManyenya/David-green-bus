import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-green to-dark-green text-white shadow-lg">
      <div className="container-max flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold hover:text-accent-yellow transition">
          <span className="text-3xl">🌳</span>
          <span>David Green Bus</span>
        </Link>
        
        <nav className="flex gap-6">
          <Link to="/" className="hover:text-accent-yellow transition font-medium">Home</Link>
          <Link to="/services" className="hover:text-accent-yellow transition font-medium">Services</Link>
          <Link to="/contact" className="hover:text-accent-yellow transition font-medium">Contact</Link>
          <Link to="/admin" className="hover:text-accent-yellow transition font-medium">Admin</Link>
        </nav>
      </div>
    </header>
  )
}