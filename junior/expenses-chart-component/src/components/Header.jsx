import Logo from '/images/logo.svg'


const Header = () => {
  return (
    <header className="flex justify-between w-5/6 mx-auto max-w-3xl py-10 px-6 sm:px-12 rounded-2xl">
      <div className='flex flex-col gap-3 text-white'>
        <span className='font-light'>My balance</span>
        <p className='font-bold text-4xl'>$921.48</p>
      </div>
      <img src={Logo} alt="logo brand respect image" />
    </header>
  )
}

export default Header