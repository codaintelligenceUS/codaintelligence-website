import styles from "./Header.module.css";
import { FeatureTitle } from "./components/FeatureTitle/FeatureTitle";
import { Menu } from "./components/Menu/Menu";
import {
  PhotoTitle,
  PhotoTitleProps,
} from "./components/PhotoTitle/PhotoTitle";

type HomepageHeaderProps = { type: "homepage" };
type CompanyHeaderProps = { type: "company" };
type PartnerHeaderProps = { type: "partner" };
type UseCaseHeaderProps = { type: "usecase" } & PhotoTitleProps;

export type HeaderProps =
  | HomepageHeaderProps
  | CompanyHeaderProps
  | PartnerHeaderProps
  | UseCaseHeaderProps;

/**
 * Header section of the main homepage
 */
export function Header(props: HeaderProps) {
  const content: { [key in HeaderProps["type"]]: JSX.Element } = {
    homepage: <FeatureTitle />,
    company: <></>,
    partner: <></>,
    usecase: <PhotoTitle {...(props as UseCaseHeaderProps)} />,
  };

  return (
    <section className={styles.section}>
      <Menu />
      {content[props.type]}
    </section>
  );
}
