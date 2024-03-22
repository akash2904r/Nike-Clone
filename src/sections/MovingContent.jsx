const MovingContent = () => {
  return (
    <div className='bg-gray-100 flex text-center justify-center items-center py-1 overflow-hidden h-20'>
      <div className="relative h-full max-sm:animate-slider1 sm:animate-slider2 min-[1000px]:animate-slider3">
        <div className="h-full">
          <p className="font-medium tracking-tight">Move,   Shop, Customise & Celebrate With Us.</p>
          <p className="text-sm tracking-tighter">No matter   what you feel like doing today, It's better as a   Member.</p>
          <a 
            href="/" 
            className="underline text-xs font-bold"
          >
            Join Us
          </a>
        </div>
        <div className="absolute flex flex-col justify-center h-full top-0 -right-[100vw] text-center">
          <p className="font-medium tracking-tight">Save up to 40%</p>
          <a 
            href="/" 
            className="underline text-xs font-bold"
          >
            Shop All Our New Markdowns
          </a>
        </div>
      </div>
    </div>
  )
}

export default MovingContent
