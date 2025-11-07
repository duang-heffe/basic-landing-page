import StarBorder from '../hero/StarBorder'

export default function InterestedSponsor() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='relative w-full max-w-md mx-auto'>
        {/* Offset outline bottom-right with no fill */}
        <div className='pointer-events-none absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-5 sm:translate-y-5 border-4 border-white z-0'></div>

        {/* Main black box with its own outline */}
        <div className='relative z-10 bg-[var(--color-black)] border-4 border-white px-3 py-3 sm:px-6 sm:py-5'>
          <p className='text-white/90 font-serif italic mb-3 text-base sm:text-lg lg:text-[clamp(16px,1.5vw,18.7px)]'>
            Interested in becoming a sponsor?
          </p>
          <StarBorder
            as='a'
            href='https://calendly.com/happygeo0/30min'
            target='_blank'
            rel='noreferrer noopener'
            color='white'
            speed='3s'
            thickness={2}
            className='w-full group transition-all duration-300 hover:scale-[1.02]'
          >
            <div className='bg-white text-[var(--color-black)] px-4 py-2 sm:py-2.5 text-base sm:text-lg lg:text-[clamp(16px,1.5vw,18.7px)] font-normal -my-[16px] -mx-[26px] rounded-none transition-all duration-300'>
              Schedule a Call
            </div>
          </StarBorder>
        </div>
      </div>
    </div>
  )
}
