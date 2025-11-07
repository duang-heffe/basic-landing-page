import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='w-full bg-[var(--color-black)] overflow-hidden relative'>
      <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-12 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Section - Text Content */}
          <div>
            {/* Header Section */}
            <div className='mb-8'>
              <div className='mb-2'>
                <Image
                  src='/hackeurope_logo.svg'
                  alt='HackEurope'
                  width={150}
                  height={40}
                  className='h-6 sm:h-7 lg:h-8 w-auto'
                />
              </div>
              <p className='text-white text-sm sm:text-base italic'>Europe&apos;s Largest Student Hackathon</p>
            </div>

            {/* Link Sections */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Quick Links Column */}
              <div>
                <h3 className='text-white text-base sm:text-lg italic mb-3 font-serif'>Quick Links</h3>
                <ul className='space-y-1.5'>
                  <li className='text-gray-300 text-sm sm:text-base'>
                    <a href='#locations' className='hover:opacity-80 transition-opacity'>
                      - Locations
                    </a>
                  </li>
                  <li className='text-gray-300 text-sm sm:text-base'>
                    <a href='#track-record' className='hover:opacity-80 transition-opacity'>
                      - Our Track Record
                    </a>
                  </li>
                  <li className='text-gray-300 text-sm sm:text-base'>
                    <a href='#testimonials' className='hover:opacity-80 transition-opacity'>
                      - Testimonials
                    </a>
                  </li>
                  <li className='text-gray-300 text-sm sm:text-base'>
                    <a href='#sponsor' className='hover:opacity-80 transition-opacity'>
                      - Why Sponsor Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Stay Connected Column */}
              <div>
                <h3 className='text-white text-base sm:text-lg italic mb-3 font-serif'>Stay Connected</h3>
                <ul className='space-y-1.5'>
                  <li className='text-gray-300 text-sm sm:text-base'>
                    <a
                      href='https://www.instagram.com/hack.ireland/'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='hover:opacity-80 transition-opacity'
                    >
                      - Instagram
                    </a>
                  </li>
                  <li className='text-gray-300 text-sm sm:text-base'>
                    <a
                      href='https://www.linkedin.com/company/hackireland/'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='hover:opacity-80 transition-opacity'
                    >
                      - LinkedIn
                    </a>
                  </li>
                  <li className='text-gray-300 text-sm sm:text-base'>
                    <a
                      href='https://x.com/HackIreland'
                      target='_blank'
                      rel='noreferrer noopener'
                      className='hover:opacity-80 transition-opacity'
                    >
                      - X / Twitter
                    </a>
                  </li>
                  <li className='text-gray-300 text-sm sm:text-base'>
                    - Email:{' '}
                    <a href='mailto:team@hackeurope.eu' className='underline hover:opacity-80 transition-opacity'>
                      team@hackeurope.eu
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section - Spacer for grid */}
          <div className='hidden lg:block'></div>
        </div>

        {/* Separator */}
        <div className='border-t border-gray-400 mb-5 mt-8 opacity-20'></div>

        {/* Bottom Section */}
        <div className='space-y-2 text-center'>
          <p className='text-gray-300 text-sm sm:text-base'>
            Made with ❤️ by{' '}
            <a
              href='https://emeroconnor.dev/'
              target='_blank'
              rel='noreferrer noopener'
              className='underline hover:opacity-80 transition-opacity'
            >
              Emer
            </a>
            {', '}
            <a
              href='https://lukemolony.com'
              target='_blank'
              rel='noreferrer noopener'
              className='underline hover:opacity-80 transition-opacity'
            >
              Luke
            </a>
            {' & '}
            <a
              href='https://www.linkedin.com/in/reuban-ramsden/'
              target='_blank'
              rel='noreferrer noopener'
              className='underline hover:opacity-80 transition-opacity'
            >
              Reuban
            </a>
          </p>
          <p className='text-gray-400 text-xs sm:text-sm'>Copyright © 2025. All rights reserved.</p>
        </div>
      </div>

      {/* Right Section - Map - Absolute positioned to extend to right edge */}
      <div className='absolute top-8 right-0 hidden lg:block w-1/2 h-[350px] opacity-20 pointer-events-none'>
        <div className='relative w-full h-full'>
          <Image src='/full_map.svg' alt='Map' fill className='object-contain scale-[2.6]' />
        </div>
      </div>
    </footer>
  )
}
