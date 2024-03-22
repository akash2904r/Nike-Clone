import { useState } from 'react'
import { footLinks } from '../constants'
import { handleClick, checkClick } from '../utils'

const Links = () => {
  const updatedFootLinks = footLinks.map(item => (
    { ...item, isClicked: false }
  ))

  const [ulHeight, setUlHeight] = useState('half')
  const [liClicked, setLiClicked] = useState([...updatedFootLinks])

  return (
    <div className='ml-6 mt-24 mb-8 md:mx-12'>
      <ul 
        className='sm:grid sm:max-h-44 overflow-hidden ease-in-out duration-100 delay-1000 grid-cols-4 max-lg:gap-12 lg:justify-evenly lg:flex sm:hover:max-h-[380px]'
        onMouseEnter={() => {
          setTimeout(() => {
            setUlHeight('full')
          }, 1000);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setUlHeight('half')
          }, 1000);
        }}
      >
        {footLinks.map((item) => (
          <li key={item.title} className='max-sm:py-2'>
            <span 
              className='font-medium text-[17px] cursor-pointer'
              onClick={() => handleClick(item.title, liClicked, setLiClicked, updatedFootLinks)}
            >
              {item.title}
            </span>

            <ul className={`mt-5 flex-col sm:flex ${checkClick(item.title, liClicked) ? 'max-sm:px-5 opacity-100' : 'max-sm:hidden'}`}>
              {item.links.map((link) => (
                <li
                  key={link}
                  className={`text-[#7e7e7e] font-medium text-[17px] my-1 cursor-pointer ${ulHeight == 'half' ? 'truncate' : ''}`}
                >
                  <a 
                    href="/"
                    className='hover:text-black'
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Links
