import { Title, TitleProps } from "@/atoms/Title/Title";
import styles from "./PhotoTitle.module.css";
import { Card } from "@/atoms/Card/Card";
export type PhotoTitleProps = TitleProps;

export function PhotoTitle(props: PhotoTitleProps) {
  return (
    <div className={styles.container}>
      <Title {...props} />
      <Card
        title="Corporate Logo. This is a new company that is awesome"
        content="Hello is it me you are looking for?"
        headerPhoto="https://picsum.photos/400/400"
      />
    </div>
  );
}
