import Image from 'next/image'
import Link from 'next/link'

export default function HeroSponsors() {
  return (
    <div className='w-full'>
      <div className='flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-6'>
        {/* OpenAi, Stripe, Lovable, Intercom, Project Europe, Paid, Wellspin */}
        <Link
          href='https://openai.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='opacity-80 hover:opacity-100 transition-opacity'
        >
          <Image
            src='/openai_logo.png'
            alt='OpenAI'
            width={80}
            height={24}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
          />
        </Link>
        <Link
          href='https://stripe.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='opacity-80 hover:opacity-100 transition-opacity'
        >
          <Image
            src='/stripe_logo_no_margins.png'
            alt='Stripe'
            width={80}
            height={24}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
          />
        </Link>
        <Link
          href='https://zed.dev/'
          target='_blank'
          rel='noopener noreferrer'
          className='opacity-80 hover:opacity-100 transition-opacity'
        >
          <Image src='/zed.svg' alt='Zed' width={80} height={24} className='h-5 sm:h-6 w-auto' />
        </Link>
        <Link
          href='https://www.intercom.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='opacity-80 hover:opacity-100 transition-opacity'
        >
          <Image src='/intercom_logo.svg' alt='Intercom' width={60} height={24} className='h-5 sm:h-6  w-auto' />
        </Link>
        <Link
          href='https://paid.ai/'
          target='_blank'
          rel='noopener noreferrer'
          className='opacity-80 hover:opacity-100 transition-opacity'
        >
          <Image
            src='/paid_logo.svg'
            alt='Paid'
            width={180}
            height={72}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
          />
        </Link>
      </div>
      <div className='flex w-full items-center justify-center sm:justify-start gap-6 pt-4'>
        <Link
          href='https://www.projecteurope.co/'
          target='_blank'
          rel='noopener noreferrer'
          className='opacity-80 hover:opacity-100 transition-opacity'
        >
          <Image
            src='/project_europe_logo.png'
            alt='Project Europe'
            width={60}
            height={24}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
          />
        </Link>
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/wellspin_logo.svg'
            alt='Wellspin'
            width={60}
            height={24}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
          />
        </div>
      </div>
    </div>
  )
}
