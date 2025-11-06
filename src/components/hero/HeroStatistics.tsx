export default function HeroStatistics() {
  return (
    <div className='w-full py-4 sm:py-6 lg:py-6'>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl'>
          {/* 3 Locations */}
          <div className='flex flex-col items-start gap-1 sm:gap-2'>
            <div className='text-[38.6835px] font-medium text-white'>3</div>
            <div className='text-[15.2915px] font-light text-white/80'>Locations</div>
          </div>

          {/* 1,000 Participants */}
          <div className='flex flex-col items-start gap-1 sm:gap-2'>
            <div className='text-[38.6835px] font-medium text-white'>1,000+</div>
            <div className='text-[15.2915px] font-light text-white/80'>Participants</div>
          </div>

          {/* €100K Prize Pot */}
          <div className='flex flex-col items-start gap-1 sm:gap-2'>
            <div className='text-[38.6835px] font-medium text-white'>€100K</div>
            <div className='text-[15.2915px] font-light text-white/80'>Prize Pot</div>
          </div>
      </div>
    </div>
  )
}
