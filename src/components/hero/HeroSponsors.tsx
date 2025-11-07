import Image from 'next/image'

export default function HeroSponsors() {
  return (
    <div className='w-full'>
      <div className='flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 md:gap-6'>
           {/* OpenAi, Stripe, Lovable, Intercom, Project Europe, Paid, Wellspin */}    
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/openai_logo.png'
            alt='OpenAI'
            width={80}
            height={24}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
          />
        </div>              
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/stripe_logo_no_margins.png'
            alt='Stripe'
            width={80}
            height={24}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
            priority
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
            src='/intercom_logo.svg'
            alt='Intercom'
            width={60}
            height={24}
            className='h-5 sm:h-6  w-auto'
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
        <div className='opacity-80 hover:opacity-100 transition-opacity'>
          <Image
            src='/project_europe_logo.png'
            alt='Project Europe'
            width={60}
            height={24}
            className='h-5 sm:h-6 lg:h-[clamp(20px,2vw,28px)] w-auto'
          />
        </div>        
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

