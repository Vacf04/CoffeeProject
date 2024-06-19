import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Link className={styles.product} to={`/products/${product.id}`}>
      <div className={styles.imgContainer}>
        <img src={product.image_url} alt={product.name} />
      </div>
      <div className={styles.productInfo}>
        <p>{product.region}</p>
        <h2>{product.name}</h2>
        <p>${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
