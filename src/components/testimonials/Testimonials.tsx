import Dez from './Dez'
import Cian from './Cian'
import Julie from './Julie'

export default function Testimonials() {
  return (
    <section className='w-full px-4 py-16 sm:px-6 sm:py-20 lg:px-12 bg-[var(--color-dark-gray)]'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-white font-serif italic text-5xl sm:text-6xl mb-10'>Testimonials</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12'>
          <Dez />
          <Cian />
          <Julie />
        </div>
      </div>
    </section>
  )
}
