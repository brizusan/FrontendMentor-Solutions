import { Button } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const Formulario = ({handleSubmit , email , setEmail}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row gap-4 w-8/12 lg:w-full max-w-md lg:items-center"
    >
      <div className="lg:w-4/6">
        <input
          className="py-1 px-4 rounded-md placeholder:text-sm w-full text-black"
          type="text"
          placeholder="mycorreo@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <Button color="red" type="submit">
        Contact Us
      </Button>
    </form>
  );
};

export default Formulario;
