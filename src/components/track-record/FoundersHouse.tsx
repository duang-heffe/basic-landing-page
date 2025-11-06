import Image from 'next/image'

export default function FoundersHouse() {
  return (
    <div className='p-6 text-white'>
      {/* Two-column layout: text on left, image on right */}
      <div className='flex flex-col lg:flex-row gap-6'>
        {/* Left column: Text content */}
        <div className='flex-1 lg:flex-[0.6] space-y-4'>
          <p className='text-xl lg:text-2xl'>
            Sweden&apos;s biggest startup community, hosting events with Daniel Eck, Anton Osika, and Max Junestrand.
            Hosts of Project Lovable hackathon with Project Europe.
          </p>
          <p className='text-xl lg:text-2xl'>
            Supported by: Lovable, Legora, Spotify, Tandem Health, Modal, and many more.
          </p>
        </div>

        {/* Right column: Image with white border */}
        <div className='flex-1 lg:flex-[0.4]'>
          <div className='border-4 border-white'>
            <Image
              src='/sweden_location.png'
              alt='HackSweden event'
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
