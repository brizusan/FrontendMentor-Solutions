// import { user as usuario } from "../data/user";

import UserLinks from "./UserLinks";
import UserFollows from "./UserFollows";
import UserInfo from "./UserInfo";


const User = ({user}) => {
  // const [user] = useState(usuario);

  return (
    
    <section className="flex flex-col gap-6 md:gap-10 bg-white shadow-md shadow-blue-100 rounded-lg dark:bg-slate-900 dark:shadow-none py-8 px-6 md:p-10 text-slate-400 mt-5 grilla md:relative">
      <UserInfo user={user}/>
      <p className="dark:text-white md:col-start-2 md:col-end-4 md:absolute md:top-32 line-clamp-3 max-w-lg">
        {user.bio === null ? "This profile has no bio." : user.bio}
      </p>
      <UserFollows user={user}/>

      <UserLinks user={user} />
    </section>
  );
};

export default User;
