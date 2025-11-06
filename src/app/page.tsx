import Footer from '@/components/footer/Footer'
import NewHero from '@/components/new-hero/Hero'
import Locations from '@/components/locations/Locations'
import TrackRecord from '@/components/track-record/TrackRecord'
import Testimonials from '@/components/testimonials/Testimonials'
import Sponsor from '@/components/sponsor/Sponsor'

export default function Home() {
  return (
    <main className='min-h-screen bg-[var(--color-blue)]'>
      <NewHero />
      <Locations />
      <TrackRecord />
      <Testimonials />
      <Sponsor />
      <Footer />
    </main>
  )
}
