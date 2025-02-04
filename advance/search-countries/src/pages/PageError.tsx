import { useRouteError } from "react-router-dom";
import Page404 from "/img/404.jpg";
import { Error } from "../types/error";

export default function PageError() {
  const error:unknown= useRouteError();
  const valorError =  error as Error

  return (
    <section className="container mx-auto w-5/6 ">
      <div className="grid place-content-center gap-10">
        <h2 className="text-center text-red-600 my-16 text-2xl font-bold">
          {valorError.statusText}
        </h2>
        <img src={Page404} alt="not found Page" className="w-96 block" />
      </div>
    </section>
  );
}
