import HeroContent from './HeroContent'
import HeroSponsorCTA from './HeroSponsorCTA'
import HeroStatistics from './HeroStatistics'
import HeroSponsors from './HeroSponsors'
import HeroMap from './HeroMap'

export default function Hero() {
  return (
    // 100vh - header height
    <section className='w-full min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex flex-col bg-[var(--color-blue)] relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-12'>
      {/* Map - behind content but above background */}
      <div className='absolute inset-0 z-0 flex items-center justify-end pointer-events-none'>
        <div className='hidden sm:block w-full max-w-7xl mx-auto h-full'>
          <div className='relative w-full h-full'>
            <HeroMap />
          </div>
        </div>
      </div>
      {/* Hero content */}
      <div className='relative z-10 w-full flex justify-center'>
        <div className='max-w-7xl mx-auto w-full'>
          {/* Hero section with content and map */}
          <div className='flex-1 flex flex-col'>
            <div className='flex flex-col lg:flex-row items-start gap-8 sm:gap-10 lg:gap-12 flex-1 w-full'>
              {/* Left side: Content and CTA */}
              <div className='flex-[2] w-full space-y-6 sm:space-y-7 lg:space-y-8 flex flex-col justify-center'>
                <HeroContent />
                <HeroStatistics />
                <HeroSponsorCTA />
              </div>
            </div>
          </div>

          {/* Sponsors */}
          <HeroSponsors />
        </div>
      </div>
    </section>
  )
}
