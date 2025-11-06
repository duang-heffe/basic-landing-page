export default function HeroMap() {
  return (
    <div className='h-full flex items-start justify-end'>
      {/* Map scales down responsively but always stays in top right */}
      <div className='w-[70vw] sm:w-[65vw] lg:w-[55vw] xl:w-[50vw] max-w-[750px] h-auto'>
        <img 
          src="/europe_map.svg" 
          alt="Europe Map" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}

