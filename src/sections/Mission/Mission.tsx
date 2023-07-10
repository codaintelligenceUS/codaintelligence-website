import { Logo } from "@/atoms";
import styles from "./Mission.module.css";
export function Mission() {
  return (
    <section className={styles.container}>
      <Logo isWhite type="badge" />
      <h1>
        Our mission is to empower companies to invest the minimum amount of time
        and resources in keeping their organisations safe against exploitations,
        whilst focusing on their specific business objectives.
      </h1>
    </section>
  );
}
