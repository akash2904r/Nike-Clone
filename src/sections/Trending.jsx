import Trending1 from "/img/trending-xs.jpg"
import Trending2 from "/img/trending.jpg"

const Trending = () => {
  return (
    <div className="mx-6 mt-24 md:mx-12">
      <h3 className="hidden text-2xl font-medium tracking-tight mb-8 sm:block">Trending</h3>

      <div>
        <img src={Trending1} className="sm:hidden cursor-pointer" />
        <img src={Trending2} className="hidden sm:block cursor-pointer" />
      </div>

      <div className="mt-6 sm:text-center">
        <div className="font-medium cursor-pointer">Just In</div>
        <div className="font-extrabold text-4xl tracking-tighter md:text-6xl cursor-pointer">AJI HIGH OG 'BLACK & WHITE'</div>
        <p className="font-medium mt-6 cursor-pointer">Suit up and show up int this iconic colorway. Inspired by MJ's all buisness attitude, you're ready to make moves.</p>
        <button className="px-4 py-1.5 bg-black text-white font-bold rounded-full mt-6 hover:bg-black/65">Shop</button>
      </div>
    </div>
  )
}

export default Trending
