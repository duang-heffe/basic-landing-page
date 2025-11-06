export default function Dez() {
  return (
    <div className='flex flex-col gap-6 bg-[var(--color-black)] p-6'>
      {/* Image */}
      <div className='w-full aspect-[16/9] bg-gray-700/60 flex items-center justify-center'>
        <div className='text-white/50 text-xs sm:text-sm'>image placeholder</div>
      </div>

      {/* Quote */}
      <p className='text-white/90 text-sm sm:text-base leading-relaxed'>
        "It was great to speak to 100+ of Ireland's most capable and ambitious student engineers...
        Ireland's future is looking extremely energetic and tech-positive."
      </p>

      {/* Name */}
      <div className='text-white text-sm sm:text-base'>Des Traynor</div>

      {/* Role + logo row */}
      <div className='flex items-center justify-between'>
        <div className='text-orange-500 text-sm sm:text-base'>Intercom Co-Founder</div>
        <div className='text-white text-xl sm:text-2xl font-semibold opacity-90'>INTERCOM</div>
      </div>
    </div>
  )
}
