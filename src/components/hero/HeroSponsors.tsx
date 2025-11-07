import Image from 'next/image'

export default function HeroSponsors() {
  return (
    <div className='w-full'>
      <div className='flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-8'>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/stripe_logo.svg'
            alt='Stripe'
            width={240}
            height={72}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
          />
        </div>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/intercom_logo.svg'
            alt='Intercom'
            width={300}
            height={72}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
          />
        </div>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/lovable_logo.svg'
            alt='Lovable'
            width={240}
            height={72}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
          />
        </div>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/z_logo.svg'
            alt='Z'
            width={72}
            height={72}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
          />
        </div>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/paid_logo.svg'
            alt='Paid'
            width={180}
            height={72}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
          />
        </div>
      </div>
    </div>
  )
}

