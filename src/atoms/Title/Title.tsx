import styles from "./Title.module.css";

type TitleProps = {
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
};

export function Title(props: TitleProps) {
  return (
    <div
      className={`${styles.container} ${props.isDark ? styles.dark : ""} ${props.isLeftAligned ? styles.leftAligned : ""
        }`}
    >
      {props.category && <h3>{props.category}</h3>}
      {props.title && <h1>{props.title}</h1>}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}
