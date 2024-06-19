import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.logoAndResume}>
          <span className={styles.logo}>Coffee</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
            laudantium neque unde, reprehenderit dolorem obcaecati totam.
          </p>
        </div>
        <nav>
          <ul>
            <li>
              <span>Regions</span>
            </li>
            <li className={styles.region}>
              <Link to="/products?region=Central America">Central America</Link>
            </li>
            <li className={styles.region}>
              <Link to="/products?region=Africa">Africa</Link>
            </li>
            <li className={styles.region}>
              <Link to="/products?region=South America">South America</Link>
            </li>
            <li className={styles.region}>
              <Link to="/products?region=Asia Pacific">Asia Pacific</Link>
            </li>
            <li className={styles.region}>
              <Link to="/products?region=Middle East">Middle East</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <span>Costumer Care</span>
            </li>
            <li className={styles.region}>
              <Link>FAQ</Link>
            </li>
            <li className={styles.region}>
              <Link>Shipping</Link>
            </li>
            <li className={styles.region}>
              <Link>Order Status</Link>
            </li>
            <li className={styles.region}>
              <Link>Return & Exchange</Link>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <span>Company</span>
            </li>
            <li className={styles.region}>
              <Link>Privacy</Link>
            </li>
            <li className={styles.region}>
              <Link>Guides</Link>
            </li>
            <li className={styles.region}>
              <Link>Term of Conditions</Link>
            </li>
          </ul>
        </nav>
        <ul className={styles.social}>
          <li>
            <FaFacebookSquare />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaYoutube />
          </li>
          <li>
            <FaTwitter />
          </li>
        </ul>
        <p className={styles.copy}>&copy; 2024 Coffee - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
