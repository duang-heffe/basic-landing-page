import Image from "next/image";

export default function ParisLocation() {
  return (
    <div className='flex flex-col mt-25'>
      <div className="flex justify-between p-3 bg-[var(--color-blue)]">
        <div className='text-white font-serif text-2xl'>/Paris</div>
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
    </div>
  )
}
