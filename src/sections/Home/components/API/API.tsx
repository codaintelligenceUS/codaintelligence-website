import { Title } from "@/atoms/Title/Title";
import styles from "./API.module.css";

import Lock from "./Lock.png";

export function API() {
  return (
    <section className={styles.container}>
      <Title
        isDark
        isLeftAligned
        title="Need more ? Extend with our API!"
        subtitle="Footprint provides an extensive REST API and SDKs for the most popular languages!"
      />
      <img src={Lock} alt="lock" />
    </section>
  );
}
