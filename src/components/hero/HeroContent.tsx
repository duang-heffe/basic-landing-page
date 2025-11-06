export default function HeroContent() {
  return (
    <div className='flex-1 space-y-6 sm:space-y-7 w-full'>
      {/* Headline */}
      <h1 className='text-white leading-[0.95] font-bold text-[62.118px]'>
        Europe&apos;s{' '}
        <span className='font-serif font-normal italic underline decoration-orange-500 underline-offset-[8.5px] decoration-8'>
          Largest
        </span>
        <span className='block'>Student Hackathon</span>
      </h1>

      {/* Description */}
      <p className='text-white/90 text-[23.732px] font-normal max-w-xl'>
        We&apos;re bringing together <span className='font-semibold text-white'>1,000</span> of Europe&apos;s brightest student
        builders, across <span className='font-semibold text-white'>3</span> different cities, for a weekend of innovation.
      </p>
    </div>
  )
}
