export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container-max text-center">
        <p className="mb-2">&copy; {currentYear} David Green Bus. All rights reserved.</p>
        <p className="text-gray-400 text-sm">Professional Tree Felling, Landscaping & Rubble Removal Services</p>
      </div>
    </footer>
  )
}