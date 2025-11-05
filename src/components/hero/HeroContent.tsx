export default function HeroContent() {
  return (
    <div className='flex-1 space-y-4 sm:space-y-6 w-full'>
      {/* Headline */}
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
        Europe&apos;s Premier Student Hackathon
      </h1>

      {/* Description */}
      <p className='text-base sm:text-lg md:text-xl text-white/90 max-w-xl'>
        We&apos;re bringing together 1,000 of Europe&apos;s brightest student builders for a weekend of innovation.
      </p>

      {/* Date */}
      <p className='text-lg sm:text-xl text-white italic'>February 21-22, 2026</p>
    </div>
  )
}
