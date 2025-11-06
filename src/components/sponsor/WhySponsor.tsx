export default function WhySponsor() {
  return (
    <div className='relative'>
      {/* Offset outline bottom-right with no fill */}
      <div className='pointer-events-none absolute inset-0 translate-x-3 translate-y-3 border-2 border-white z-0'></div>

      {/* Main black box with its own outline */}
      <div className='relative z-10 bg-[var(--color-black)] border-2 border-white p-6 sm:p-8'>
        <h3 className='text-white text-2xl sm:text-3xl leading-tight mb-6'>
          Why should <span className='font-serif italic underline decoration-orange-500 underline-offset-[6px]'>you</span> sponsor HackEurope?
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
