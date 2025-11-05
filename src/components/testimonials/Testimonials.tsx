import Dez from './Dez';
import Cian from './Cian';
import Julie from './Julie';

export default function Testimonials() {
  return (
    <section className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-12 bg-[var(--color-dark-gray)]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-serif mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <Dez />
          <Cian />
          <Julie />
        </div>
      </div>
    </section>
  );
}

