import styles from './copyright-row.module.scss';
import Link from 'next/link';
import Image from 'next/image';
export default function CopyrightRow() {
  return (
    <div className={styles.copyrightRow}>
      <div className={styles.inner}>
        <div className={styles.leftColumn}>
          <Link href="/" className={styles.logoWrapper}>
            <Image
              src="/logo.svg"
              alt="Logo"
              priority
              fill
              className={styles.logo}
            />
          </Link>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi
          </p>
        </div>
        <div className={styles.rightColumn}>
          <nav>
            <ul>
              <li>
                <Link href="/">Home {'>'}</Link>
              </li>

              <li>
                <Link href="/about">About {'>'}</Link>
              </li>

              <li>
                <Link href="/faq">FAQ {'>'}</Link>
              </li>

              <li>
                <Link href="/contact">Contact {'>'}</Link>
              </li>
            </ul>

            <ul>
              <li>
                <Link href="/terms">Terms&Conditions {'>'}</Link>
              </li>

              <li>
                <Link href="/terms">Privacy policy {'>'}</Link>
              </li>

              <li>
                <Link href="/faq">Secure payment {'>'}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
