import { IllustrationBox } from "@/atoms";
import styles from "./DetailIllustration.module.css";

export type DetailIllustrationProps = {
  title: string;
  text: string;
  illustration: JSX.Element;
  isReversed?: boolean;
  isBlueBackground?: boolean;
};

export function DetailIllustration(props: DetailIllustrationProps) {
  return (
    <section
      className={`${styles.container} ${
        props.isBlueBackground ? styles.blueBackground : ""
      }`}
    >
      <IllustrationBox
        isReversed={props.isReversed}
        title={props.title}
        description={props.text}
        boxContent={props.illustration}
      />
    </section>
  );
}
