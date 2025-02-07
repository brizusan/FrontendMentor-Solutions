/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";


const options = [
  { text: "Product discover and building what matters" },
  { text: "Measurin to ensure updates are a success" },
  { text: "And much more!" },
];

const Formulario = ({setDatos , setValidate , validate}) => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const obtenerDatos = (data) => {
    setDatos(data.email);
    resetField("email");
    setValidate(!validate)
  };
  return (
    <section className="flex flex-col gap-4 font-medium">
      <h1 className="font-black text-slate-950 text-4xl">Stay updated!</h1>
      <p className="text-slate-800">
        Joing 60,000+ product managers receiving monthly updates on:
      </p>
      <ul className="flex flex-col gap-3">
        {options.map((option, index) => (
          <li key={index} className="flex items-center gap-3">
            <AiFillCheckCircle color="orange" size={20} />
            <p className="text-slate-800">{option.text}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(obtenerDatos)}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xs font-bold text-slate-800">
            Email address
          </label>
          <input
            className="border py-3 pl-5 rounded-md"
            type="email"
            placeholder="email@company.com"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            })}
          />
          {errors.email?.type === "required" && (
            <small className="text-red-500 italic">Campo Obligatorio</small>
          )}
          {errors.email?.type === "pattern" && (
            <small className="text-red-500 italic">
              Ingrese un correo valido
            </small>
          )}
        </div>
        {errors.email?.type === "pattern" ? (
          <button
            className="bg-red-500 w-full py-3 mt-4 text-white font-medium rounded-md shadow shadow-amber-600"
            type="submit"
          >
            Suscribe to monthly newsletter
          </button>
        ) : (
          <button
            className="bg-slate-800 w-full py-3 mt-4 text-white font-medium rounded-md hover:bg-slate-700 transition-colors"
            type="submit"
          >
            Suscribe to monthly newsletter
          </button>
        )}
      </form>
    </section>
  );
};

export default Formulario;
