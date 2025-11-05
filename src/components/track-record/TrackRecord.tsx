'use client'

import { useState } from 'react'
import Tabs from './Tabs'
import HackIreland from './HackIreland'
import HackFrance from './HackFrance'
import HackSweden from './HackSweden'

export default function TrackRecord() {
  const [activeTab, setActiveTab] = useState('HackIreland')

  const renderContent = () => {
    switch (activeTab) {
      case 'HackIreland':
        return <HackIreland />
      case 'HackFrance':
        return <HackFrance />
      case 'HackSweden':
        return <HackSweden />
      default:
        return <HackIreland />
    }
  }

  return (
    <section className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-12 bg-[var(--color-dark-gray)]'>
      <div className='max-w-7xl mx-auto'>
        <div className='relative'>
          <div className='absolute -top-10 left-0 z-20'>
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <div className='bg-orange-500 border-4 border-white pt-10'>
            <div className='bg-orange-500'>{renderContent()}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
