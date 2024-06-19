import React from 'react';
import styles from './Products.module.css';
import ProductCard from './ProductCard';
import { NavLink, useSearchParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

const Products = () => {
  const { data, loading, error, request } = useFetch();
  const [filteredProducts, setFilteredProducts] = React.useState(null);
  const [searchParams] = useSearchParams();

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
      <div className={`container ${styles.productsContent} showLeft`}>
        <h1>Products</h1>
        <aside className={styles.regionSide}>
          <h2>Regions</h2>
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
