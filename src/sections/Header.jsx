import Jordan from '/svg/jordan.svg'

const Header = () => {
  return (
    <header className='hidden lg:flex justify-between items-center px-12 bg-gray-100 py-1'>
      <div className='h-6 w-6'>
        <img src={Jordan} className='cursor-pointer' />
      </div>
      <div className='text-[13px] font-semibold flex gap-2'>
        <div>
          <a href="/">Find a Store</a>
          <span className='ml-2'>|</span>
        </div>
        <div>
          <a href="/">Help</a>
          <span className='ml-2'>|</span>
        </div>
        <div>
          <a href="/">Join Us</a>
          <span className='ml-2'>|</span>
        </div>
        <div>
          <a href="/">Sign In</a>
       </div>
      </div>
    </header>
  )
}

export default Header
