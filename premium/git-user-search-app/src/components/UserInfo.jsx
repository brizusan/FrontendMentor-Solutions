import { formatearFecha } from "../utils";


const UserInfo = ({user}) => {
  const {avatar_url , login , created_at , name , html_url} = user
  return (
    <header className="flex items-center md:items-start gap-5 dark:text-white md:col-start-1 md:col-end-4 ">
    <img
      className="rounded-full w-24 md:w-32"
      src={avatar_url}
      alt="reference image user"
    />
    <div className="md:flex  md:justify-between md:w-full">
      <div className="md:pl-5">
        <h1 className="font-bold text-black dark:text-white md:text-2xl ">
          {name}
        </h1>
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600"
        >
          @{login}
        </a>
      </div>
      <p className="pt-3 md:p-0">
        Joined {formatearFecha(created_at)}
      </p>
    </div>
  </header>
  )
}

export default UserInfo