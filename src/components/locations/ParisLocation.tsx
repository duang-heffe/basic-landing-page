import Image from "next/image";
import Link from "next/link";

export default function ParisLocation() {
  return (
    <div className='flex flex-col lg:mt-25'>    
      <a
        href="https://www.essec.edu/en/campus/paris-cergy/"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >
        <div className="flex justify-between p-3 bg-[var(--color-blue)]">
          <div className='text-white font-serif text-2xl'>/Paris</div>
          <div className="self-center">
            <Image
              src="/external-link-icon.svg"
              alt="File buttons"
              width={30}
              height={30}
            />
          </div>          
        </div>
        <div className="relative w-full" style={{ paddingTop: '80%' }}>
          <Image
            src="/france_location.png"
            alt="Essec Business School"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="font-light bg-white p-3 text-lg">
          <div className="font-bold">Essec Business School</div>
          <div>300 Hackers</div>
        </div>
      </a>    
    </div>
  )
}
