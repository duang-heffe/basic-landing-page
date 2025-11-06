import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Locations from '@/components/locations/Locations'
import TrackRecord from '@/components/track-record/TrackRecord'
import Testimonials from '@/components/testimonials/Testimonials'
import Sponsor from '@/components/sponsor/Sponsor'

export default function Home() {
  return (
    <main className='min-h-screen bg-[var(--color-blue)]'>
      <div className='px-6 pt-4 sm:px-8 sm:pt-5 lg:px-20 lg:pt-6'>
        <Header />
      </div>
      <Hero />
      <Locations />
      <TrackRecord />
      <Testimonials />
      <Sponsor />
      <Footer />
    </main>
  )
}
