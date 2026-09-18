import Hero from '../components/hero/Hero'
import ServicePreview from '../components/hero/ServicePreview'
import Stats from '../components/hero/Stats'
import CTA from '../components/hero/CTA'

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicePreview />
      <Stats />
      <CTA />
    </div>
  )
}