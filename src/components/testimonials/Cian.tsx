export default function Cian() {
  return (
    <div className='flex flex-col gap-6 bg-[var(--color-black)] p-6'>
      {/* Image */}
      <div className='w-full aspect-[16/9] bg-gray-700/60 flex items-center justify-center'>
        <div className='text-white/50 text-xs sm:text-sm'>image placeholder</div>
      </div>

      {/* Quote */}
      <p className='text-white/90 text-sm sm:text-base leading-relaxed'>
        "Honoured to be a judge at HackIreland at the weekend. The innovation and technical
        skill demonstrated by 150 talented builders over 30 intense hours were truly impressive."
      </p>

      {/* Name */}
      <div className='text-white text-sm sm:text-base'>Cian O&apos;Driscoll</div>

      {/* Role + logo row */}
      <div className='flex items-center justify-between'>
        <div className='text-orange-500 text-sm sm:text-base'>Stripe EMEA CTO</div>
        <div className='text-white text-2xl font-semibold opacity-90'>stripe</div>
      </div>
    </div>
  )
}
