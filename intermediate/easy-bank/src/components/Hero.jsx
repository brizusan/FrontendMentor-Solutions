import HeroImage from "/images/image-mockups.png";

const Hero = () => {
  return (
    <section className="hero lg:grid lg:grid-cols-2">
      <div className="hero__device lg:col-start-2 lg:row-start-1">
        <picture>
          <source
            srcSet="/easy-bank/images/image-mockups.png"
            media="(min-width: 800px)"
          />
          <img
            className="relative -top-28 block w-11/12 mx-auto max-w-md lg:max-w-4xl xl:-right-44"
            src={HeroImage}
            alt="intro image bg"
          />
        </picture>
      </div>

      <section className="w-11/12 mx-auto lg:max-w-md flex flex-col gap-4 self-center">
        <h1 className="text-4xl text-center lg:text-left font-medium">
          Next generation digital banking
        </h1>
        <p className="paragraph text-justify lg:m-0">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="flex justify-center lg:justify-start">
          <button className="btn">Request Invite</button>
        </div>
      </section>
    </section>
  );
};

export default Hero;
