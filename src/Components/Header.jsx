import React from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';
import { CiCoffeeCup } from 'react-icons/ci';
import { CartContext } from './CartContext';

const Header = () => {
  const location = useLocation();
  const [backgroundHeader, setBackgroundHeader] = React.useState(true);
  const { cartQuant } = React.useContext(CartContext);

  React.useEffect(() => {
    const handleScroll = () => {
      setBackgroundHeader(window.scrollY > window.innerHeight * 0.7);
    };

    if (location.pathname != '/') setBackgroundHeader(true);

    if (location.pathname === '/') {
      setBackgroundHeader(false);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [location]);

  return (
    <header
      className={`${styles.header} ${
        backgroundHeader ? styles.headerBackground : ''
      }`}
    >
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logo}>
          Coffee
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/products">
                <CiCoffeeCup />
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className={styles.headerCart}>
                <FaShoppingCart className={styles.icon} />
                <p>{cartQuant > 0 ? cartQuant : ''}</p>
                Cart
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FaRegUserCircle className={styles.icon} />
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
