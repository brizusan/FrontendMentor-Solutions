import Image from "/assets/images/icon-success.svg";

const Thanks = ({ datos, setValidate }) => {
  return (
    <section className="flex flex-col justify-between  h-[400px]">
      <div className="flex flex-col gap-6">
        <img className="w-20" src={Image} alt="" />
        <h1 className="text-4xl text-slate-900 font-black">
          Thanks for suscribing!
        </h1>
        <p className="text-slate-800">
          A confirmation email has benn sen to{" "}
          <strong className="font-semibold">{datos}</strong>.Please open it and
          click the button inside to confirm your subscription
        </p>
      </div>
      <div>
        <button 
          className="bg-slate-800 sm:bg-red-500 sm:shadow-md sm:shadow-amber-600 w-full py-3 text-white font-medium rounded-md"
          onClick={()=>setValidate(false)}  
        >
          Dismiss message
        </button>
      </div>
    </section>
  );
};

export default Thanks;
