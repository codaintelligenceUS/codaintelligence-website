import styles from "./Title.module.css";

export type TitleProps = {
  /** Main title text */
  title?: string;
  /** Subtittle text */
  subtitle?: string;
  /** Category text */
  category?: string;
  /** Whether text should be left aligned */
  isLeftAligned?: boolean;
  /** Whether to apply dark color to text */
  isDark?: boolean;
  /** Optional children to display */
  children?: React.ReactNode;
};

export function Title(props: TitleProps) {
  return (
    <div
      className={`${styles.container} ${props.isDark ? styles.dark : ""} ${props.isLeftAligned ? styles.leftAligned : ""
        }`}
    >
      {props.category && <h3 className={styles.category}>{props.category}</h3>}
      {props.title && <h1 className={styles.mainTitle}>{props.title}</h1>}
      {props.subtitle && <h2 className={styles.subtitle}>{props.subtitle}</h2>}
      {props.children}
    </div>
  );
}
