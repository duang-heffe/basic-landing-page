import Image from 'next/image'

export default function HackIreland() {
  return (
    <div className='p-4 sm:p-6 text-white'>
      {/* Two-column layout: text on left, image on right */}
      <div className='flex flex-col lg:flex-row gap-4 sm:gap-6'>
        {/* Left column: Text content */}
        <div className='flex-1 lg:flex-[0.6] space-y-3 sm:space-y-4'>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            Ireland&apos;s biggest student hackathon ever, supported by OpenAI, Stripe. We had less than a 30%
            acceptance rate with 10% of all participants recruited by our partners.
          </p>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            Supported by: OpenAI, Stripe, Intercom, Tines, Paid.AI, GitLab, and many more.
          </p>
        </div>

        {/* Right column: Image with white border */}
        <div className='flex-1 lg:flex-[0.4]'>
          <div className='border-2 sm:border-4 border-white'>
            <Image
              src='/hackireland_team.svg'
              alt='HackIreland event'
              width={600}
              height={400}
              className='w-full h-auto object-cover'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
