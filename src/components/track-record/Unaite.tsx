import Image from 'next/image'

export default function Unaite() {
  return (
    <div className='p-4 sm:p-6 text-white font-light'>
      {/* Two-column layout: text on left, image on right */}
      <div className='flex flex-col lg:flex-row gap-4 sm:gap-6'>
        {/* Left column: Text content */}
        <div className='flex-1 lg:flex-[0.4] space-y-3 sm:space-y-4'>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            France&apos;s federation of the best eight AI university societies. Hosted 20+ events in one year including
            Aravind Srinivas, YC Partners, and France&apos;s biggest hackathon.
          </p>

          <div>
            <p className='text-base sm:text-sm md:text-md lg:text-lg italic pt-8'>Supported by:</p>
            <div className='flex flex-wrap gap-8 justify-center'>
              <Image src='/anthropic_logo.png' alt='Anthropic logo' width={100} height={100} className='self-center' />
              <Image
                src='/huggingface_logo.png'
                alt='Hugging Face logo'
                width={130}
                height={130}
                className='self-center'
              />
              <Image src='/windsurf_logo.png' alt='Windsurf logo' width={130} height={130} className='self-center' />
              <Image src='/cerebras_logo.png' alt='Cerebras logo' width={90} height={90} className='self-center' />
              <Image
                src='/google-cloud_logo.png'
                alt='Google Cloud logo'
                width={70}
                height={70}
                className='self-center'
              />
            </div>
          </div>
        </div>

        {/* Right column: Image with white border */}
        <div className='flex-1 lg:flex-[0.6] order-first'>
          <div className='border-2 sm:border-4 border-white relative w-full' style={{ paddingTop: '80%' }}>
            <Image src='/unaite_team.svg' alt='HackFrance event' fill className='object-cover' priority />
          </div>
        </div>
      </div>
    </div>
  )
}
