import { BsSearch } from "react-icons/bs";

const Formulario = ({ query, setQuery, handleSubmit, error }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white shadow-md shadow-blue-100 flex gap-5 py-3 px-4 rounded-lg dark:bg-slate-900 dark:shadow-none relative ${error && 'pb-7'}`}
    >
      {error  && <small className="text-red-600 font-semibold absolute z-30 bottom-1 left-5">Ingrese un usuario</small>}
      <div className="relative flex-1 dark:text-white">
        <input
          className={`py-2 pl-10 w-full outline-blue-400 rounded-md placeholder:text-slate-400 dark:bg-slate-900 
          dark:border dark:outline-none dark:text-white ${error ? 'border border-red-600' :'dark:border-white' }`}
          type="text"
          placeholder="Search Github username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <BsSearch className="absolute top-3 left-3" color={error && 'red'}/>
      </div>
    
      <button
        className="bg-blue-500 shadow text-white py-2 px-4 rounded-lg hover:bg-blue-400 transition-all"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default Formulario;
