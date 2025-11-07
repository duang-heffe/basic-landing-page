import HeroTitle from './HeroTitle'

import HeroDescription from './HeroDescription'

import HeroStatistics from './HeroStatistics'

import HeroSponsorCTA from './HeroSponsorCTA'

import HeroSponsors from './HeroSponsors'

import HeroMap from './HeroMap'

export default function Hero() {
  return (
    <section className='w-full lg:min-h-screen bg-[var(--color-blue)] relative overflow-hidden pt-0 sm:pt-4 lg:pt-8'>
      {/* Map Section - absolutely positioned in top right, behind everything */}

      <div className='absolute top-0 right-0 z-0 pointer-events-none opacity-45 sm:opacity-70 lg:opacity-100 transition-opacity duration-1000'>
        <HeroMap />
      </div>

      {/* Main Content Container - above map */}

      <div className='relative z-10 w-full h-full'>
        <div className='max-w-[90rem] px-6 sm:px-8 lg:pl-20 lg:pr-12 py-12 sm:py-16 lg:py-[clamp(60px,8vh,80px)]'>
          {/* Text Section */}

          <div className='flex flex-col space-y-6 sm:space-y-8 lg:space-y-[clamp(32px,4vh,40px)] text-center sm:text-left lg:max-w-[48rem]'>
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
