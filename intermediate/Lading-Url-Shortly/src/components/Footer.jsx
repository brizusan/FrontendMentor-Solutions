import Logo2 from "/images/logo-m.svg";
import Facebook from "/images/icon-facebook.svg";
import Twitter from "/images/icon-twitter.svg";
import Pinterest from "/images/icon-pinterest.svg";
import Insta from "/images/icon-instagram.svg";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.bg}>
      <div className={`${styles.grid} container `}>
        <img className={styles.img} src={Logo2} alt="logo footer boost shortly" />
        <nav className={styles.navegacion}>
          <ul className={styles.links}>
            <strong>Features</strong> 
            <li>
              <a href="#">Link Shortening</a>
            </li>
            <li>
              <a href="#">Branded Links</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
          </ul>
          <ul className={styles.links}>
            <strong>Resources</strong>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <ul className={styles.links}>
            <strong>Company</strong>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>

        <section className={styles.socials}>
          <a href="#">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="#">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={Pinterest} alt="pinterest" />
          </a>
          <a href="#">
            <img src={Insta} alt="instagram" />
          </a>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
