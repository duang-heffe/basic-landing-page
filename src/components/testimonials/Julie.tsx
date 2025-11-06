export default function Julie() {
  return (
    <div className='flex flex-col gap-6 bg-[var(--color-black)] p-6'>
      {/* Image */}
      <div className='w-full aspect-[16/9] bg-gray-700/60 flex items-center justify-center'>
        <div className='text-white/50 text-xs sm:text-sm'>image placeholder</div>
      </div>

      {/* Quote */}
      <p className='text-white/90 text-sm sm:text-base leading-relaxed'>
        "We&apos;re incredibly excited to see where these students take their ideas next—and we&apos;d love to
        sponsor again next year!"
      </p>

      {/* Name */}
      <div className='text-white text-sm sm:text-base'>Julie Lavet</div>

      {/* Role + logo row */}
      <div className='flex items-center justify-between'>
        <div className='text-orange-500 text-sm sm:text-base'>Head of OpenAI EU Partnerships</div>
        <div className='text-white text-2xl font-semibold opacity-90'>OpenAI</div>
      </div>
    </div>
  )
}
