import { Title, TitleProps } from "@/atoms/Title/Title";
import styles from "./CardsTitle.module.css";
import { Card, CardProps } from "@/atoms/Card/Card";
import { ReactNode } from "react";

type CardsTitleProps = {
  title: TitleProps;
  cards: CardProps[];
  children?: ReactNode;
  /** Whether to ensure same height for all cards */
  fixedHeight?: boolean;
  isDark?: boolean;
  /** Whether to show more items on a row */
  isLargeGrid?: boolean;
  isBlueBackground?: boolean;
  isDarkBlueBackground?: boolean;
  isNoMargin?: boolean;
};

export function CardsTitle(props: CardsTitleProps) {
  return (
    <section
      className={`${styles.container} ${
        props.fixedHeight ? styles.fixedHeight : ""
      } ${props.isDark ? styles.dark : ""} ${
        props.isLargeGrid ? styles.largeGrid : ""
      } ${props.isBlueBackground ? styles.blueBackground : ""} ${
        props.isNoMargin ? styles.noMargin : ""
      } ${props.isDarkBlueBackground ? styles.darkBlueBackground : ""}`}
    >
      <Title {...props.title} />

      <div className={styles.cards}>
        {props.cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
      {props.children}
    </section>
  );
}
