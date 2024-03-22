import { memberBenefits } from "../constants"

const MemberBenefits = () => {
  return (
    <div className="ml-6 mt-24 md:ml-12">
      <h2 className="text-2xl font-medium tracking-tight mb-8">Member Benefits</h2>

      <ul className="flex overflow-x-auto gap-3 mb-10">
        {memberBenefits.map((item) => (
          <li key={item.buttonInfo} className="relative mb-7 cursor-pointer">
            <div className="max-lg:w-[325px] max-lg:h-[425px] lg:w-[50vh] lg:h-[35vw] xl:w-[30vw] xl:h-[40vw]">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full"
              />
            </div>
            <div className="absolute bottom-7 left-5 font-medium text-white lg:p-5">
              <div className="text-lg tracking-tight">{item.title}</div>
              <div className="text-2xl mb-7">{item.desc}</div>
              <button className="bg-white px-4 py-1.5 rounded-full font-semibold text-black text-[17px] hover:bg-gray-300">{item.buttonInfo}</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MemberBenefits
