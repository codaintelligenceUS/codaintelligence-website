import styles from "./IllustrationBox.module.css";

export type IllustrationBoxProps = {
  title: string;
  description: string;
  boxContent: JSX.Element;
  isReversed?: boolean;
};

export function IllustrationBox(props: IllustrationBoxProps) {
  return (
    <div
      className={`${styles.container} ${props.isReversed ? styles.reversed : ""
        }`}
    >
      <div className={styles.title}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      <div className={styles.box}>{props.boxContent}</div>
    </div>
  );
}
