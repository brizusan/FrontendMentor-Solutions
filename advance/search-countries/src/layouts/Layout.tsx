import {Outlet} from "react-router-dom"
import ToggleTheme from "../components/ToogleTheme"

export default function Layout() {
  return (
    <>
      <header className="bg-white dark:bg-gray-700 shadow border-b dark:border-slate-800">
        <div className="max-w-7xl mx-auto w-5/6 lg:w-full flex items-center justify-between py-4">
        <h3 className="font-bold">Where in the World</h3>
        <ToggleTheme />

        </div>
      </header>
      <main className="max-w-7xl mx-auto w-11/12 lg:w-full my-12">
        <Outlet />
      </main>
    </>
  )
}
