export default function HeroSponsors() {
  return (
    <div className='w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-12 lg:py-6'>
      <div className='max-w-7xl mx-auto'>
        <p className='text-white/70 mb-3 sm:mb-4 lg:mb-6 text-sm sm:text-base'>Sponsored by:</p>
        <div className='flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8'>
          <div className='text-white text-sm sm:text-base md:text-lg font-medium opacity-80'>stripe</div>
          <div className='text-white text-sm sm:text-base md:text-lg font-medium opacity-80'>intercom</div>
          <div className='text-white text-sm sm:text-base md:text-lg font-medium opacity-80'>Lovable</div>
          <div className='text-white text-sm sm:text-base md:text-lg font-medium opacity-80'>Z</div>
          <div className='text-white text-sm sm:text-base md:text-lg font-medium opacity-80'>Paid.</div>
        </div>
      </div>
    </div>
  )
}
