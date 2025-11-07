import Image from 'next/image'
import Link from 'next/link'

export default function Dez() {
  return (
    <div className='flex flex-col gap-6 bg-[var(--color-black)] p-6'>
      {/* Image */}
      <div
        className='w-full aspect-[16/9] bg-gray-700/60 flex items-center justify-center relative w-full'
        style={{ paddingTop: '60%' }}
      >
        <Image src='/des.png' alt='Des Traynor' fill className='object-cover' priority />
      </div>

      {/* Quote */}
      <div className='flex flex-col justify-between min-h-[120px] h-full'>
        <p className='text-white/90 text-sm sm:text-base leading-relaxed mb-2'>
          “It was great to speak to 100+ of Ireland&apos;s most capable and ambitious student engineers...
          Ireland&apos;s future is looking extremely energetic and tech-positive.”
        </p>

        <div className='mt-auto'>
          {/* Name */}
          <div className='text-white text-sm sm:text-base font-serif'>Des Traynor</div>

          {/* Role + logo row */}
          <div className='flex items-center justify-between'>
            <div className='text-[var(--color-orange)] text-sm sm:text-base'>Co-founder of Intercom</div>
            <Link href='https://www.intercom.com/' target='_blank'>
              <Image
                src='/intercom_logo.png'
                alt='Intercom logo'
                width={100}
                height={100}
                className='self-center p-2'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
