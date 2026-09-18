export default function ContactInfo() {
  const contactDetails = [
    {
      icon: '📞',
      label: 'Phone',
      value: '079 999 1621',
      link: 'tel:0799991621'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'Aubaub36@gmail.com',
      link: 'mailto:Aubaub36@gmail.com'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Gauteng, South Africa',
      link: null
    },
    {
      icon: '🛡️',
      label: 'Insurance',
      value: '100% Insured Services',
      link: null
    }
  ]

  return (
    <div>
      <h2 className="text-4xl font-bold text-primary-green mb-8">
        Get In Touch
      </h2>
      <p className="text-gray-700 mb-8 text-lg leading-relaxed">
        Have a tree emergency or need landscaping work? Contact David's team today for a free consultation. We're available 24/7 for emergency situations.
      </p>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="text-4xl">{detail.icon}</div>
            <div>
              <p className="font-bold text-primary-green text-sm uppercase tracking-wide">
                {detail.label}
              </p>
              {detail.link ? (
                <a 
                  href={detail.link}
                  className="text-lg text-gray-800 hover:text-primary-green transition"
                >
                  {detail.value}
                </a>
              ) : (
                <p className="text-lg text-gray-800">
                  {detail.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-accent-yellow rounded-lg">
        <p className="text-gray-900 font-semibold text-center">
          💡 <span className="ml-2">Free quotes available within 24 hours</span>
        </p>
      </div>
    </div>
  )
}