import Image from 'next/image'

export default function WhySponsor() {
  return (
    <div className='relative'>
      {/* Offset outline bottom-right with no fill */}
      <div className='pointer-events-none absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-5 sm:translate-y-5 border-4 border-white z-0'></div>

      {/* Main black box with its own outline */}
      <div className='relative z-10 bg-[var(--color-black)] border-4 border-white p-4 sm:p-6 lg:p-8'>
        <h3 className='text-white text-2xl sm:text-3xl leading-tight mb-6 flex items-center gap-2 flex-wrap'>
          Why should <span className='font-serif italic underline decoration-orange-500 underline-offset-[2px] self-center'>you</span> sponsor{' '}
          <Image
            src='/hackeurope_logo.svg'
            alt='HackEurope'
            width={150}
            height={40}
            className='h-6 sm:h-7 lg:h-8 w-auto inline-block self-center'
          />
          <span className='self-center'>?</span>
        </h3>

        <div className='space-y-6 text-white/90 text-sm sm:text-base'>
          <div>
            <div className='text-white font-semibold mb-2'>Product Adoption</div>
            <ul className='list-disc pl-5 space-y-1'>
              <li>Sponsor a track: encourage innovation through a sponsored track tackling real-world problems.</li>
              <li>Workshops: host interactive sessions to demonstrate tools, share expertise, and inspire adoption.</li>
            </ul>
          </div>

          <div>
            <div className='text-white font-semibold mb-2'>Campus Ambassadors</div>
            <ul className='list-disc pl-5 space-y-1'>
              <li>Connect with 80+ university society leaders for ambassador roles and brand advocates.</li>
              <li>Gain insights on how students use tools to inform product and engagement strategies.</li>
            </ul>
          </div>

          <div>
            <div className='text-white font-semibold mb-2'>Brand Awareness</div>
            <ul className='list-disc pl-5 space-y-1'>
              <li>Booth presence: have engineers mentor teams and engage directly at all locations.</li>
              <li>Logo visibility across tees, badges, screens, and recap media reaching 50k+ views.</li>
              <li>Extended reach via community channels throughout 2026.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
