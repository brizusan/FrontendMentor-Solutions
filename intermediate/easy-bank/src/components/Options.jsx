import { options } from "../data";

const Options = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-100 ">
      <div className="wrapper">
        <h2 className="text-center md:text-left text-3xl text-slate-800 font-medium">
          Why choose Easybank?
        </h2>
        <p className="paragraph text-center my-4 md:text-left md:pt-5 md:m-0">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <section className="grilla pt-20 justify-items-center gap-10 xl:gap-5 wrapper">
        {options?.map((option) => (
          <article
            key={option.id}
            className="option flex flex-col gap-4 items-center lg:items-start"
          >
            <img src={option.image} alt={`image reference ${option.title}`} />
            <h2 className="text-slate-800 text-2xl md:text-left">
              {option.title}
            </h2>
            <p className="paragraph text-center md:text-left">
              {option.content}
            </p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Options;
