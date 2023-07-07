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
          subtitle="Our state of the art AI-powered vulnerability management system helps you sort out the important actions from the noise"
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
      title: "Identify",
      description:
        "Alert fatigue is a real thing. Footprint understands your environment and only shows what you really care about.",
      icon: Identify,
    },
    actions: {
      title: "Actions",
      description:
        "Alert fatigue is a real thing. Footprint understands your environment and only shows what you really care about.",
      icon: Actions,
    },
    prioritize: {
      title: "Prioritize",
      description:
        "Alert fatigue is a real thing. Footprint understands your environment and only shows what you really care about.",
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
