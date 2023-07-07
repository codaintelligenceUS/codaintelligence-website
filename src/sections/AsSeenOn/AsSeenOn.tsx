import { Title } from "@/atoms/Title/Title";
import styles from "./AsSeenOn.module.css";
import PeerInsights from "./assets/peerInsights.png";
import G2 from "./assets/g2.png";
import MsspAlert from "./assets/msspalert.png";
import Capterra from "./assets/capterra.png";
import CyberMagazine from "./assets/cybermagazine.png";

export type AsSeenOnProps = {
  isWhite?: boolean;
};

export function AsSeenOn(props: AsSeenOnProps) {
  const logos = [
    { logo: PeerInsights },
    { logo: G2 },
    { logo: MsspAlert },
    { logo: Capterra },
    { logo: CyberMagazine },
  ];

  return (
    <section
      className={`${styles.container} ${props.isWhite ? styles.white : ""}`}
    >
      <Title category="As Seen on" />
      <div className={styles.list}>
        {logos.map((logo) => (
          <img src={logo.logo} key={logo.logo} />
        ))}
      </div>
    </section>
  );
}
