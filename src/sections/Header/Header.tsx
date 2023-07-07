import { Title, TitleProps } from "@/atoms/Title/Title";
import styles from "./Header.module.css";
import { FeatureTitle } from "./components/FeatureTitle/FeatureTitle";
import { Menu } from "./components/Menu/Menu";
import {
  PhotoTitle,
  PhotoTitleProps,
} from "./components/PhotoTitle/PhotoTitle";

type HomepageHeaderProps = { type: "homepage" };
type TitleHeaderProps = { type: "title" } & TitleProps;
type TitleWithPhotoHeaderProps = { type: "titleWithPhoto" } & PhotoTitleProps;

export type HeaderProps = (
  | HomepageHeaderProps
  | TitleHeaderProps
  | TitleWithPhotoHeaderProps
) & {
  isBlueBottomGradient?: boolean;
};

/**
 * Header section of the main homepage
 */
export function Header(props: HeaderProps) {
  const content: { [key in HeaderProps["type"]]: JSX.Element } = {
    homepage: <FeatureTitle />,
    title: (
      <div className={styles.contentPadding}>
        <Title {...(props as TitleHeaderProps)} />{" "}
      </div>
    ),
    titleWithPhoto: <PhotoTitle {...(props as TitleWithPhotoHeaderProps)} />,
  };

  return (
    <section
      className={`${styles.section} ${
        props.isBlueBottomGradient ? styles.blueBottomGradient : ""
      }`}
    >
      <Menu />
      {content[props.type]}
    </section>
  );
}
