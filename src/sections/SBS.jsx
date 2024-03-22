import { shopBySport } from "../constants"

const SBS = () => {
  return (
    <div className="max-sm:mx-6 ml-6 mt-24 md:ml-12">
      <h2 className="text-2xl font-medium tracking-tight mb-8">Shop by Sport</h2>

      <div className="bg-gray-200 h-0.5 sm:hidden" />

      <ul className="sm:flex gap-5 overflow-x-auto">
        {shopBySport.map((item) => (
          <li key={item.sport} className="max-sm:flex flex-row-reverse justify-between items-center my-5 mb-10 cursor-pointer">
            <img 
              src={item.img}
              className="h-[110px] w-[110px] object-fill max-sm:rounded-lg sm:h-[50vh] sm:w-[70vw] lg:w-[30vw] lg:h-[45vh] max-w-[500px] cursor-pointer"
            />

            <div className="tracking-tight font-medium mb-7">
              <div className="text-gray-500 py-0.5 sm:text-black sm:text-xl sm:mt-3">{item.sport}</div>
              <p>{item.desc}</p>
            </div>

            <a 
              href="/"
              className="hidden font-medium border-b-2 border-black sm:inline hover:text-gray-500/80 hover:border-gray-500/80"
            >
              Shop
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SBS
