import Logo from '/images/logo.svg'
import hamburguer from '/images/icon-hamburger.svg'
import close from '/images/icon-close.svg'
import { links } from '../data'

const Header = ({menu , setMenu}) => {
  return (
    <header className='py-6 bg-white shadow z-50 relative  md:sticky md:top-0'>
        <nav className='wrapper flex justify-between items-center'>
          <a href="#">
            <img src={Logo} alt="easybank brand image" />
          </a>

          <div className='nav__icons cursor-pointer'>
            <img 
              className={`${!menu ? 'flex' : 'hidden'}`}
              src={hamburguer} 
              alt="icon hamburguer"
              onClick={()=>setMenu(!menu)}  
            />
            <img 
              className={`${menu ? 'flex' : 'hidden'}`}
              src={close} 
              alt="icon close"
              onClick={()=>setMenu(!menu)} 
            />
          </div>

          <ul className={`nav__links absolute shadow md:shadow-none bg-white top-24 left-0 right-0 w-11/12 mx-auto rounded-md ${!menu ? 'hidden' : 'flex'} flex-col gap-4 md:gap-6 xl:gap-8 items-center py-8 text-lg`}>
           {
            links?.map( l=>(
              <li key={l.id}>
                <a className='text-slate-800 hover:underline' href={l.url}>{l.name}</a>
              </li>
            ))
           }
          </ul>

          <div className='nav__btn '>
            <button className='btn w-40'>Request Invite</button>
          </div>
        </nav>
      </header>
  )
}

export default Header