import { Title } from "@/atoms/Title/Title";
import styles from "./USP.module.css";
import { Rockets } from "./components/Rockets/Rockets";

import Identify from "./Identify.svg";
import Actions from "./Actions.svg";
import Prioritize from "./Prioritize.svg";

export function USP() {
  return (
    <section className={styles.section}>
      <Rockets />
      <div className={styles.content}>
        <Title
          isLeftAligned
          title="Take control."
          subtitle="Our state-of-the art, AI-powered attack surface management platform helps you sort out the important remediations needed in order to avoid exploits on your systems and cancel all the noise. "
        />
        <div className={styles.uspList}>
          <UspItem type="identify" />
          <UspItem type="prioritize" />
          <UspItem type="actions" />
        </div>
      </div>
    </section>
  );
}

function UspItem(props: { type: "identify" | "actions" | "prioritize" }) {
  const values: {
    [key in typeof props.type]: {
      title: string;
      description: string;
      icon: string;
    };
  } = {
    identify: {
      title: "Full Attack Surface Visibility",
      description:
        "Leverage our Attack Surface Management (ASM) capabilities to gain unparalleled visibility into your organization's security posture and ensure compliance requirements are always met",
      icon: Identify,
    },
    actions: {
      title: "Contextual Prioritization",
      description:
        "Identify & remediate exploitable attack vectors by correlating application-level exploits with infrastructure misconfigurations across your entire attack surface",
      icon: Actions,
    },
    prioritize: {
      title: "Effective Remediation",
      description:
        "Leverage our AI-assisted collaborative remediation workflows to foster collaboration between cross-functional teams with automated progress tracking, notifications & reporting",
      icon: Prioritize,
    },
  };

  return (
    <div className={styles.uspItem}>
      <img src={values[props.type].icon} alt={values[props.type].title} />
      <h1>{values[props.type].title}</h1>
      <p>{values[props.type].description}</p>
    </div>
  );
}
