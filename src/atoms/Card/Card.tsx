import { Logo } from "..";
import styles from "./Card.module.css";
export type CardProps = {
  /** Optional icon */
  icon?: JSX.Element;
  /** Card title */
  title?: string;
  /** Card content */
  content?: string | JSX.Element;
  /** Optional footer component */
  footer?: string | JSX.Element;
  /** Header photo URL */
  headerPhoto?: string;
  /** Whether to ensure same size for header photo */
  fixedHeaderPhoto?: boolean;
  /** Whether to use the special design mode */
  isSpecial?: boolean;
};

export function Card(props: CardProps) {
  return (
    <div
      className={`${styles.card} ${
        props.fixedHeaderPhoto ? styles.fixedHeaderPhoto : ""
      } ${props.isSpecial ? styles.special : ""}`}
    >
      {props.headerPhoto && (
        <img src={props.headerPhoto} alt="" className={styles.headerPhoto} />
      )}
      <div className={styles.content}>
        {props.icon}
        {props.isSpecial && (
          <div className={styles.specialBadge}>
            <div className={styles.separator} />
            <Logo height={30} type="badge" isWhite />
            <div className={styles.separator} />
          </div>
        )}
        {props.title && <h1>{props.title}</h1>}
        {props.content &&
          (typeof props.content === "string" ? (
            <p>{props.content}</p>
          ) : (
            props.content
          ))}
      </div>
      {props.footer && <div className={styles.footer}>{props.footer}</div>}
    </div>
  );
}
