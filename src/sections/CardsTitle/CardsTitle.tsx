import { Title, TitleProps } from "@/atoms/Title/Title";
import styles from "./CardsTitle.module.css";
import { Card, CardProps } from "@/atoms/Card/Card";

type CardsTitleProps = {
  title: TitleProps;
  cards: CardProps[];
  /** Whether to ensure same height for all cards */
  fixedHeight?: boolean;
};

export function CardsTitle(props: CardsTitleProps) {
  return (
    <section
      className={`${styles.container} ${
        props.fixedHeight ? styles.fixedHeight : ""
      }`}
    >
      <Title {...props.title} />

      <div className={styles.cards}>
        {props.cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </section>
  );
}
