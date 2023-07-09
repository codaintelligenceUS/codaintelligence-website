import IIII from "@/assets/1111.png";
import Blokworkx from "@/assets/blokworkx.png";
import Defensestorm from "@/assets/defensestorm.png";
import Dod from "@/assets/dodsecurity.png";
import HWN from "@/assets/hwn.png";
import SAPLogo from "@/assets/sap.png";
import SGI from "@/assets/sgi.png";
import Silversky from "@/assets/silversky.png";
import styles from "./AsSeenOn.module.css";
import Capterra from "./assets/capterra.png";
import CyberMagazine from "./assets/cybermagazine.png";
import G2 from "./assets/g2.svg";
import MsspAlert from "./assets/msspalert.png";
import PeerInsights from "./assets/peerInsights.png";

export type AsSeenOnProps = {
  isWhite?: boolean;
  isSmall?: boolean;
  title?: string;
  isPartnerDisplay?: boolean;
};

export function AsSeenOn(props: AsSeenOnProps) {
  const publicationLogos = [
    { logo: PeerInsights, name: "PeerInsights" },
    { logo: G2, name: "G2" },
    { logo: MsspAlert, name: "MsspAlert" },
    { logo: Capterra, name: "Capterra" },
    { logo: CyberMagazine, name: "CyberMagazine" },
  ];
  const partnerLogos = [
    { logo: SAPLogo, name: "SAPLogo" },
    { logo: Silversky, name: "Silversky" },
    { logo: SGI, name: "SGI" },
    { logo: HWN, name: "HWN" },
    { logo: IIII, name: "IIII" },
    { logo: Blokworkx, name: "Blokworkx" },
    { logo: Defensestorm, name: "Defensestorm" },
    { logo: Dod, name: "Dod" },
  ];

  const logos = props.isPartnerDisplay ? partnerLogos : publicationLogos;

  return (
    <section
      className={`${styles.container} ${props.isSmall ? styles.small : ""} ${
        props.isWhite ? styles.white : ""
      } ${props.isPartnerDisplay ? styles.partnerDisplay : ""}`}
    >
      <span>{props.title || "As Seen On"}</span>
      <div className={styles.list}>
        {logos.map((logo) => (
          <img src={logo.logo} key={logo.logo} alt={logo.name} />
        ))}
      </div>
    </section>
  );
}
