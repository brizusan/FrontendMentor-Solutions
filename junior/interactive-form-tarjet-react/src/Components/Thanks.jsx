import Complete from '/images/icon-complete.svg';

const Thanks = ({setValidate,limpiar}) => {
  return (
    <section className="thanks flex flex-col justify-center items-center gap-4 mx-auto max-w-sm xl:w-full">
      <img src={Complete} alt="icon complete form thanks" />
      <h1 className="text-slate-700 text-3xl uppercase tracking-widest pt-4">
        Thank You!
      </h1>
      <p className="text-gray-400 tracking-wide">
        We've added your card details
      </p>
      <button
        onClick={()=>{
          setValidate(false)
          limpiar()
          }
        }
        type="submit"
        className="mt-5 py-3 bg-slate-900 w-full hover:bg-slate-800 text-white tracking-wider rounded-lg">
        Confirm
      </button>
    </section>
  );
};

export default Thanks;
