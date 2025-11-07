import Image from "next/image";
import Link from "next/link";

export default function Cian() {
  return (
    <div className='flex flex-col gap-6 bg-[var(--color-black)] p-6'>
      {/* Image */}
      <div className='w-full aspect-[16/9] bg-gray-700/60 flex items-center justify-center relative w-full' style={{ paddingTop: '60%' }}>
        <Image 
          src='/cian.png'
          alt="Cian O Driscoll"
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Quote */}
      <div className="flex flex-col justify-between min-h-[120px] h-full">
        <p className='text-white/90 text-sm sm:text-base leading-relaxed mb-2'>
          “Honoured to be a judge at HackIreland at the weekend. The innovation and technical skill demonstrated by 150 talented builders over 30 intense hours were truly impressive."”
        </p>

        <div className="mt-auto">
          {/* Name */}
          <div className='text-white text-sm sm:text-base'>Cian O&apos;Driscoll</div>

          {/* Role + logo row */}
          <div className='flex items-center justify-between'>
            <div className='text-orange-500 text-sm sm:text-base'>Stripe EMEA CTO</div>
            <Link href="https://www.stripe.com/" target="_blank">
              <Image
                src='/stripe_logo_no_margins.png' 
                alt='Stripe logo'
                width={80}
                height={80}
                className='self-center p-2'
              />            
            </Link>

          </div>        
        </div>        
      </div>
    </div>
  )
}
