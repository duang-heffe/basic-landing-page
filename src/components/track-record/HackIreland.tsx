import Image from 'next/image'

export default function HackIreland() {
  return (
    <div className='p-4 sm:p-6 text-white font-light'>
      {/* Two-column layout: text on left, image on right */}
      <div className='flex flex-col lg:flex-row gap-4 sm:gap-6'>
        {/* Left column: Text content */}
        <div className='flex-1 lg:flex-[0.4] space-y-3 sm:space-y-4 flex flex-col justify-between'>

          <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            Ireland&apos;s biggest student hackathon ever, supported by OpenAI, Stripe, Intercom and Tines. We had less than a 30%
            acceptance rate with 10% of all participants recruited by our partners.
          </p>

          <div>
            <p className='text-base sm:text-sm md:text-md lg:text-lg italic pt-8'>
              Supported by:
            </p>
            <div className='flex flex-wrap gap-8 justify-center pb-8'>
              <Image
                src='/openai_logo.png' 
                alt='OpenAI logo'
                width={100}
                height={100}
                className='self-center'
              />
              <Image
                src='/stripe_logo_no_top_margin.png' 
                alt='Stripe logo'
                width={90}
                height={90}
                className='self-center'
              />    
              <Image
                src='/intercom_logo.png' 
                alt='Intercom logo'
                width={90}
                height={90}
                className='self-center'
              />  
              <Image
                src='/tines_logo.png' 
                alt='Tines logo'
                width={90}
                height={90}
                className='self-center'
              />                                             
            </div>            
          </div>

        </div>

        {/* Right column: Image with white border */}
        <div className='flex-1 lg:flex-[0.6] order-first'>
          <div className='border-2 sm:border-4 border-white'>
            <Image
              src='/hackireland_team_updated.jpg'
              alt='HackIreland event'
              width={1000}
              height={800}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
