import Image from "next/image";

export default function SwedenLocation() {
  return (
    <div className='flex flex-col lg:mt-50'>
      <a
        href="https://www.norrsken.org/houses/stockholm"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      >       
        <div className="flex justify-between p-3 bg-[var(--color-blue)]">
          <div className='text-white font-serif text-2xl'>/Sweden</div>
          {/* window buttons */}
          <div className="self-center">
            <Image
              src="/file-buttons.png"
              alt="File buttons"
              width={50}
              height={50}
            />
          </div>
        </div>
        <div className="relative w-full" style={{ paddingTop: '80%' }}>
          <Image
            src="/sweden_location.png"
            alt="Norrsken House"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="font-light bg-white p-3 text-lg">
          <div className="font-bold">Norrsken House</div>
          <div>300 Hackers</div>
        </div>
      </a>
    </div>
  )
}
