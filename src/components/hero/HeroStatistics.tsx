export default function HeroStatistics() {
  return (
    <div className='w-full px-4 py-4 sm:px-6 sm:py-6 lg:px-12 lg:py-6'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
          {/* 3 Locations */}
          <div className='flex flex-col items-center sm:items-start gap-2 sm:gap-3'>
            <div className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>3</div>
            <div className='text-base sm:text-lg text-white/80'>Locations</div>
          </div>

          {/* 1,000 Participants */}
          <div className='flex flex-col items-center sm:items-start gap-2 sm:gap-3'>
            <div className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>1,000</div>
            <div className='text-base sm:text-lg text-white/80'>Participants</div>
          </div>

          {/* €100K Prize Pot */}
          <div className='flex flex-col items-center sm:items-start gap-2 sm:gap-3'>
            <div className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>€100K</div>
            <div className='text-base sm:text-lg text-white/80'>Prize Pot</div>
          </div>
        </div>
      </div>
    </div>
  )
}
