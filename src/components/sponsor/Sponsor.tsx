import TopBar from './TopBar'
import WhySponsor from './WhySponsor'
import InterestedSponsor from './InterestedSponsor'

export default function Sponsor() {
  return (
    <section id='sponsor' className='w-full bg-[var(--color-blue)]'>
      <TopBar />
      <div className='w-full px-4 py-12 sm:px-6 sm:py-16'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
            <WhySponsor />
            <InterestedSponsor />
          </div>
        </div>
      </div>
    </section>
  )
}
