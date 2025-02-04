import Logo from "/images/logo.svg";
import styles from "../styles/navegacion.module.css";

const Navegacion = () => {
  const links = [
    { id: 1, name: "features" },
    { id: 2, name: "pricing" },
    { id: 3, name: "resources" },
  ];

  return (
    <nav className={styles.nav}>
      <a href="#">
        <img src={Logo} alt="Logo shortly reference" />
      </a>

      <ul className={styles.links}>
        {links?.map((l) => (
          <li key={l.id}>
            <a href="#">{l.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navegacion;
