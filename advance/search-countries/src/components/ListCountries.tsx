import { useCountries } from "../hooks/useCountries";
import CardCountrie from "./CardCountrie";

export default function ListCountries() {
  const { countries, isValidCountry } = useCountries();

  const isEmpty = countries.length === 0;

  return (
    <>
      {isValidCountry && !isEmpty ? (
        <section className="grid md:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
          {countries.map((pais) => (
            <CardCountrie key={pais.cca2} pais={pais} />
          ))}
        </section>
      ) : (
        <p className="text-center text-red-600 font-bold text-2xl">
          No tenemos registros
        </p>
      )}
    </>
  );
}
