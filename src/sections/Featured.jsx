import { featured } from "../constants"

const Featured = () => {
  return (
    <div className="ml-6 mt-24 md:ml-12">
      <h2 className="text-2xl font-medium tracking-tight mb-8">Featured</h2>

      <ul className="flex overflow-x-auto gap-3 mb-10">
        {featured.map((item) => (
          <li key={item.title} className="relative mb-7 cursor-pointer">
            <div className="w-[325px] h-[425px] lg:w-[30vw] lg:h-[90vh]">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full"
              />
            </div>
            <div className="absolute bottom-7 left-5">
              <div className="font-medium text-white text-xl mb-7">{item.title}</div>
              <button className="bg-white px-4 py-1.5 rounded-full font-semibold text-[17px] hover:bg-gray-300">Shop</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Featured
