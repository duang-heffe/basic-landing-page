import Image from "next/image";

export default function DublinLocation() {
  return (
    <div className='flex flex-col'>
      <a
        href="https://www.visittrinity.ie/venue/trinity-business-school/"
        target="_blank"
        rel="noopener noreferrer"
        className=""
      > 
        <div className="flex justify-between p-3 bg-[var(--color-blue)]">
          <div className='text-white font-serif text-2xl'>/Dublin</div>
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
            src="/dublin_location.png"
            alt="Trinity Business School"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="font-light bg-white p-3 text-lg">
          <div className="font-bold">Trinity Business School</div>
          <div>400 Hackers</div>
        </div>
      </a>
    </div>
  )
}
