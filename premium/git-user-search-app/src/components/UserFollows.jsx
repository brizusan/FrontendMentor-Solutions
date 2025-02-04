const UserFollows = ({user}) => {
  const { followers , public_repos , following} = user
  return (
    <section className="text-xs md:text-base bg-slate-300/30 dark:bg-slate-800 dark:text-white p-4 rounded-lg md:col-start-2 md:col-end-4">
      <ul className="flex justify-between">
        <li className="flex flex-col gap-1">
          Repo{" "}
          <span className="text-center text-base md:text-xl font-bold text-black dark:text-white">
            {public_repos}
          </span>
        </li>
        <li className="flex flex-col gap-1">
          Followers{" "}
          <span className="text-center text-base md:text-xl font-bold text-black dark:text-white">
            {followers}
          </span>
        </li>
        <li className="flex flex-col gap-1">
          Following{" "}
          <span className="text-center text-base md:text-xl font-bold text-black dark:text-white">
            {following}
          </span>
        </li>
      </ul>
    </section>
  );
};

export default UserFollows;
