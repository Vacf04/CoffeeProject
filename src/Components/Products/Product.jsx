import React from 'react';
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import { CartContext } from '../CartContext';
import Head from '../Helper/Head';

const Product = () => {
  const { handleAddToCart } = React.useContext(CartContext);
  const { data, loading, error, request } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    request(`https://fake-coffee-api.vercel.app/api/${id}`);
  }, [id, request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <>
        <section className={styles.product}>
          <Head title={data[0].name} />
          <div className={`container ${styles.productContent} showLeft`}>
            <div className={styles.imgContainer}>
              <img src={data[0].image_url} alt={data[0].name} />
            </div>
            <div className={styles.productDates}>
              <h1>{data[0].name}</h1>
              <span>${data[0].price}</span>
              <h2>Description</h2>
              <p>{data[0].description}</p>
              <h2>Weigth</h2>
              <p>{data[0].weight} KG</p>
              <h2>Region</h2>
              <p>{data[0].region}</p>
              <button
                className={styles.addToCart}
                onClick={() => handleAddToCart(data)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </section>
      </>
    );
};

export default Product;
