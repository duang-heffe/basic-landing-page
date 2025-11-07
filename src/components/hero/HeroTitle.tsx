export default function HeroTitle() {
  return (
    <div className='w-full'>
      <h1 className='text-white leading-[0.95] font-bold text-4xl sm:text-5xl lg:text-[clamp(48px,5.5vw,74px)] text-center sm:text-left'>
        Europe&apos;s{' '}
        <span className='font-serif font-normal italic relative inline-block'>
          Largest
          <img
            src='/underline.svg'
            alt=''
            className='absolute top-[100%] left-0 -mt-[11px] w-full h-[18px] sm:h-[26px] lg:h-[35px] object-contain -z-10'
          />
        </span>
        <span className='block mt-2.5 sm:mt-3.5 lg:mt-5'>Student Hackathon</span>
      </h1>
    </div>
  )
}
