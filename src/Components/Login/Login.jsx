import Head from '../Helper/Head';
import styles from './Login.module.css';

const Login = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className={styles.login}>
      <Head title="Login" />
      <div className={styles.loginSide + ` showLeft`}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">User</label>
          <input type="text" name="user" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button className={styles.loginButton}>Login</button>
        </form>
        <div className={styles.signUp}>
          <h2>Sign Up</h2>
          <p>Join to the Coffee Project!</p>
          <button className={styles.loginButton}>Sign Up</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
