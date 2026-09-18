import ServiceCard from './ServiceCard'

export default function ServicesList() {
  const services = [
    {
      id: 1,
      icon: '🪚',
      title: 'Tree Felling',
      shortDesc: 'Safe and professional tree removal',
      fullDesc: 'We dig, chop, clear, and clean — so you don\'t have to lift a finger! Our team handles all sizes of trees with personal attention and supervision to ensure safety and precision.',
      features: ['Professional team', 'Safe removal', 'Full cleanup', 'Insured 100%']
    },
    {
      id: 2,
      icon: '🔄',
      title: 'Stump Removal',
      shortDesc: 'Complete stump grinding and disposal',
      fullDesc: 'Get rid of unsightly stumps completely. We grind stumps below ground level and dispose of all debris, leaving your yard clean and ready for landscaping.',
      features: ['Stump grinding', 'Complete disposal', 'Ground level finishing', 'No debris left']
    },
    {
      id: 3,
      icon: '✂️',
      title: 'Trimming & Topping',
      shortDesc: 'Professional tree maintenance',
      fullDesc: 'Keep your trees healthy and attractive with expert trimming and topping services. We shape trees for better growth and aesthetics while maintaining their health.',
      features: ['Professional pruning', 'Health maintenance', 'Aesthetic shaping', 'Crown thinning']
    },
    {
      id: 4,
      icon: '🏗️',
      title: 'Site Clearance',
      shortDesc: 'Complete yard and site cleanup',
      fullDesc: 'Full site clearance for construction, renovation, or general cleanup. We remove debris, clear overgrown areas, and prepare your site for new projects.',
      features: ['Full clearance', 'Debris removal', 'Site preparation', 'Yard cleanup']
    },
    {
      id: 5,
      icon: '🌱',
      title: 'Landscaping',
      shortDesc: 'Professional landscaping services',
      fullDesc: 'Transform your outdoor space with our professional landscaping services. From lawn dressing to complete landscape design and installation.',
      features: ['Lawn dressing', 'Garden design', 'Planting services', 'Yard beautification']
    },
    {
      id: 6,
      icon: '🚨',
      title: 'Emergency Response',
      shortDesc: 'Urgent storm cleanup and tree removal',
      fullDesc: 'Emergency storm cleanup and urgent tree removal services. Available 24/7 for dangerous trees and storm damage. Call immediately for emergency situations.',
      features: ['24/7 availability', 'Storm cleanup', 'Dangerous tree removal', 'Rapid response']
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}