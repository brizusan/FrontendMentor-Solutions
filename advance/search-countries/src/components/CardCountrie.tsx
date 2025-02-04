import { Link } from "react-router-dom";
import type { Countrie } from "../types/countries";
import { formatNumber } from "../utils";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


type CardProps = {
  pais: Countrie;
};

export default function CardCountrie({ pais }: CardProps) {
  return (
    <div className="border dark:border-transparent  shadow dark:shadow-gray-900 rounded-md
     overflow-hidden max-w-[350px]">
      <LazyLoadImage
        src={pais.flags.svg}
        alt={pais.flags.alt}
        className="object-cover object-center aspect-auto h-[200px] w-[350px] lg:w-full "
        effect="blur"
      />
      <div className="space-y-2 p-4">
        <Link to={`countries/${pais.name.common}`} 
         className="text-lg font-bold hover:text-red-500"
        >{pais.name.common}</Link>
        <div>
          <p className="font-bold">
            Population: <span className="font-normal">{formatNumber(pais.population)}</span>
          </p>
          <p className="font-bold">
            Region: <span className="font-normal">{pais.region}</span>
          </p>
          <p className="font-bold">
            Capital: <span className="font-normal">{pais.capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
