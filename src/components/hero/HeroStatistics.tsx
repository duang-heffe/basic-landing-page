export default function HeroStatistics() {
  return (
    <div className='w-full flex justify-center sm:justify-start'>
      <div className='flex flex-row gap-4 sm:gap-6 md:gap-8'>
        <div className='flex flex-col'>
          <div className='text-white text-3xl sm:text-4xl lg:text-[clamp(32px,3vw,42px)] font-medium'>3</div>
          <div className='text-white/80 text-xs sm:text-sm lg:text-[clamp(13px,1.2vw,17px)] font-light'>Locations</div>
        </div>
        <div className='flex flex-col'>
          <div className='text-white text-3xl sm:text-4xl lg:text-[clamp(32px,3vw,42px)] font-medium'>1,000+</div>
          <div className='text-white/80 text-xs sm:text-sm lg:text-[clamp(13px,1.2vw,17px)] font-light'>Participants</div>
        </div>
        <div className='flex flex-col'>
          <div className='text-white text-3xl sm:text-4xl lg:text-[clamp(32px,3vw,42px)] font-medium'>€100K</div>
          <div className='text-white/80 text-xs sm:text-sm lg:text-[clamp(13px,1.2vw,17px)] font-light'>Prize Pot</div>
        </div>
      </div>
    </div>
  )
}

