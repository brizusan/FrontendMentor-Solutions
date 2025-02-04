import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
 
export default function MenuTabs() {
  const data = [
    {
      label: "Simple Nookmarking",
      value: "1",
      title:"Bookmark in on Click",
      desc: `Organize your bookmarks however you like.Our simple drag-and-drop interface gives you complete control over how you manage your favorites sites.`,
      img:"/bookmark-landing-page/images/illustration-features-tab-1.svg",
      action:false
    },
    {
      label: "Speedy Searching",
      value: "2",
      title:"Intelligent Search",
      desc: `Our powerful search feature will help you find saved sites in no time at all . No need to trawl through all of your bookmarks.`,
      img:"/bookmark-landing-page/images/illustration-features-tab-2.svg",
      action:true

    },
    {
      label: "Easy Sharing",
      value: "3",
      title : "Share your bookmarks",
      desc: `Easily your bookmarks and collections with others.Create a shareable link that you can send at the click of a button`,
      img:"/bookmark-landing-page/images/illustration-features-tab-3.svg",
      action:true

    }
  ];
 
  return (
    <Tabs  value="1">
      <TabsHeader className="my-10">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} className="lg:text-lg">
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc ,title , img, action }) => (
          <TabPanel key={value} value={value}>
            <article 
              className="text-lg flex flex-col gap-8 items-center lg:flex-row my-10"
            >
              <img 
                className="mx-auto block max-w-xs lg:max-w-2xl"
                src={img} 
                alt={`imagen-${title}`} />
              <div className="flex flex-col gap-3 items-center lg:max-w-md lg:items-start">
                <h2 className="text-gray-800 text-center text-2xl lg:text-justify">{title}</h2>
                <p className="text-gray-600 py-4 lg:text-justify">{desc}</p>
                {action && <Button>More Info</Button>}
              </div>
            </article>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}