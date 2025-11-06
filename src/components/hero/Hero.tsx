import HeroHeader from './HeroHeader'
import HeroTitle from './HeroTitle'
import HeroDescription from './HeroDescription'
import HeroStatistics from './HeroStatistics'
import HeroSponsorCTA from './HeroSponsorCTA'
import HeroSponsors from './HeroSponsors'
import HeroMap from './HeroMap'

export default function Hero() {
  return (
    <section className='w-full min-h-screen bg-[var(--color-blue)] relative overflow-hidden'>
      {/* Map Section - absolutely positioned in top right, behind everything */}
      <div className='absolute top-0 right-0 z-0 pointer-events-none opacity-45 sm:opacity-70 lg:opacity-100 transition-opacity duration-1000'>
        <HeroMap />
      </div>

      {/* Header - inside hero section, above map */}
      <div className='relative z-20 w-full px-6 pt-4 sm:px-8 sm:pt-5 lg:px-20 lg:pt-6'>
        <HeroHeader />
      </div>

      {/* Main Content Container - above map */}
      <div className='relative z-10 w-full h-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20'>
          {/* Text Section */}
          <div className='flex flex-col space-y-6 sm:space-y-8 lg:space-y-10'>
            <HeroTitle />
            <HeroDescription />
            <HeroStatistics />
            <HeroSponsorCTA />
            <HeroSponsors />
          </div>
        </div>
      </div>
    </section>
  )
}

