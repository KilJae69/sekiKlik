import AboutBox from '@/components/layout/footer/about-box/about-box';
import styles from './main-footer.module.scss';
import NewsLetterForm from '@/components/layout/footer/components/newsletter-form';
import SocialBox from '@/components/layout/footer/components/social-box';
import CopyrightRow from '@/components/layout/footer/components/copyright-row';
interface MainFooterProps {
  isPrivate: boolean;
}
export default function MainFooter({ isPrivate }: MainFooterProps) {
  return (
    <>
      {!isPrivate && <AboutBox />}
      <footer
        className={`${styles.mainFooter} ${isPrivate && styles.noPadding}`}
      >
        <div className={styles.outerWrapper}>
          <div className={`container-xl ${styles.inner}`}>
            <SocialBox />
            <NewsLetterForm />
          </div>
          <CopyrightRow />
        </div>
      </footer>
    </>
  );
}
