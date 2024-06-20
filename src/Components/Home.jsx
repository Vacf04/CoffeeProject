import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import ProductCard from './Products/ProductCard';
import useFetch from '../Hooks/useFetch';
import Loading from './Helper/Loading';
import Error from './Helper/Error';
import Head from './Helper/Head';

const Home = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    request(`https://fake-coffee-api.vercel.app/api?limit=8`);
  }, [request]);

  return (
    <>
      <section className={styles.imageSectionBg}>
        <Head title="Home" />
        <div className={`container ${styles.imageSectionContent} showLeft`}>
          <div className={styles.textContent}>
            <h1>Coffee Project</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, totam laudantium. Delectus provident magnam
              exercitationem inventore illum quia, omnis ex.
            </p>
          </div>
          <Link to="/products" className={styles.shopNow}>
            Shop Now
          </Link>
        </div>
      </section>
      <section className={styles.newArrival}>
        <div className={`container ${styles.newArrivalContent} showLeft`}>
          <div className={styles.textContent}>
            <h1>New Arrivals</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, totam laudantium.
            </p>
          </div>

          {loading && <Loading />}
          {error && <Error error={error} />}
          <div className={styles.newArrivalProducts}>
            {data &&
              data.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
          <Link to="/products" className={styles.seeAll}>
            See All
          </Link>
        </div>
      </section>
      <section className={styles.regions}>
        <div className={`container ${styles.regionsContent} showLeft`}>
          <div className={styles.textContent}>
            <h1>Regions</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, totam laudantium.
            </p>
          </div>
          <div className={styles.regionsSelector}>
            <Link
              className={styles.region}
              to="/products?region=Central America"
            >
              <p>Central America</p>
            </Link>
            <Link className={styles.region} to="/products?region=Africa">
              <p>Africa</p>
            </Link>
            <Link className={styles.region} to="/products?region=South America">
              <p>South America</p>
            </Link>
            <Link className={styles.region} to="/products?region=Asia Pacific">
              <p>Asia Pacific</p>
            </Link>
            <Link className={styles.region} to="/products?region=Middle East">
              <p>Middle East</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
