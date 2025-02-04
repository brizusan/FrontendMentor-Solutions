import intro from "/images/illustration-intro.svg";

const Intro = () => {
  return (
    <section>
    <div className="contenedor lg:flex lg:flex-row-reverse lg:items-center">
      <img
        className="block mx-auto my-6"
        src={intro}
        alt="intro data section img reference"
      />

      <section className="flex flex-col gap-4 text-center my-5 max-w-lg mx-auto lg:text-left">
        <h1 className="title lg:text-left">
          Bring everyone together to build better products.
        </h1>
        <p className="paragraph">
          Manage makes it simple for software teams to plan day-to-day
          tasks while keeping the larger team goals in views
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="cta">get started</button>
        </div>
      </section>
    </div>
  </section>
  )
}

export default Intro