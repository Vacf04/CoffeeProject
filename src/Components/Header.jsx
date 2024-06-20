import React from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaRegUserCircle } from 'react-icons/fa';
import { CiCoffeeCup } from 'react-icons/ci';
import { CartContext } from './CartContext';
import useMedia from '../Hooks/useMedia';

const Header = () => {
  const location = useLocation();
  const [backgroundHeader, setBackgroundHeader] = React.useState(true);
  const { cartQuant } = React.useContext(CartContext);
  const mobile = useMedia('(max-width: 768px)');

  React.useEffect(() => {
    const handleScroll = () => {
      setBackgroundHeader(window.scrollY > 1);
    };

    if (location.pathname != '/') setBackgroundHeader(true);

    if (location.pathname === '/') {
      handleScroll();
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
              <Link to="/cart" className={styles.headerCart}>
                <FaShoppingCart className={styles.icon} />
                <p>{cartQuant > 0 ? cartQuant : ''}</p>
                {!mobile && 'Cart'}
              </Link>
            </li>
            <li>
              <Link to="/products">
                <CiCoffeeCup className={styles.icon} />
                {!mobile && 'Products'}
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FaRegUserCircle className={styles.icon} />
                {!mobile && 'Login'}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
