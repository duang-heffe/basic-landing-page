import Image from "next/image";
import Link from "next/link";

export default function Julie() {
  return (
    <div className='flex flex-col gap-6 bg-[var(--color-black)] p-6'>
      {/* Image */}
      <div className='w-full aspect-[16/9] bg-gray-700/60 flex items-center justify-center relative w-full' style={{ paddingTop: '60%' }}>
        <Image 
          src='/julie.png'
          alt="Julie Lavet"
          fill
          className='object-cover'
          priority
        />
      </div>

      {/* Quote */}
      <div className="flex flex-col justify-between min-h-[120px] h-full">
        <p className='text-white/90 text-sm sm:text-base leading-relaxed mb-2'>
          "We&apos;re incredibly excited to see where these students take their ideas next—and we&apos;d love to
          sponsor again next year!"
        </p>

        <div className="mt-auto">
          {/* Name */}
          <div className='text-white text-sm sm:text-base font-serif'>Julie Lavet</div>

          {/* Role + logo row */}
          <div className='flex items-center justify-between'>
            <div className='text-orange-500 text-sm sm:text-base'>Head of OpenAI EU Partnerships</div>
            <Link href="https://openai.com/" target="_blank">
              <Image
                src='/openai_logo.png' 
                alt='OpenAI logo'
                width={100}
                height={100}
                className='self-center p-2'
              />            
            </Link>

          </div>        
        </div>        
      </div>
    </div>
  )
}
