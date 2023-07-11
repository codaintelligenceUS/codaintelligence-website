import { Title } from "@/atoms/Title/Title";
import styles from "./Career.module.css";
import { Button, DemoButton } from "@/atoms";

export function Career() {
  return (
    <section className={styles.container}>
      <Title
        category="Careers"
        title="Join the CODA Team"
        subtitle="Use the button below to apply"
      >
        <DemoButton isRegularButton type="careers" />
      </Title>
    </section>
  );
}
