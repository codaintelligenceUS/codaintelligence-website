import { Title } from "@/atoms/Title/Title";
import styles from "./BookDemo.module.css";
import { DemoButton } from "@/atoms";
export function BookDemo() {
  return (
    <section className={styles.container}>
      <Title
        title="Why don’t you take it for a spin ?"
        subtitle="Book a demo with us by using the button below"
      />
      <DemoButton isLarge />
    </section>
  );
}
