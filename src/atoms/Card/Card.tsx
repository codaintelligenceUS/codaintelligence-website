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
};

export function Card(props: CardProps) {
  return (
    <div
      className={`${styles.card} ${
        props.fixedHeaderPhoto ? styles.fixedHeaderPhoto : ""
      }`}
    >
      {props.headerPhoto && (
        <img src={props.headerPhoto} alt="" className={styles.headerPhoto} />
      )}
      <div className={styles.content}>
        {props.icon}
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
