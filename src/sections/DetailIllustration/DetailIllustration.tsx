import { IllustrationBox } from "@/atoms";
import styles from "./DetailIllustration.module.css";

export type DetailIllustrationProps = {
  title: string;
  text: string;
  illustration: JSX.Element;
};

export function DetailIllustration(props: DetailIllustrationProps) {
  return (
    <section className={styles.container}>
      <IllustrationBox
        isReversed
        title={props.title}
        description={props.text}
        boxContent={props.illustration}
      />
    </section>
  );
}
