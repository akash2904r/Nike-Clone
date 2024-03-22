import { useState } from "react"
import { footerLinks, footerIcons, finalLinks } from "../constants"
import { handleClick, checkClick } from '../utils'

const Footer = () => {
  const updatedFL = footerLinks.map((item) => (
    { ...item, isClicked: false }
  ))

  const [titleClicked, setTitleClicked] = useState([...updatedFL])

  return (
    <div className='bg-black text-white px-4 md:px-8'>
      <div className="sm:flex justify-between">
        <ul className="pt-4 mx-2 sm:grid grid-cols-3 gap-3 md:gap-6 md:mx-4 lg:gap-10">
          {footerLinks.map((item, i) => (
            <li key={i} className="max-sm:cursor-pointer">
              <div className={`${i != 0 ? 'flex justify-between items-center' : ''}`}>
                <div
                  className={`tracking-tighter font-semibold cursor-pointer mt-3 sm:mb-1.5 text-sm
                  ${i == 0 ? 'mb-3.5'
                      : checkClick(item.title, titleClicked) ? 'mb-3.5' : 'mb-5'
                    }`}
                  onClick={() => handleClick(item.title, titleClicked, setTitleClicked, updatedFL)}
                >
                  {item.title}
                </div>

                {
                  i == 0
                    ? <div className="mb-2 tracking-tighter font-semibold text-sm">
                      <div className="mb-1.5 sm:mb-0.5 cursor-pointer">BECOME A MEMBER</div>
                      <div className="cursor-pointer">Send Us Feedback</div>
                    </div>
                    : <img
                      src={checkClick(item.title, titleClicked) ? "/svg/minus.svg" : "/svg/plus.svg"}
                      alt="plus"
                      className="sm:hidden"
                    />
                }
              </div>

              <div className={`mb-3 sm:block ${checkClick(item.title, titleClicked) ? 'block' : 'hidden'}`}>
                <ul className="text-sm mt-2">
                  {item.links &&
                    item.links.map((link) => (
                      <li
                        key={link}
                        className="py-1 text-gray-400/75 font-medium cursor-pointer sm:py-2 hover:text-white"
                      >
                        {link}
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className={`bg-gray-200/15 h-0.5 sm:hidden 
              ${checkClick(item.title, titleClicked)
                  ? 'block'
                  : item.title == 'FIND A STORE'
                    ? 'block'
                    : 'hidden'
                }`}
              />
            </li>
          ))}
        </ul>

        <ul className="flex gap-4 mx-2 mt-7 mb-10 flex-wrap h-fit">
          {footerIcons.map((item) => (
            <li key={item.title} className="cursor-pointer">
              <img
                src={item.icon}
                alt={item.title}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-2 sm:flex items-center justify-between">
        <div className="sm:flex items-center gap-x-2 text-sm tracking-tight">
          <img 
            src="/svg/location.svg" 
            alt="location" 
            className="inline"
          />
          <span>India</span>
          <p className="text-xs sm:ml-5 max-sm:mt-3 max-sm:mb-5 mr-5 text-[#7e7e7e] font-medium">&copy; 2023 Nike, Inc. All Rights Reserved</p>
        </div>

        <ul className="max-sm:pb-4 text-[13px] text-[#7e7e7e] font-medium sm:flex items-center gap-x-5 flex-wrap">
          {finalLinks.map((item) => (
            <li
              key={item.link}
              className="py-3.5 cursor-pointer hover:text-white"
            >
              {item.link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
