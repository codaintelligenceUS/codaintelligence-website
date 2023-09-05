import { Title } from "@/atoms/Title/Title";
import styles from "./ConAuAct.module.css";
import { Card } from "@/atoms/Card/Card";
import { Coins, Gauge, Medal } from "lucide-react";

export type ConAuActProps = {
  isPinkEndingGradient?: boolean;
};

export function ConAuAct(props: ConAuActProps) {
  return (
    <section
      className={`${styles.container} ${
        props.isPinkEndingGradient ? styles.pinkEndingGradient : ""
      }`}
    >
      <Title
        category="Why partner with CODA"
        title="Continuous. Autonomous. Actionable."
        subtitle="Outpace your competition with strong actionable intel"
      />

      <div className={styles.cardsList}>
        <Card
          isSpecial
          icon={<Medal />}
          title="Purpose-built for the MSSP"
          content={
            <ul>
              <li>Channel Only</li>
              <li>Co-branded, fully customizable</li>
              <li>SaaS pay per use</li>
              <li>Strong partner enablement</li>
              <li>Presales accelerators built-in</li>
              <li>Open Data - fully documented APIs</li>
              <li>MSSP Integrations (MFA/IDP, PSA, SIEM, SOAR, etc.)</li>
            </ul>
          }
        />
        <Card
          isSpecial
          icon={<Gauge />}
          title="Gain technological edge over your competition by leveraging your existing investment"
          content={
            <ul>
              <li>Red Team</li>
              <li>Blue Team</li>
              <li>Consulting Services</li>
              <li>
                Automated Remediation <span>(coming up in Q4 2023)</span>
              </li>
            </ul>
          }
        />
        <Card
          isSpecial
          icon={<Coins />}
          title="50-90% cost reduction"
          content={
            <ul>
              <li>Automated continuous vulnerability & security validation</li>
              <li>AI-assisted remediation & hardening</li>
              <li>SaaS, Pay as you grow, only for live assets</li>
              <li>Business & Threat Intelligence driven risk prioritization</li>
              <li>
                Increase ROI & maximise current investments with our pre-built
                integrations
              </li>
              <li>Reduce SOC noise with our zero-day exploit intelligence</li>
            </ul>
          }
        />
      </div>
    </section>
  );
}
