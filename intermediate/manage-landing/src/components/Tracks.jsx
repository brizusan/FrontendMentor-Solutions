
const Tracks = () => {
  
  const tracks = [
    {
      id:1 , 
      title:"Track company-wide progress",
      content:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the big ger picture again."
    },
    {
      id:2 , 
      title:"Advanced built-in reports",
      content:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
    },
    {
      id:3 , 
      title:"Everything you need in one place",
      content:"Stop jumping from one service to another to communicate, store files,track tasks and share documents. Manage offers an in-one team productivity solution."
    }

  ]

  return (
    <section className="contenedor my-10 lg:grid lg:grid-cols-2">
      <article className="text-center max-w-md mx-auto lg:my-10 lg:text-left">
        <h2 className="subtitle lg:text-left">
          What’s different about Manage?
        </h2>
        <p className="paragraph pt-6">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </article>
      <section className="grid gap-8 my-10">
        {tracks?.map((t) => (
          <article key={t.id} className="max-w-lg mx-auto">
            <div className="flex items-center gap-3 bg-red-100 lg:bg-inherit rounded-3xl">
              <span className="bg-orange-500 text-white font-bold py-2 px-6 rounded-3xl">
                0{t.id}
              </span>
              <h2 className="title-sm">{t.title}</h2>
            </div>
            <p className="paragraph pt-4 lg:ml-20">{t.content}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Tracks;
