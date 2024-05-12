import styles from './login-page.module.scss';
import LoginForm from '@/components/login/login-form';
export default function LoginPage() {
  return (
    <section className={styles.loginPage}>
      <div className={`container-xl ${styles.inner}`}>
        <h1 className="large-title">Login to your Account</h1>
        <LoginForm />
      </div>
    </section>
  );
}
