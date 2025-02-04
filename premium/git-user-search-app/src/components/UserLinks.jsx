import { ImLocation } from "react-icons/im";
import { BiLink } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

const UserLinks = ({ user }) => {
  const { location, blog, twitter_username, company } = user;
  return (
    <footer className="text-sm md:text-base md:col-start-2 md:col-end-4">
      <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-2">
        <li
          className={`flex items-center gap-3 ${
            location !== null && "text-blue-900 dark:text-white"
          }`}
        >
          <ImLocation fontSize={20} className="" />{" "}
          {location === null ? "Not Avaliable" : location}
        </li>
        <li
          className={`flex items-center gap-3 ${
            blog !== '' && "text-blue-900 dark:text-white"
          }`}
        >
          <BiLink fontSize={20} />{" "}

          {
            blog !=='' ? <a href={blog} target="_blank" rel="noreferrer">{blog}</a> : 'Not Avaliable'
          }
        </li>
        <li
          className={`flex items-center gap-3 ${
            twitter_username !== null && "text-blue-900 dark:text-white"
          }`}
        >
          <FaTwitter fontSize={20} />{" "}
          {twitter_username === null ? (
            "Not Avaliable"
          ) : (
            <a
              href={`https://twitter.com/${twitter_username}`}
              target="_blank"
              rel="noreferrer"
            >
              {twitter_username}
            </a>
          )}
        </li>
        <li
          className={`flex items-center gap-3 ${
            company !== null && "text-blue-900 dark:text-white"
          }`}
        >
          <MdHomeWork fontSize={20} />{" "}
          {company === null ? "Not Avaliable" : company}
        </li>
      </ul>
    </footer>
  );
};

export default UserLinks;
