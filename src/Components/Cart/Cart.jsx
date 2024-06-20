import React from 'react';
import styles from './Cart.module.css';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import Head from '../Helper/Head';

const Cart = () => {
  const { cart, handleMinusClick, handlePlusClick, removeFromCart } =
    React.useContext(CartContext);

  return (
    <section className={styles.cart}>
      <Head title="Cart" />
      <div className={`container ${styles.cartContent} showLeft`}>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <div className={styles.cartEmpty}>
            <h2>There are no itens in your cart.</h2>
            <Link to="/products">See Products</Link>
          </div>
        ) : (
          <>
            <ul className={styles.cartProducts}>
              <li className={styles.cartProductsDates}>
                <p>Product</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Subtotal</p>
              </li>
              {cart.map((product) => (
                <li key={product.id} className={styles.product}>
                  <div className={styles.productDates}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                  </div>
                  <div className={styles.quantController}>
                    <button
                      onClick={() => handleMinusClick(product.id)}
                      className={styles.quantButton}
                    >
                      <FaMinus />
                    </button>
                    <span className={styles.quantText}>{product.quant}</span>
                    <button
                      onClick={() => handlePlusClick(product.id)}
                      className={styles.quantButton}
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p>${product.price}</p>
                  <p className={styles.productSubtotal}>
                    ${(product.price * product.quant).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className={styles.removeFromCart}
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
            <div className={styles.resume}>
              <div>
                <h2>Summary</h2>
                <p>
                  Subtotal
                  <span>
                    $
                    {cart
                      .map((product) => product.price * product.quant)
                      .reduce((a, b) => a + b, 0)
                      .toFixed(2)}
                  </span>
                </p>
                <p>
                  Shipping
                  <span>$0.00</span>
                </p>
                <p>
                  Total
                  <span>
                    $
                    {cart
                      .map((product) => product.price * product.quant)
                      .reduce((a, b) => a + b, 0)
                      .toFixed(2)}
                  </span>
                </p>
                <button className={styles.resumeButton}>Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
