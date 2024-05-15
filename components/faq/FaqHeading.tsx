import styles from './faq-heading.module.scss';

const FaqHeading = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Questions and Answers</h1>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium volup atum deleniti atque corrupti quos dolores
        et quas molestias excepturi
      </p>
      <input type="text" />
    </div>
  );
};

export default FaqHeading;
