import { Title } from "@/atoms/Title/Title";
import styles from "./Why.module.css";
import { Card } from "@/atoms/Card/Card";
import { Grid } from "lucide-react";

export function Why() {
  return (
    <section className={styles.container}>
      <Title
        category="Why CODA"
        title="Everything seen by Footprint"
        subtitle="Get unparalleled visibility into your organization’s security posture and ensure compliance requirements are always met"
      />

      <div className={styles.cards}>
        <Card
          icon={<Grid />}
          title="Security"
          content="Get unparalleled visibility into your organization’s security posture and ensure compliance requirements are always met"
        />
        <Card
          icon={<Grid />}
          title="Security"
          content="Get unparalleled visibility into your organization’s security posture and ensure compliance requirements are always met"
        />
        <Card
          icon={<Grid />}
          title="Security"
          content="Get unparalleled visibility into your organization’s security posture and ensure compliance requirements are always met"
        />
      </div>
    </section>
  );
}
