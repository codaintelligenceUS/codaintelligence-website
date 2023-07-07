import { Logo } from "@/atoms";
import styles from "./Mission.module.css";
export function Mission() {
  return (
    <section className={styles.container}>
      <Logo isWhite type="badge" />
      <h1>
        Our mission is to build a single platform that unifies asset visibility,
        vulnerabilities, risk, prioritization and remediation in order to avoid
        exploit scenarios.
      </h1>
    </section>
  );
}
