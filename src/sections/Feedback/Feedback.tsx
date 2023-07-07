import { Testimonial } from "@/atoms";
import styles from "./Feedback.module.css";
import { TestimonialProps } from "@/atoms/Testimonial/Testimonial";

export type FeedbackProps = TestimonialProps & { isDarkBlue?: boolean };

export function Feedback(props: FeedbackProps) {
  return (
    <section
      className={`${styles.container} ${
        props.isDarkBlue ? styles.darkBlue : ""
      }`}
    >
      <Testimonial {...props} />
    </section>
  );
}
