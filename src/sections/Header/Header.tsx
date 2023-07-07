import styles from "./Header.module.css";
import { FeatureTitle } from "./components/FeatureTitle/FeatureTitle";
import { Menu } from "./components/Menu/Menu";
import {
  PhotoTitle,
  PhotoTitleProps,
} from "./components/PhotoTitle/PhotoTitle";

type HomepageHeaderProps = { type: "homepage" };
type TitleWithPhotoHeaderProps = { type: "titleWithPhoto" } & PhotoTitleProps;

export type HeaderProps = (HomepageHeaderProps | TitleWithPhotoHeaderProps) & {
  isBlueBottomGradient?: boolean;
};

/**
 * Header section of the main homepage
 */
export function Header(props: HeaderProps) {
  const content: { [key in HeaderProps["type"]]: JSX.Element } = {
    homepage: <FeatureTitle />,
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
