import styles from "./DemoButton.module.css";
/**
 * This is a special button for the Demo modal
 */
export function DemoButton(props: { isLarge?: boolean }) {
  return (
    <button className={`${styles.button} ${props.isLarge ? styles.large : ""}`}>
      Get a Demo
    </button>
  );
}
