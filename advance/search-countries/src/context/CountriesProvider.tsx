import React, {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getCountries } from "../api/countries";
import type { Countrie } from "../types/countries";
import type { Filters } from "../types/filters";

type CountriesContextProps = {
  countries: Countrie[];
  isValidCountry: boolean;
  filters: Filters;
  setFilters: Dispatch<React.SetStateAction<Filters>>;
};

export const CountriesContext = createContext<CountriesContextProps>(
  {} as CountriesContextProps
);

type ProviderProps = {
  children: ReactNode;
};

const CountriesProvider = ({ children }: ProviderProps) => {
  const [countries, setCountries] = useState<Countrie[]>([]);
  const [filters, setFilters] = useState({
    country: "",
    region: "",
  });

  useEffect(() => {
    const obtenerPaises = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    obtenerPaises();
  }, [setCountries]);

  const isValidCountry = useMemo(() => countries.length > 0, [countries]);

  const filtersByCountry =
    filters.country !== "" && filters.country.length > 0
      ? countries.filter((pais) =>
          pais.name.common.toLowerCase().includes(filters.country)
        )
      : countries;

  const filterByRegion = useMemo(
    () =>
      filters.region
        ? [...filtersByCountry].filter((pais) => {
            return (
              pais.region.toLowerCase() === filters.region ||
              filters.region == "all"
            );
          })
        : filtersByCountry,
    [filters.region, filtersByCountry]
  );

  return (
    <CountriesContext.Provider
      value={{ countries: filterByRegion, isValidCountry, filters, setFilters }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
