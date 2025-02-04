import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonial } from "../data";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 620 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel 
      responsive={responsive}
      infinite={true}
      showDots={true}
    >
      {testimonial?.map((test) => (
        <article key={test.id} className="flex flex-col gap-4 w-11/12 mx-auto">
          <img
            className="block mx-auto"
            src={test.img}
            alt="person image reference"
          />
          <section className="text-center pb-5">
            <h2 className="text-slate-800 font-semibold" >{test.name}</h2>
            <p className="paragraph py-5">{test.content}</p>
          </section>
        </article>
      ))}
    </Carousel>
  );
};

export default Slider;
