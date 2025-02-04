import styles from "../styles/cards.module.css";

const Cards = () => {
  const Listcards = [
    {
      id: 1,
      title: "Brand recognition",
      content:
        "Bosst your brand recognition with each click. Generic links dont mean a thing.Branded links help insil confidence in your content.",
      icon: "/Lading-Url-Shortly/images/icon-brand-recognition.svg",
    },
    {
      id: 2,
      title: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      icon: "/Lading-Url-Shortly/images/icon-detailed-records.svg",
    },
    {
      id: 3,
      title: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
      icon: "/Lading-Url-Shortly/images/icon-fully-customizable.svg",
    },
  ];
  return (
    <section className={styles.stadistics__cards}>
      <div className={styles.linev}></div>
      <div className={styles.lineh}></div>
      {Listcards?.map((c) => (
        <article key={c.id} className={styles.card}>
          <div className={styles.circle}>
            <img src={c.icon} alt="image card" />
          </div>
          <section>
            <h3>{c.title}</h3>
            <p className="paragraph-sm">{c.content}</p>
          </section>
        </article>
      ))}
    </section>
  );
};

export default Cards;
