import { Title, TitleProps } from "@/atoms/Title/Title";
import styles from "./PhotoTitle.module.css";

export type PhotoTitleProps = TitleProps & { sideChildren: JSX.Element };

export function PhotoTitle(props: PhotoTitleProps) {
  return (
    <div className={styles.container}>
      <Title isLeftAligned {...props} />
      {props.sideChildren}
    </div>
  );
}
