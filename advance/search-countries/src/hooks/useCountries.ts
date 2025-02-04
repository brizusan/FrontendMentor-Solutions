import { useContext } from "react"
import { CountriesContext } from "../context/CountriesProvider"

export const useCountries = ()=>{
  const context = useContext(CountriesContext)
  if(!context) throw new Error('Utilizalo con el CountriesProvider')

  return context
}