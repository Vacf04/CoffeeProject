import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={`${styles.notFound} showLeft`}>
      <div className="container">
        <h1>Error: 404</h1>
        <p>Page not found.</p>
      </div>
    </section>
  );
};

export default NotFound;
