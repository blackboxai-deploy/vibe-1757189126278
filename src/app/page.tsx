import Hero3D from '@/components/Hero3D'
import About3D from '@/components/About3D'
import ModelsGrid from '@/components/ModelsGrid'
import ServicesCards from '@/components/ServicesCards'
import ContactForm from '@/components/ContactForm'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero3D />
      <About3D />
      <ModelsGrid />
      <ServicesCards />
      <ContactForm />
    </main>
  )
}