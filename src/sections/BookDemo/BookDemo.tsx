import { Title } from "@/atoms/Title/Title";
import styles from "./BookDemo.module.css";
import { DemoButton } from "@/atoms";
export function BookDemo() {
  return (
    <section className={styles.container}>
      <Title title="Let us show you the power of Footprint." />
      <DemoButton isLarge buttonText="Free Trial" />
    </section>
  );
}
