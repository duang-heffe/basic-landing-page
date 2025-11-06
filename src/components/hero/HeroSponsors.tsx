import Image from 'next/image'

export default function HeroSponsors() {
  return (
    <div className='w-full'>
      <div className='flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8'>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/stripe_logo.svg'
            alt='Stripe'
            width={80}
            height={24}
            className='h-5 sm:h-6 w-auto'
          />
        </div>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/intercom_logo.svg'
            alt='Intercom'
            width={100}
            height={24}
            className='h-5 sm:h-6 w-auto'
          />
        </div>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/lovable_logo.svg'
            alt='Lovable'
            width={80}
            height={24}
            className='h-5 sm:h-6 w-auto'
          />
        </div>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/z_logo.svg'
            alt='Z'
            width={24}
            height={24}
            className='h-5 sm:h-6 w-auto'
          />
        </div>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/paid_logo.svg'
            alt='Paid'
            width={60}
            height={24}
            className='h-5 sm:h-6 w-auto'
          />
        </div>
      </div>
    </div>
  )
}

