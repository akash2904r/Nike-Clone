import { iconsOfAir } from "../constants"

const Icons = () => {
  return (
    <div className="ml-6 md:ml-12">
      <h2 className="text-2xl font-medium tracking-tight mb-8">Icons of Air</h2>

      <ul className="flex overflow-x-auto gap-3 mb-10">
        {iconsOfAir.map((item) => (
          <li key={item.title}>
            <div className="w-[310px] h-[400px] lg:w-[30vw] lg:h-[80vh] cursor-pointer">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full"
              />
            </div>
            <div className="font-medium text-xl mt-5 md:mt-10 tracking-tight mb-10 cursor-pointer">{item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Icons
