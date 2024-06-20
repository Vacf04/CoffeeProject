import React from 'react';
import styles from './Products.module.css';
import ProductCard from './ProductCard';
import { NavLink, useSearchParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import useMedia from '../../Hooks/useMedia';
import { FaFilter } from 'react-icons/fa';

const Products = () => {
  const { data, loading, error, request } = useFetch();
  const [filteredProducts, setFilteredProducts] = React.useState(null);
  const [searchParams] = useSearchParams();
  const [filterMenu, setFilterMenu] = React.useState(false);
  const mobile = useMedia('(max-width: 768px)');

  React.useEffect(() => {
    request(`https://fake-coffee-api.vercel.app/api`);
  }, [request]);

  React.useEffect(() => {
    if (data === null) return;
    const region = searchParams.get('region');
    if (region !== null) {
      setFilteredProducts(data.filter((product) => product.region === region));
    } else {
      setFilteredProducts(data);
    }
  }, [data, searchParams]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  return (
    <section className={styles.products}>
      <Head title="Products" />
      <div className={`container ${styles.productsContent} showLeft`}>
        <h1>Products</h1>
        {mobile && (
          <span
            className={styles.filterContainer}
            onClick={() => setFilterMenu(!filterMenu)}
          >
            <FaFilter className={styles.filterIcon} />
            Regions
          </span>
        )}
        <aside
          className={
            styles.regionSide + ` ${filterMenu && styles.regionSideActive}`
          }
        >
          {filterMenu && (
            <button
              className={styles.closeFilterMenu}
              onClick={() => setFilterMenu(!filterMenu)}
            >
              X
            </button>
          )}
          <h2>Filter By Regions</h2>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/products"
                  end
                  className={({ isActive }) =>
                    isActive && searchParams.get('region') === null
                      ? 'active'
                      : ''
                  }
                  onClick={() => setFilterMenu(false)}
                >
                  All
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?region=Central America"
                  className={({ isActive }) =>
                    isActive && searchParams.get('region') === 'Central America'
                      ? 'active'
                      : ''
                  }
                  onClick={() => setFilterMenu(false)}
                >
                  Central America
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?region=Africa"
                  className={({ isActive }) =>
                    isActive && searchParams.get('region') === 'Africa'
                      ? 'active'
                      : ''
                  }
                  onClick={() => setFilterMenu(false)}
                >
                  Africa
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?region=South America"
                  className={({ isActive }) =>
                    isActive && searchParams.get('region') === 'South America'
                      ? 'active'
                      : ''
                  }
                  onClick={() => setFilterMenu(false)}
                >
                  South America
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?region=Asia Pacific"
                  className={({ isActive }) =>
                    isActive && searchParams.get('region') === 'Asia Pacific'
                      ? 'active'
                      : ''
                  }
                  onClick={() => setFilterMenu(false)}
                >
                  Asia Pacific
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products?region=Middle East"
                  className={({ isActive }) =>
                    isActive && searchParams.get('region') === 'Middle East'
                      ? 'active'
                      : ''
                  }
                  onClick={() => setFilterMenu(false)}
                >
                  Middle East
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
        <div className={styles.productsSide}>
          <div className={styles.productsContainer}>
            {filteredProducts &&
              filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
