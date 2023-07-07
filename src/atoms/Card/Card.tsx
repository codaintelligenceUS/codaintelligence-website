import styles from "./Card.module.css";
type CardProps = {
  /** Optional icon */
  icon?: JSX.Element;
  /** Card title */
  title: string;
  /** Card content */
  content: string | JSX.Element;
  /** Header photo URL */
  headerPhoto?: string;
};

export function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      {props.headerPhoto && (
        <img src={props.headerPhoto} alt="" className={styles.headerPhoto} />
      )}
      <div className={styles.content}>
        {props.icon}
        <h1>{props.title}</h1>
        {typeof props.content === "string" ? (
          <p>{props.content}</p>
        ) : (
          props.content
        )}
      </div>
    </div>
  );
}
