import Filters from "../components/Filters";
import ListCountries from "../components/ListCountries";

export default function Index() {
  
  return (
    <section className="space-y-10">
      <Filters />
      <ListCountries />
    </section>
  )
}
