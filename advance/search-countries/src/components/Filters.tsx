import { regions } from "../data";
import { FiSearch } from "react-icons/fi";
import { useCountries } from "../hooks/useCountries";
import { useId } from "react";

export default function Filters() {
  const {filters , setFilters} =useCountries()  
  const regionID = useId();


  const handleFilters = (e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({...filters ,
      [e.target.name]:e.target.value
    })
  };
  return (
    <form className="flex justify-between items-center">
      <div className="relative max-w-[320px]">
        <input
          type="text"
          name="country"
          placeholder="search for a country..."
          className="py-2 w-full pl-9 shadow font-semibold dark:text-white dark:bg-gray-700"
          onChange={handleFilters}
          value={filters.country}
        />
        <FiSearch className="dark:text-gray-600 absolute top-3 left-3" />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor={regionID} className="font-semibold">
          Region:
        </label>
        <select
          id={regionID}
          name="region"
          className="w-[120px] text-center font-semibold py-1 rounded border shadow dark:text-white dark:bg-gray-700 dark:border-gray-700"
          onChange={handleFilters}
        >
          <option value="all"> -- all ---</option>
          {regions.map((region) => (
            <option key={region.id} value={region.name.toLowerCase()}>
              {region.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}
