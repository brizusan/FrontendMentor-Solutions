import { articles } from "../data";


const Articles = () => {
  return (
    <section className="my-20 wrapper">
        <h2 className="text-center lg:text-left text-3xl text-slate-800 font-medium pb-10">
          Latest Articles
        </h2>

        <section className="grilla justify-items-center gap-10">
          {articles?.map((article) => (
            <article className="card shadow" key={article.id}>
              <img
                className="object-cover"
                src={article.image}
                alt="image article"
              />
              <section className="text-gray-500 flex flex-col gap-3 py-5 px-4 md:py-6 md:px-8">
                <small>By {article.name}</small>
                <h2 className="text-slate-900 font-medium text-2xl ">
                  {article.subtitle}
                </h2>
                <p>{article.content}</p>
              </section>
            </article>
          ))}
        </section>
      </section>
  )
}

export default Articles