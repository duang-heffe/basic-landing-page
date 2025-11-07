import Image from 'next/image'

export default function FoundersHouse() {
  return (
    <div className='p-4 sm:p-6 text-white font-light'>
      {/* Two-column layout: text on left, image on right */}
      <div className='flex flex-col lg:flex-row gap-4 sm:gap-6'>
        {/* Left column: Text content */}
        <div className='flex-1 lg:flex-[0.4] space-y-3 sm:space-y-4'>
          <p className='text-base sm:text-lg md:text-xl lg:text-2xl'>
            Sweden&apos;s biggest startup community, hosting events with Daniel Eck, Anton Osika, and Max Junestrand.
            Hosts of Project Lovable hackathon with Project Europe.
          </p>

          <div>
            <p className='text-base sm:text-sm md:text-md lg:text-lg italic pt-8'>Supported by:</p>
            <div className='flex flex-wrap gap-8 justify-center'>
              <Image
                src='/lovable_logo_white.png'
                alt='Lovable logo'
                width={100}
                height={100}
                className='self-center'
              />
              <Image src='/legora_logo.png' alt='Legora logo' width={90} height={90} className='self-center' />
              <Image src='/spotify_logo.png' alt='Spotify logo' width={90} height={90} className='self-center' />
              <Image
                src='/tandem_health_logo.png'
                alt='Tandem Health logo'
                width={100}
                height={100}
                className='self-center'
              />
              <Image
                src='/modal_logo_monochrome.png'
                alt='Modal logo'
                width={100}
                height={100}
                className='self-center'
              />
            </div>
          </div>
        </div>

        {/* Right column: Image with white border */}
        <div className='flex-1 lg:flex-[0.6] order-first'>
          <div className='border-2 sm:border-4 border-white relative w-full' style={{ paddingTop: '80%' }}>
            <Image src='/foundershouse_updated.jpeg' alt='HackSweden event' fill className='object-cover' priority />
          </div>
        </div>
      </div>
    </div>
  )
}
