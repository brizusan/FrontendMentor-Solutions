import CardLogo from '/images/card-logo.svg';
import {format} from 'date-fns'


const Header = ({name,number,fecha,codigo}) => {
  return (
    <header >
        <div className="contenedor">
          <div className="card-back">
            <input className="label absolute 
               bg-transparent text-white placeholder:text-white" 
              type="number"
              placeholder="000"
              readOnly
              disabled
              value={codigo}
              />
          </div>
          <div className="card-front">
            <img  className='pl-5 pt-3' src={CardLogo} alt="image logo card" />
            <input
              className='padding-4 text-lg text-white placeholder:text-white bg-transparent pl-5 pt-8' 
              type="text"
              value={number}
              placeholder='0000 0000 0000 0000'
              readOnly
              disabled
              />
            <div className='flex text-xs justify-between pt-3 pl-5 md'>
              <input type="text"
                className='text-white placeholder:text-white uppercase tracking-widest bg-transparent' 
                placeholder='cesar zubilete'
                value={name}
                readOnly
                disabled />
              <input type="text" 
                className='text-white placeholder:text-white bg-transparent  w-14'
                placeholder='00/00'
                disabled
                readOnly
                value={format(new Date(fecha), "yy/MM")}
                />
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header