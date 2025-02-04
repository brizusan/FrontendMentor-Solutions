import { Button } from "@material-tailwind/react"


const Cards = () => {

  const data = [
    {
      image:"/bookmark-landing-page/images/logo-chrome.svg",
      title:"Chrome",
      version:"62"
    },
    {
      image:"/bookmark-landing-page/images/logo-firefox.svg",
      title:"Firefox",
      version:"55"
    },
    {
      image:"/bookmark-landing-page/images/logo-opera.svg",
      title:"Opera",
      version:"46"
    }
  ]

  return (
    <>
      { data?.map( d=>(
        <article key={d.title} 
        className="card flex flex-col gap-3 items-center shadow xl:shadow-md w-10/12 mx-auto py-6 rounded-lg bg-white">
          <div className="px-4 flex flex-col gap-3 items-center">
            <img src={d.image} alt={`browser-${d.title}`} />
            <h2 className="font-bold">Add to {d.title}</h2>
            <small className="text-gray-500">Minimun version {d.version}</small>
          </div>
          <div className="dots w-full my-2">
          </div>
          <Button className="mt-2">Add & Install Extension</Button>
        </article>
      ))}
    </>
  )
}

export default Cards