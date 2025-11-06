'use client'

import { useState } from 'react'
import Tabs from './Tabs'
import HackIreland from './HackIreland'
import Unaite from './Unaite'
import FoundersHouse from './FoundersHouse'
import ClickSpark from './ClickSpark'

export default function TrackRecord() {
  const [activeTab, setActiveTab] = useState('HackIreland')

  return (
    <section id='track-record' className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-12 bg-[var(--color-dark-gray)]'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative'>
          <div className='absolute -top-10 z-20'>
            <ClickSpark
              sparkColor='#f97316'
              sparkSize={15}
              sparkRadius={20}
              sparkCount={8}
              duration={500}
            >
              <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
            </ClickSpark>
          </div>
          <div className='bg-orange-500 border-4 border-white pt-10'>
            <div className='bg-orange-500 relative overflow-hidden'>
              {/* Pre-mount all components for smooth transitions -> we were getting some weird artifacts */}
              <div
                className={`${
                  activeTab === 'HackIreland'
                    ? 'opacity-100 scale-100 relative z-10 visible transition-all duration-1000 ease-in-out'
                    : 'opacity-0 scale-98 absolute inset-0 pointer-events-none z-0 invisible'
                }`}
              >
                <HackIreland />
              </div>
              <div
                className={`${
                  activeTab === 'Unaite'
                    ? 'opacity-100 scale-100 relative z-10 visible transition-all duration-1000 ease-in-out'
                    : 'opacity-0 scale-98 absolute inset-0 pointer-events-none z-0 invisible'
                }`}
              >
                <Unaite />
              </div>
              <div
                className={`${
                  activeTab === 'Founders House'
                    ? 'opacity-100 scale-100 relative z-10 visible transition-all duration-1000 ease-in-out'
                    : 'opacity-0 scale-98 absolute inset-0 pointer-events-none z-0 invisible'
                }`}
              >
                <FoundersHouse />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
