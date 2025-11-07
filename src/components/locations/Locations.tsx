import DublinLocation from './DublinLocation'
import ParisLocation from './ParisLocation'
import SwedenLocation from './SwedenLocation'

export default function Locations() {
  return (
    <section id='locations' className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-12 bg-[var(--color-dark-gray)]'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8'>
          <DublinLocation />
          <ParisLocation />
          <SwedenLocation />
        </div>
      </div>
    </section>
  )
}
