import Image from 'next/image'

export default function HeroHeader() {
  return (
    <header className='bg-[var(--color-black)] w-full'>
      <nav className='flex items-center justify-between px-2 py-2 sm:px-3 sm:py-2.5 lg:px-6 lg:py-3'>
        {/* Logo */}
        <div className='flex items-center'>
          <Image
            src='/hackeurope_logo.svg'
            alt='HackEurope'
            width={150}
            height={40}
            className='h-6 sm:h-8 w-auto'
          />
        </div>

        {/* Right side */}
        <div className='flex items-center gap-3 sm:gap-4'>
          {/* Date */}
          <div className='text-white text-sm italic'>February 21, 2026</div>
        </div>
      </nav>
    </header>
  )
}
