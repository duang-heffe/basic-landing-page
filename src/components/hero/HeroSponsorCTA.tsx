import StarBorder from './StarBorder'

export default function HeroSponsorCTA() {
  return (
    <div className='w-full max-w-md mx-auto sm:mx-0'>
      <div className='bg-[var(--color-black)] px-4 py-4 sm:px-6 sm:py-5'>
        <p className='text-white/90 font-serif italic mb-3 text-base sm:text-lg lg:text-[clamp(16px,1.5vw,18.7px)]'>Interested in becoming a sponsor?</p>
        <StarBorder
          as="a"
          href="https://calendly.com/happygeo0/30min"
          target="_blank"
          rel="noreferrer noopener"
          color="white"
          speed="3s"
          thickness={2}
          className="w-full group transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="bg-white text-[var(--color-black)] px-4 py-2 sm:py-2.5 text-base sm:text-lg lg:text-[clamp(16px,1.5vw,18.7px)] font-normal -my-[16px] -mx-[26px] rounded-none transition-all duration-300">
            Schedule a Call
          </div>
        </StarBorder>
      </div>
    </div>
  )
}

