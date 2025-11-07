import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='w-full bg-[var(--color-black)] border border-[var(--color-blue)]'>
      <div className='max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {/* Left Section - Text Content */}
          <div>
            {/* Header Section */}
            <div className='mb-12'>
              <h2 className='text-white text-2xl sm:text-3xl font-bold italic mb-2'>hackeurope</h2>
              <p className='text-white text-sm sm:text-base italic'>Europe&apos;s Largest Student Hackathon</p>
            </div>

            {/* Link Sections */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {/* Quick Links Column */}
              <div>
                <h3 className='text-white text-base sm:text-lg italic mb-4 font-serif'>Quick Links</h3>
                <ul className='space-y-2'>
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
                <h3 className='text-white text-base sm:text-lg italic mb-4 font-serif'>Stay Connected</h3>
                <ul className='space-y-2'>
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

          {/* Right Section - Map */}
          <div className='relative hidden lg:block'>
            <div className='sticky top-8'>
              <div className='relative w-full h-full min-h-[400px] opacity-20'>
                <Image
                  src='/Map.svg'
                  alt='Map'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className='border-t border-gray-400 mb-6 mt-8'></div>

        {/* Bottom Section */}
        <div className='space-y-2 text-center'>
          <p className='text-gray-300 text-sm sm:text-base'>
            Made with ❤️ from{' '}
            <a href='https://emeroconnor.dev/' className='underline hover:opacity-80 transition-opacity'>
              Emer
            </a>
            {', '}
            <a href='https://lukemolony.com' className='underline hover:opacity-80 transition-opacity'>
              Luke
            </a>
            {' & '}
            <a
              href='https://www.linkedin.com/in/reuban-ramsden/'
              className='underline hover:opacity-80 transition-opacity'
            >
              Reuban
            </a>
          </p>
          <p className='text-gray-400 text-xs sm:text-sm'>
            Copyright © 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
