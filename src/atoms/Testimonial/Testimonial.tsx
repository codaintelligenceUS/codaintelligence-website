import styles from "./Testimonial.module.css";

export type TestimonialProps = {
  authorName: string;
  companyLogo: string | JSX.Element;
  testimonial: string;
};

export function Testimonial(props: TestimonialProps) {
  return (
    <div className={styles.container}>
      <h1>{props.testimonial}</h1>
      <footer>
        <div className={styles.author}>
          <div className={styles.initials}>{props.authorName[0]}</div>
          <div className={styles.name}>{props.authorName}</div>
        </div>
        {typeof props.companyLogo === "string" ? (
          <img src={props.companyLogo} alt="" />
        ) : (
          props.companyLogo
        )}
      </footer>
    </div>
  );
}
