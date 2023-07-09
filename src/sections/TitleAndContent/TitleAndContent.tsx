import { Title, TitleProps } from "@/atoms/Title/Title";
import { ReactNode } from "react";
import styles from "./TitleAndContent.module.css";

export type TitleAndContentProps = TitleProps & { children: ReactNode };

export function TitleAndContent(props: TitleAndContentProps) {
  return (
    <section className={styles.container}>
      <Title
        isLeftAligned
        title={props.title}
        subtitle={props.subtitle}
        category={props.category}
        isDark={props.isDark}
      />
      {props.children}
    </section>
  );
}
