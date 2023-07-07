import { Title, TitleProps } from "@/atoms/Title/Title";
import styles from "./CardsTitle.module.css";
import { Card, CardProps } from "@/atoms/Card/Card";

type CardsTitleProps = {
  title: TitleProps;
  cards: CardProps[];
  /** Whether to ensure same height for all cards */
  fixedHeight?: boolean;
  isDark?: boolean;
  /** Whether to show more items on a row */
  isLargeGrid?: boolean;
};

export function CardsTitle(props: CardsTitleProps) {
  return (
    <section
      className={`${styles.container} ${
        props.fixedHeight ? styles.fixedHeight : ""
      } ${props.isDark ? styles.dark : ""} ${
        props.isLargeGrid ? styles.largeGrid : ""
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
