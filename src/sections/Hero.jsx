import Img1 from "/img/img1.png"
import Img2 from "/img/img1-xs.png"

const Hero = () => {
  return (
    <div className="mb-24">
      <div className="flex justify-center">
        <div className="w-full px-6 md:px-12">
          <img 
            src={Img1}
            className="hidden sm:block cursor-pointer" 
          />
          <img 
            src={Img2}
            className="sm:hidden cursor-pointer" 
          />
        </div>
      </div>

      <div className="mt-6 ml-6 md:ml-12 sm:text-center">
        <div className="font-medium cursor-pointer">Coming Soon</div>
        <div className="font-extrabold text-4xl cursor-pointer tracking-tighter md:text-6xl">NIKE AND AIR MAX DN</div>
        <p className="font-medium cursor-pointer mt-6">The next generation of Air technology launches on March 26th. Preview the full lineup of colourways now.</p>
        <button className="px-4 py-1.5 bg-black text-white font-bold rounded-full mt-6 hover:bg-black/65">Get Notified</button>
      </div>
    </div>
  )
}

export default Hero
