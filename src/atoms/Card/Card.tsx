import styles from "./Card.module.css";
type CardProps = {
  /** Optional icon */
  icon?: JSX.Element;
  /** Card title */
  title: string;
  /** Card content */
  content: string | JSX.Element;
};

export function Card(props: CardProps) {
  return (
    <div className={styles.card}>
      {props.icon}
      <h1>{props.title}</h1>
      {typeof props.content === "string" ? (
        <p>{props.content}</p>
      ) : (
        props.content
      )}
    </div>
  );
}
