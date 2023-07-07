import { Title, TitleProps } from "@/atoms/Title/Title";
import styles from "./CardsTitle.module.css";
import { Card, CardProps } from "@/atoms/Card/Card";

type CardsTitleProps = {
  title: TitleProps;
  cards: CardProps[];
};

export function CardsTitle(props: CardsTitleProps) {
  return (
    <section className={styles.container}>
      <Title {...props.title} />

      <div className={styles.cards}>
        {props.cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
    </section>
  );
}
