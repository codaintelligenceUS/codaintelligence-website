import { Title, TitleProps } from "@/atoms/Title/Title";
import styles from "./PhotoTitle.module.css";
export type PhotoTitleProps = TitleProps;

export function PhotoTitle(props: PhotoTitleProps) {
  return (
    <div className={styles.container}>
      <Title {...props} />
      <div className={styles.box} />
    </div>
  );
}
