export default function HeroTitle() {
  return (
    <div className='w-full'>
      <h1 className='text-white leading-[0.95] font-bold text-4xl sm:text-5xl lg:text-[clamp(48px,5.5vw,74px)] text-center sm:text-left'>
        Europe&apos;s{' '}
        <span className='font-serif font-normal italic underline decoration-orange-500 underline-offset-[8.5px] decoration-4 sm:decoration-6 lg:decoration-8'>
          Largest
        </span>
        <span className='block'>Student Hackathon</span>
      </h1>
    </div>
  )
}

