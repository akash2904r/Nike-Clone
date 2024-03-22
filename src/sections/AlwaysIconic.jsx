import { alwaysIconic } from "../constants"

const AlwaysIconic = () => {
  return (
    <div className="ml-6 mt-24 md:mx-12">
      <h2 className="text-2xl font-medium tracking-tight mb-8">Always Iconic</h2>

      <ul className="flex overflow-x-auto gap-3 mb-10">
        {alwaysIconic.map((item, i) => (
          <li key={item.title} className="relative cursor-pointer transition-transform">
            <div className="peer w-[330px] h-[330px] lg:w-[300px] lg:h-[300px]">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full"
              />
            </div>
            <div className="font-medium text-lg text-gray-500/80 mt-5 tracking-tight mb-10">{item.title}</div>
            <span className="hidden text-white px-3.5 py-1 bg-black/40 rounded-full absolute top-5 right-5 lg:top-12 lg:right-12 sm:peer-hover:block">{`${i+1}/7`}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AlwaysIconic
