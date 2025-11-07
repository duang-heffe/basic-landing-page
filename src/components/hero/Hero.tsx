import HeroTitle from './HeroTitle'
import HeroDescription from './HeroDescription'
import HeroStatistics from './HeroStatistics'
import HeroSponsorCTA from './HeroSponsorCTA'
import HeroSponsors from './HeroSponsors'
import HeroMap from './HeroMap'

export default function Hero() {
  return (
    <section className='w-full lg:min-h-screen bg-[var(--color-blue)] relative overflow-hidden pt-12 sm:pt-14 lg:pt-16'>
      {/* Map Section - absolutely positioned in top right, behind everything */}
      <div className='absolute top-0 right-0 z-0 pointer-events-none opacity-45 sm:opacity-70 lg:opacity-100 transition-opacity duration-1000'>
        <HeroMap />
      </div>

      {/* Main Content Container - above map */}
      <div className='relative z-10 w-full h-full'>
        <div className='max-w-[90rem] ml-[clamp(8%,5vw,18%)] px-4 sm:px-6 lg:px-12 pt-6 sm:pt-8 lg:pt-[clamp(60px,8vh,80px)] pb-12 sm:pb-16 lg:pb-[clamp(60px,8vh,80px)]'>
          {/* Text Section */}
          <div className='flex flex-col space-y-6 sm:space-y-8 lg:space-y-[clamp(32px,4vh,40px)] text-center sm:text-left'>
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

