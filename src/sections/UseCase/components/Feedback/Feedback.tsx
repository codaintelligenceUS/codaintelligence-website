import { Testimonial } from "@/atoms";
import styles from "./Feedback.module.css";
import { Zap } from "lucide-react";

export function Feedback() {
  return (
    <section className={styles.container}>
      <Testimonial
        authorName="John Keregy"
        companyLogo={<Zap />}
        testimonial=" I have been using CODA Intelligence for over a year now and I am extremely impressed with their services. Their vulnerability management solution has helped me identify and fix vulnerabilities in my system before they could be exploited. The team at CODA Intelligence is very knowledgeable and responsive. They are always available to answer any questions I have and provide me with the support I need."
      />
    </section>
  );
}
