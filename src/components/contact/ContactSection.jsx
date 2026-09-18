import QuoteForm from './QuoteForm'
import ContactInfo from './ContactInfo'

export default function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <QuoteForm />
        </div>
      </div>
    </section>
  )
}