import GearUp1 from "/img/gearUp-xs.jpg"
import GearUp2 from "/img/gearUp.jpg"

const GearUp = () => {
  return (
    <div className="mx-6 mt-24 md:mx-12">
      <h3 className="text-2xl font-medium tracking-tight mb-8">Gear Up</h3>

      <div>
        <img src={GearUp1} className="sm:hidden cursor-pointer" />
        <img src={GearUp2} className="hidden sm:block cursor-pointer" />
      </div>

      <div className="mt-6 sm:text-center">
        <div className="font-extrabold text-4xl tracking-tighter md:text-6xl cursor-pointer">LBJ X LFC</div>
        <p className="font-medium mt-6 cursor-pointer">From L.A. to Liverpool, two icons collide.</p>
        <button className="px-4 py-1.5 bg-black text-white font-bold rounded-full mt-6 hover:bg-black/65">Shop</button>
      </div>
    </div>
  )
}

export default GearUp
