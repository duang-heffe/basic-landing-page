import Image from 'next/image'

export default function Unaite() {
  return (
    <div className='p-4 sm:p-6 text-white'>
      {/* Two-column layout: text on left, image on right */}
      <div className='flex flex-col lg:flex-row gap-4 sm:gap-6'>
        {/* Left column: Text content */}
        <div className='flex-1 lg:flex-[0.6] space-y-3 sm:space-y-4'>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            France&apos;s federation of the best eight AI university societies. Hosted 20+ events in one year including
            Aravind Srinivas, YC Partners, and France&apos;s biggest hackathon.
          </p>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            Supported by: Anthropic, Hugging Face, Windsurf, Cerebras, Google Cloud, and many more.
          </p>
        </div>

        {/* Right column: Image with white border */}
        <div className='flex-1 lg:flex-[0.4]'>
          <div className='border-2 sm:border-4 border-white'>
            <Image
              src='/unaite_team.svg'
              alt='HackFrance event'
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
