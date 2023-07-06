import styles from "./Header.module.css";
import { FeatureTitle } from "./components/FeatureTitle/FeatureTitle";
import { Menu } from "./components/Menu/Menu";

/**
 * Header section of the main homepage
 */
export function Header() {
  return (
    <section className={styles.section}>
      <Menu />
      <FeatureTitle />
    </section>
  );
}
