import { Title } from "@/atoms/Title/Title";
import styles from "./HowItWorks.module.css";
import { Server } from "lucide-react";
import { IllustrationBox } from "@/atoms/IllustrationBox/IllustrationBox";

export function HowItWorks() {
  return (
    <section className={styles.container}>
      <Title
        category="How It Works"
        title="Continuous. Autonomous. Actionable."
        subtitle="Get true visibility on your organization by native and autonomous correlation between systems and vulnerability data, so you don't miss out on anything."
      />

      <IllustrationBox
        title="Test Content"
        description="Test Content"
        boxContent={<img src="https://picsum.photos/200/200" />}
      />
      <IllustrationBox
        isReversed
        title="Test Content"
        description="Test Content"
        boxContent={<img src="https://picsum.photos/200/200" />}
      />
    </section>
  );
}
