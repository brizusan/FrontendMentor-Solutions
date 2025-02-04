import { useLoaderData, useNavigate} from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getCountry } from "../api/countries";
import { Countrie } from "../types/countries";
import { formatList, formatNumber } from "../utils";
import { useCountries } from "../hooks/useCountries";


export async function loader({ params }: LoaderFunctionArgs){
  const { nameCountry} = params
  const name =nameCountry?.toLowerCase();

  const pais = await getCountry(name as string);

  if (pais === undefined) {
    throw new Response("", {
      status: 404,
      statusText: "No se encuentra los datos",
    });
  }
  return pais[0];
}

export default function PageCountry() {
  const navigate = useNavigate();
  const pais: unknown = useLoaderData();

  const country = pais as Countrie;

  const { countries } = useCountries();

  const borderCountries = countries.filter((c) =>
    country.borders?.includes(c.cioc)
  );

  return (
    <section className="space-y-10">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 transition-all px-6 py-2 rounded hover:bg-gray-100 shadow dark:shadow-gray-700 dark:hover:bg-slate-700"
      >
        <FaArrowLeft />
        <p className="font-semibold">Back</p>
      </button>

      <article className="flex flex-col lg:flex-row lg:items-center gap-10 md:gap-20">
        <img
          src={country?.flags?.svg}
          alt={country?.flags?.alt}
          className="max-w-[600px] h-auto w-full"
        />

        <div className="space-y-4">
          <h2 className="text-xl font-bold">{country?.name?.common}</h2>
          <div className="space-y-2">
            <p className="font-semibold">
              Native Official:{" "}
              <span className="font-normal dark:text-gray-200">
                {country?.name?.official}
              </span>
            </p>
            <p className="font-semibold">
              Population:{" "}
              <span className="font-normal dark:text-gray-200">
                {formatNumber(country?.population)}
              </span>
            </p>
            <p className="font-semibold">
              Region:{" "}
              <span className="font-normal dark:text-gray-200">
                {country?.region}
              </span>
            </p>
            <p className="font-semibold">
              Subregion:{" "}
              <span className="font-normal dark:text-gray-200">
                {country?.subregion}
              </span>
            </p>
            <p className="font-semibold">
              Capital:{" "}
              <span className="font-normal dark:text-gray-200">
                {country?.capital}
              </span>
            </p>
          </div>
          <div>
            <p className="font-semibold">
              Top Level Domain:{" "}
              <span className="font-normal dark:text-gray-200">
                {country?.tld}
              </span>
            </p>
            <p className="font-semibold">
              Currencies:{" "}
              <span className="font-normal dark:text-gray-200">
                {formatList(
                  Object.values(country?.currencies).map((c) => c.name)
                )}
              </span>
            </p>
            <p className="font-semibold">
              Languajes:{" "}
              <span className="font-normal dark:text-gray-200">
                {formatList(
                  Object.values(country?.languages).map((c) =>
                    c.split(" ").join(",")
                  )
                )}
              </span>   
            </p>
          </div>
          {borderCountries.length > 0 && (
            <ul className="font-semibold flex items-center flex-wrap gap-5 text-lg">
              <p className="">Border Countries:</p>{" "}
              {borderCountries.map((c) => (
                <li
                  key={c.cca3}
                  className="px-3 py-1 rounded shadow dark:bg-slate-700"
                >
                  {c.name.common}
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </section>
  );
}
