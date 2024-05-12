import styles from './register-page.module.scss';
import RegisterForm from '@/components/register/register-form';
export default function RegisterPage() {
  return (
    <section className={styles.registerPage}>
      <div className={`container-xl ${styles.inner}`}>
        <h1 className="large-title">Create an account</h1>
        <RegisterForm />
      </div>
    </section>
  );
}
